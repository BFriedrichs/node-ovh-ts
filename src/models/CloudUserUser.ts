/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudUserUserStatusEnum } from './CloudUserUserStatusEnum';
import { CloudRoleRole } from './CloudRoleRole';

export type CloudUserUser = {
  creationDate?: Date;
  description?: string;
  id?: number;
  openstackId?: string | null;
  roles?: CloudRoleRole[];
  status?: CloudUserUserStatusEnum;
  username?: string;
};
