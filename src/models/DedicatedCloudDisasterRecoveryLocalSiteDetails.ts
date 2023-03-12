/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoverySiteTypeEnum } from './DedicatedCloudDisasterRecoverySiteTypeEnum';
import { DedicatedCloudDisasterRecoverySiteRoleEnum } from './DedicatedCloudDisasterRecoverySiteRoleEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';

export type DedicatedCloudDisasterRecoveryLocalSiteDetails = {
  role?: DedicatedCloudDisasterRecoverySiteRoleEnum;
  state?: DedicatedCloudStateEnum | null;
  type?: DedicatedCloudDisasterRecoverySiteTypeEnum;
  zertoVersion?: string;
  zvmIp?: string | null;
};
