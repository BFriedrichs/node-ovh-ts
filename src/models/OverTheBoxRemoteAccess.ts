/* WARNING: This file is auto-generated . Do not edit manually. */

import { OverTheBoxRemoteAccessUserInfos } from './OverTheBoxRemoteAccessUserInfos';
import { OverTheBoxRemoteAccessConnectionInfos } from './OverTheBoxRemoteAccessConnectionInfos';
import { OverTheBoxRemoteAccessStatusEnum } from './OverTheBoxRemoteAccessStatusEnum';

export type OverTheBoxRemoteAccess = {
  accepted?: boolean;
  askDate?: Date;
  authorizedBy?: string | null;
  connectionInfos?: OverTheBoxRemoteAccessConnectionInfos;
  expirationDate?: Date;
  exposedPort?: number;
  remoteAccessId?: string;
  remoteUserInfos?: OverTheBoxRemoteAccessUserInfos;
  status?: OverTheBoxRemoteAccessStatusEnum;
};
