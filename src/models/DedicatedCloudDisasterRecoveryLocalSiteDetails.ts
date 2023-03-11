/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoverySiteRoleEnum } from './DedicatedCloudDisasterRecoverySiteRoleEnum';
import { DedicatedCloudDisasterRecoverySiteTypeEnum } from './DedicatedCloudDisasterRecoverySiteTypeEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';

export type DedicatedCloudDisasterRecoveryLocalSiteDetails = {
  role: DedicatedCloudDisasterRecoverySiteRoleEnum;
  state: DedicatedCloudStateEnum | null;
  type: DedicatedCloudDisasterRecoverySiteTypeEnum;
  zertoVersion: string;
  zvmIp: string | null;
};
