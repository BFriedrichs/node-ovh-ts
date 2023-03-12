/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAvailabilityDatacenterEnum } from './DedicatedAvailabilityDatacenterEnum';
import { DedicatedAvailabilityEnum } from './DedicatedAvailabilityEnum';

export type DedicatedAvailabilityRawDatacenter = {
  availability: DedicatedAvailabilityEnum;
  datacenter: DedicatedAvailabilityDatacenterEnum;
  lastRule: string | null;
  parentAvailable: number;
  trueAvailable: number;
};
