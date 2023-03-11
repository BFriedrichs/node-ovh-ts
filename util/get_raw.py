import requests
import os

os.makedirs('apis', exist_ok=True)

BASE_URL = 'https://api.ovh.com/1.0/'

main = requests.get(BASE_URL + '?null.json')
all_apis = main.json()['apis']

for api in all_apis:
  r = requests.get(BASE_URL + api['path'][1:] + '.json')

  with open('apis/' + api['path'][1:].replace('/', '_') + '.json', 'w') as f:
    f.write(r.text)
