/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAvailabilityEnum } from './DedicatedAvailabilityEnum';
import { DedicatedAvailabilityDatacenterEnum } from './DedicatedAvailabilityDatacenterEnum';

export type DedicatedAvailabilityRawDatacenter = {
  availability: DedicatedAvailabilityEnum;
  datacenter: DedicatedAvailabilityDatacenterEnum;
  lastRule: string | null;
  parentAvailable: number;
  trueAvailable: number;
};
