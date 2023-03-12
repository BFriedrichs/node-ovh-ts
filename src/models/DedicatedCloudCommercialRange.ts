/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudRightNetworkRoleEnum } from './DedicatedCloudRightNetworkRoleEnum';
import { DedicatedCloudHypervisorVersionEnum } from './DedicatedCloudHypervisorVersionEnum';

export type DedicatedCloudCommercialRange = {
  allowedHypervisorVersions: DedicatedCloudHypervisorVersionEnum[];
  allowedNetworkRoles: DedicatedCloudRightNetworkRoleEnum[];
  commercialRangeName: string;
  dedicatedCloudVersion: string;
  range: string | null;
};
