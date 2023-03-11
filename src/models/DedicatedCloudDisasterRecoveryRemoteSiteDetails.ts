/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDisasterRecoverySiteRoleEnum } from './DedicatedCloudDisasterRecoverySiteRoleEnum';
import { DedicatedCloudDisasterRecoverySiteTypeEnum } from './DedicatedCloudDisasterRecoverySiteTypeEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';
import { DedicatedCloudDisasterRecoveryVpnConfigStateEnum } from './DedicatedCloudDisasterRecoveryVpnConfigStateEnum';

export type DedicatedCloudDisasterRecoveryRemoteSiteDetails = {
  datacenterId: number | null;
  datacenterName: string | null;
  lastVpnConfig: Date | null;
  remoteEndpointInternalIp: string | null;
  remoteEndpointPublicIp: string | null;
  remoteZvmInternalIp: string | null;
  role: DedicatedCloudDisasterRecoverySiteRoleEnum | null;
  serviceName: string | null;
  state: DedicatedCloudStateEnum | null;
  type: DedicatedCloudDisasterRecoverySiteTypeEnum;
  vpnConfigState: DedicatedCloudDisasterRecoveryVpnConfigStateEnum | null;
  zertoVersion: string | null;
};
