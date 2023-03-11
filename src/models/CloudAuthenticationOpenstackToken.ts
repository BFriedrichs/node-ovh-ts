/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudAuthenticationUserToken } from './CloudAuthenticationUserToken';
import { CloudAuthenticationRole } from './CloudAuthenticationRole';
import { CloudAuthenticationCatalog } from './CloudAuthenticationCatalog';
import { CloudAuthenticationTokenProject } from './CloudAuthenticationTokenProject';

export type CloudAuthenticationOpenstackToken = {
  catalog: CloudAuthenticationCatalog;
  expires_at: Date;
  issued_at: Date;
  methods: string;
  project: CloudAuthenticationTokenProject;
  roles: CloudAuthenticationRole;
  user: CloudAuthenticationUserToken;
};
