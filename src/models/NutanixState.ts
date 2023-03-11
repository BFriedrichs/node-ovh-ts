/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixStatusEnum } from './NutanixStatusEnum';
import { NutanixCluster } from './NutanixCluster';

export type NutanixState = {
  allowedRedundancyFactor: number;
  availableVersions: string;
  serviceName: string;
  status: NutanixStatusEnum;
  targetSpec: NutanixCluster;
};
