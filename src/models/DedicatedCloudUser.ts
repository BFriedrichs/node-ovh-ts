/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudUserStateEnum } from './DedicatedCloudUserStateEnum';
import { DedicatedCloudUserActivationStateEnum } from './DedicatedCloudUserActivationStateEnum';
import { DedicatedCloudUserTypeEnum } from './DedicatedCloudUserTypeEnum';

export type DedicatedCloudUser = {
  activationState?: DedicatedCloudUserActivationStateEnum | null;
  activeDirectoryId?: number | null;
  activeDirectoryType?: DedicatedCloudUserTypeEnum | null;
  canManageIpFailOvers?: boolean;
  canManageNetwork?: boolean;
  canManageRights?: boolean;
  email?: string | null;
  encryptionRight?: boolean;
  firstName?: string | null;
  fullAdminRo?: boolean;
  identityProviderId?: number | null;
  isEnableManageable?: boolean;
  isTokenValidator?: boolean;
  lastName?: string | null;
  login?: string;
  name?: string;
  nsxRight?: boolean;
  phoneNumber?: string | null;
  receiveAlerts?: boolean;
  state?: DedicatedCloudUserStateEnum;
  type?: DedicatedCloudUserTypeEnum | null;
  userId?: number;
};
