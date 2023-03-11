/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebUserSshStateEnum } from './HostingWebUserSshStateEnum';
import { HostingWebUserStateEnum } from './HostingWebUserStateEnum';
import { HostingWebUserStatusEnum } from './HostingWebUserStatusEnum';
import { HostingWebUserServiceCredentials } from './HostingWebUserServiceCredentials';

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
