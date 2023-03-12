/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixCluster } from './NutanixCluster';
import { NutanixStatusEnum } from './NutanixStatusEnum';

export type NutanixState = {
  allowedRedundancyFactor?: number[];
  availableVersions?: string[];
  serviceName?: string;
  status?: NutanixStatusEnum;
  targetSpec?: NutanixCluster;
};
