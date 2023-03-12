/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixDatacenterAvailability } from './NutanixDatacenterAvailability';
import { NutanixRedundancyFactorEnum } from './NutanixRedundancyFactorEnum';
import { NutanixDeploymentTypeEnum } from './NutanixDeploymentTypeEnum';

export type NutanixAvailability = {
  datacenters?: NutanixDatacenterAvailability[];
  deploymentType?: NutanixDeploymentTypeEnum | null;
  erasureCoding?: boolean | null;
  fqn?: string;
  memory?: string;
  planCode?: string;
  redundancyFactor?: NutanixRedundancyFactorEnum | null;
  server?: string;
  storage?: string;
  systemStorage?: string | null;
};
