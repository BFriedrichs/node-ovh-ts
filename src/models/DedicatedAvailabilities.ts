/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAvailabilityRegionEnum } from './DedicatedAvailabilityRegionEnum';
import { DedicatedAvailabilityDatacenter } from './DedicatedAvailabilityDatacenter';

export type DedicatedAvailabilities = {
  datacenters?: DedicatedAvailabilityDatacenter[];
  hardware?: string | null;
  region?: DedicatedAvailabilityRegionEnum | null;
};
