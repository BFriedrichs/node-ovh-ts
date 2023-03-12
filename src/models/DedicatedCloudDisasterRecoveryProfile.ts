/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoveryLocalSiteDetails } from './DedicatedCloudDisasterRecoveryLocalSiteDetails';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';
import { DedicatedCloudDisasterRecoveryRemoteSiteDetails } from './DedicatedCloudDisasterRecoveryRemoteSiteDetails';
import { DedicatedCloudDisasterRecoveryDrpTypeEnum } from './DedicatedCloudDisasterRecoveryDrpTypeEnum';

export type DedicatedCloudDisasterRecoveryProfile = {
  drpType?: DedicatedCloudDisasterRecoveryDrpTypeEnum | null;
  localSiteInformation?: DedicatedCloudDisasterRecoveryLocalSiteDetails | null;
  remoteSiteInformation?: DedicatedCloudDisasterRecoveryRemoteSiteDetails | null;
  state?: DedicatedCloudStateEnum;
  systemVersion?: string;
};
