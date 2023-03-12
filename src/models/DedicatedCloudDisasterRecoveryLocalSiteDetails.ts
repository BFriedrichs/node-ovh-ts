/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoverySiteTypeEnum } from './DedicatedCloudDisasterRecoverySiteTypeEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';
import { DedicatedCloudDisasterRecoverySiteRoleEnum } from './DedicatedCloudDisasterRecoverySiteRoleEnum';

export type DedicatedCloudDisasterRecoveryLocalSiteDetails = {
  role: DedicatedCloudDisasterRecoverySiteRoleEnum;
  state: DedicatedCloudStateEnum | null;
  type: DedicatedCloudDisasterRecoverySiteTypeEnum;
  zertoVersion: string;
  zvmIp: string | null;
};
