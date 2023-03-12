/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoveryDrpTypeEnum } from './DedicatedCloudDisasterRecoveryDrpTypeEnum';
import { DedicatedCloudDisasterRecoveryRemoteSiteDetails } from './DedicatedCloudDisasterRecoveryRemoteSiteDetails';
import { DedicatedCloudDisasterRecoveryLocalSiteDetails } from './DedicatedCloudDisasterRecoveryLocalSiteDetails';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';

export type DedicatedCloudDisasterRecoveryProfile = {
  drpType: DedicatedCloudDisasterRecoveryDrpTypeEnum | null;
  localSiteInformation: DedicatedCloudDisasterRecoveryLocalSiteDetails | null;
  remoteSiteInformation: DedicatedCloudDisasterRecoveryRemoteSiteDetails | null;
  state: DedicatedCloudStateEnum;
  systemVersion: string;
};
