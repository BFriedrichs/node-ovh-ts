/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudAuthenticationTokenProject } from './CloudAuthenticationTokenProject';
import { CloudAuthenticationCatalog } from './CloudAuthenticationCatalog';
import { CloudAuthenticationUserToken } from './CloudAuthenticationUserToken';
import { CloudAuthenticationRole } from './CloudAuthenticationRole';

export type CloudAuthenticationOpenstackToken = {
  catalog: CloudAuthenticationCatalog[];
  expires_at: Date;
  issued_at: Date;
  methods: string[];
  project: CloudAuthenticationTokenProject;
  roles: CloudAuthenticationRole[];
  user: CloudAuthenticationUserToken;
};
