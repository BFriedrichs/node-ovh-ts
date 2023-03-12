/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebUserStatusEnum } from './HostingWebUserStatusEnum';
import { HostingWebUserStateEnum } from './HostingWebUserStateEnum';
import { HostingWebUserSshStateEnum } from './HostingWebUserSshStateEnum';
import { HostingWebUserServiceCredentials } from './HostingWebUserServiceCredentials';

export type HostingWebUser = {
  home?: string;
  isPrimaryAccount?: boolean;
  login?: string;
  serviceManagementCredentials?: HostingWebUserServiceCredentials;
  sshState?: HostingWebUserSshStateEnum;
  state?: HostingWebUserStateEnum;
  status?: HostingWebUserStatusEnum;
  taskId?: number | null;
};
