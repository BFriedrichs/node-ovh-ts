/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAvailabilityRegionEnum } from './DedicatedAvailabilityRegionEnum';
import { DedicatedAvailabilityEnum } from './DedicatedAvailabilityEnum';

export type DedicatedAvailabilitiesRaw = {
  availability?: DedicatedAvailabilityEnum;
  available?: number;
  incomingDatacenter?: number;
  lastRule?: string | null;
  ordered?: number;
  orderedCheck?: number;
  parentAvailable?: number;
  reference?: string;
  trueAvailable?: number;
  trueAvailable24H?: number;
  trueAvailable4H?: number;
  zone?: DedicatedAvailabilityRegionEnum;
};
