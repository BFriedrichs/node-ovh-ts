/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebUserServiceCredentials } from './HostingWebUserServiceCredentials';
import { HostingWebUserStateEnum } from './HostingWebUserStateEnum';
import { HostingWebUserStatusEnum } from './HostingWebUserStatusEnum';
import { HostingWebUserSshStateEnum } from './HostingWebUserSshStateEnum';

export type HostingWebUser = {
  home: string;
  isPrimaryAccount: boolean;
  login: string;
  serviceManagementCredentials: HostingWebUserServiceCredentials;
  sshState: HostingWebUserSshStateEnum;
  state: HostingWebUserStateEnum;
  status: HostingWebUserStatusEnum;
  taskId: number | null;
};
