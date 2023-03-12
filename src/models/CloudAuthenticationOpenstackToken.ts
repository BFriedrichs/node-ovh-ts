/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudAuthenticationTokenProject } from './CloudAuthenticationTokenProject';
import { CloudAuthenticationRole } from './CloudAuthenticationRole';
import { CloudAuthenticationCatalog } from './CloudAuthenticationCatalog';
import { CloudAuthenticationUserToken } from './CloudAuthenticationUserToken';

export type CloudAuthenticationOpenstackToken = {
  catalog?: CloudAuthenticationCatalog[];
  expires_at?: Date;
  issued_at?: Date;
  methods?: string[];
  project?: CloudAuthenticationTokenProject;
  roles?: CloudAuthenticationRole[];
  user?: CloudAuthenticationUserToken;
};
