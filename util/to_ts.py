import subprocess
import os
import json
import shutil
import sys

generate_docs = True
if '--no-docs' in sys.argv:
  generate_docs = False

fix_lint = False
if '--fix' in sys.argv:
  fix_lint = True

dry = False
if '--dry' in sys.argv:
  dry = True

base_path = os.path.join('..', 'src')

if not dry:
  dirs = ['handlers', 'models']
  for d in dirs:
    path = os.path.join(base_path, d)
    if os.path.exists(path):
      shutil.rmtree(path)
    os.makedirs(path, exist_ok=True)


def gen_docs(handlers, models):
  docs = ''

  for handler, routes in handlers.items():
    docs += f'## [{handler}Handler](lib/src/handlers/{handler}.ts)\n\n'
    docs += '| Function | Method | Route | Params |\n'
    docs += '| :- | :- | :-  | :-  |\n'
    for route in routes:
      path_formatted = route['path'].replace('${', '{')[1:-1]
      params_formatted = route['params']
      has_custom_body = 'body: {' in params_formatted
      body_split = params_formatted.split('body:')

      def parse_params(param_str):
        results = []
        parameters = param_str.split(',')
        for param in parameters:
          if param.strip() == '':
            continue
          param = param.split(':')
          param[1] = param[1].strip()
          if param[1] in models:
            param[1] = f'[{param[1]}](lib/src/models/{param[1]}.ts)'
          results.append(': '.join(param))
        return results

      results = parse_params(body_split[0])
      if has_custom_body:
        body_params = parse_params(body_split[1][2:-1])
        results.append(f'body: {{<br /> {"<br />&nbsp;&nbsp;".join(body_params)} <br />}}')

      docs += f'| `.{handler.lower()}.{route["name"]}` | {route["method"]} | `{path_formatted}` | {"<br />".join(results)} |\n'
    docs += '\n'

  with open('../DOCS.md', 'w') as f:
    f.write(docs)


HANDLER_TEMPLATE = """/* WARNING: This file is auto-generated . Do not edit manually. */

{imports}
import OVHBase from '../ovh';

class {base}Handler {{
  ovh: OVHBase;

  constructor(ovh: OVHBase) {{
    this.ovh = ovh;
  }}

{routes}
}}

export default {base}Handler;"""


ROUTE_TEMPLATE = """{jsdoc}  {name} = ({params}): Promise<{return_type}> => {{
    return this.ovh.request('{method}', {path}{has_body});
  }};

"""

all_models = {}

def translate_type(the_type):
  curr_type = the_type
  is_map = False
  if curr_type.startswith('map[string]'):
    curr_type = curr_type[11:]
    is_map = True

  is_array = curr_type.endswith('[]')
  curr_type = curr_type[:-2] if is_array else curr_type

  curr_type = curr_type.replace('<T>', '')

  if '<' in curr_type:
    curr_type = curr_type.split('<')[1].split('>')[0]

  if curr_type == 'datetime' or curr_type == 'date' or curr_type == 'time':
    curr_type = 'Date'
  if curr_type == 'long':
    curr_type = 'number'
  if curr_type == 'double':
    curr_type = 'number'
  if curr_type == 'duration':
    curr_type = 'number'
  if curr_type == 'ip':
    curr_type = 'string'
  if curr_type == 'text':
    curr_type = 'string'
  if curr_type == 'macAddress':
    curr_type = 'string'
  if curr_type == 'email':
    curr_type = 'string'
  if curr_type == 'internationalPhoneNumber':
    curr_type = 'string'
  if curr_type == 'phoneNumber':
    curr_type = 'string'
  if curr_type == 'ipInterface':
    curr_type = 'string'
  if curr_type == 'ipv4':
    curr_type = 'string'
  if curr_type == 'ipv6':
    curr_type = 'string'
  if curr_type == 'uuid':
    curr_type = 'string'
  if curr_type == 'password':
    curr_type = 'string'
  if curr_type == 'coreTypes.AccountId:string':
    curr_type = 'string'
  if curr_type == 'ipBlock': #??
    curr_type = 'string'
  if curr_type == 'ipv4Block': #??
    curr_type = 'string'
  if curr_type == 'ipv6Block': #??
    curr_type = 'string'
  if curr_type == 'T':
    curr_type = 'any'

  non_dot = curr_type.split('.')
  name = ''.join([part[0].upper() + part[1:] for part in non_dot])
  import_name = None

  if name in all_models:
    import_name = curr_type = name
  else:
    for key in all_models.keys():
      if name.lower() == key.lower():
        import_name = curr_type = key
        break

  final_type = curr_type + ('[]' if is_array else '')
  final_type = f'Record<string, {curr_type}>' if is_map else curr_type
  return final_type, import_name

def model_to_response_type(model):
  response_type = ''
  imports = set()

  if 'enum' in model:
    return ' | '.join([f'"{enum}"' for enum in model['enum']]), []

  if 'properties' in model:
    for key, prop in model['properties'].items():
      optional = '?' if prop['required'] else ''
      can_be_null = ' | null' if prop['canBeNull'] else ''
      resolved, import_name = translate_type(prop["type"])
      if '-' in key or key[0].isdigit():
        key = f'\'{key}\''
      if import_name:
        imports.add(import_name)
      response_type += f'{key}{optional}: {resolved}{can_be_null}; '\

  if response_type != '':
    response_type = '{ ' + response_type + '}'
  return response_type, imports

all_handlers = {}
api_files = os.listdir('apis')
for api_file in sorted(api_files):
  data = json.load(open('apis/' + api_file))
  if 'apis' not in data:
    continue

  # Retain model lookup
  models = data['models']
  for model_name in models:
    # nichandle.Nichandle => NichandleNichandle
    non_generic = model_name.replace('<T>', '')
    non_dot = non_generic.split('.')
    final_name = ''.join([part[0].upper() + part[1:] for part in non_dot])

    # Naming issues with different casing
    all_lower_keys = [key.lower() for key in all_models.keys()]
    if final_name.lower() in all_lower_keys:
      continue

    all_models[final_name] = models[model_name]

  routes = data['apis']

  route_types = []
  handler_routes = []
  imports = set()
  for api in routes:
    for operation in api['operations']:
      # e.g., GET /me/abuse = ovhClient.me.getAbuse()
      path_split = api['path'][1:].split('/')[1:]
      path_split = [item.replace('{', '').replace('}', '') for item in path_split]
      extra = [item[0].upper() + item[1:] for item in path_split]

      name = operation['httpMethod'].lower() + ''.join(extra)
      # if api['path'].endswith('}'):
      #   name = name + 'ById'

      js_param_str = ''
      js_body_str = ''
      body_data = {}
      for parameter in operation['parameters']:
        required = '' if parameter['required'] else '?'
        the_type, import_name = translate_type(parameter["dataType"])
        if import_name:
          imports.add(import_name)
        if parameter['paramType'] == 'path':
          js_param_str += f'{parameter["name"]}{required}: {the_type}, '

        if parameter['paramType'] == 'body':
          # Body can be an object with keys or a model
          if 'name' in parameter:
            required = '' if parameter['required'] else '?'
            body_data[parameter['name'] + required] = the_type
          else:
            js_body_str = f'body: {the_type}'

      if len(body_data) > 0:
        js_body_str = 'body: { ' + ', '.join([f'{key}: {value}' for key, value in body_data.items()]) + ' }'

      js_param_str += js_body_str
      if js_param_str.endswith(', '):
        js_param_str = js_param_str[:-2]

      response_type, import_name = translate_type(operation['responseType'])
      if import_name:
        imports.add(import_name)

      js_path = api['path'].replace('{', '${')
      # If body is a key/value object, replace the keys with body.key
      for key in body_data.keys():
        js_path = js_path.replace(f'{{{key}}}', '{body.' + key + '}')

      # Templating for the path
      if '${' in js_path:
        js_path = f'`{js_path}`'
      else:
        js_path = f"'{js_path}'"

      jsdoc = operation.get('description', '')
      if jsdoc != '':
        jsdoc = f'  /** {jsdoc} */\n'

      route = ROUTE_TEMPLATE.format(
        jsdoc=jsdoc,
        name=name,
        params=js_param_str,
        return_type=response_type,
        method=operation['httpMethod'],
        path=js_path,
        has_body=', body' if js_body_str != '' else ''
      )
      handler_routes.append({
        'name': name,
        'params': js_param_str,
        'return_type': response_type,
        'path': js_path,
        'method': operation['httpMethod'],
        'js': route
      })

  # Same naming convention as models
  resource_name_split = data['resourcePath'][1:].split('/')
  base_name = ''.join([split[0].upper() + split[1:] for split in resource_name_split])
  imports_str = '\n'.join([f'import {{ {the_type} }} from \'../models/{the_type}\';' for the_type in imports if the_type != base_name])
  handler = HANDLER_TEMPLATE.format(
    imports=imports_str,
    base=base_name,
    routes=''.join([route['js'] for route in handler_routes])
  )

  all_handlers[base_name] = handler_routes
  if not dry:
    with open(os.path.join(base_path, 'handlers', base_name + '.ts'), 'w') as f:
      f.write(handler)


MODEL_TEMPLATE = """/* WARNING: This file is auto-generated . Do not edit manually. */

{imports}

export type {name} = {properties};
"""
for model_name in all_models:
  the_type, imports = model_to_response_type(all_models[model_name])
  imports_str = '\n'.join([f'import {{ {the_type} }} from \'./{the_type}\';' for the_type in imports if the_type != model_name])
  model_str = MODEL_TEMPLATE.format(
    name=model_name,
    imports=imports_str,
    properties=the_type
  )
  if not dry:
    with open(os.path.join(base_path, 'models', model_name + '.ts'), 'w') as f:
      f.write(model_str)


INDEX_TEMPLATE = """/* WARNING: This file is auto-generated . Do not edit manually. */

{imports}
import OVHBase from './ovh';

export default class OVH extends OVHBase {{
{handlers}
}}
"""

handler_imports = '\n'.join([f'import {handler}Handler from \'./handlers/{handler}\';' for handler in all_handlers])
handler_defs = '\n'.join([f'  public {handler[0].lower() + handler[1:]} = new {handler}Handler(this);' for handler in all_handlers])
index = INDEX_TEMPLATE.format(
  imports=handler_imports,
  handlers=handler_defs
)
if not dry:
  with open(os.path.join(base_path, 'index.ts'), 'w') as f:
    f.write(index)

if generate_docs:
  gen_docs(all_handlers, all_models)

if fix_lint:
  base_path = os.path.join(os.path.dirname(__file__), '..')
  subprocess.Popen('pnpm exec prettier --write ./lib', shell=True, cwd=base_path).wait()
