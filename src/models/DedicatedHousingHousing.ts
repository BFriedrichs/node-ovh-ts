/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedHousingDatacenterEnum } from './DedicatedHousingDatacenterEnum';
import { DedicatedHousingNetworkInfo } from './DedicatedHousingNetworkInfo';
import { DedicatedHousingOptions } from './DedicatedHousingOptions';

export type DedicatedHousingHousing = {
  datacenter?: DedicatedHousingDatacenterEnum | null;
  name?: string;
  network?: DedicatedHousingNetworkInfo[];
  options?: DedicatedHousingOptions;
  rack?: string;
  securityCode?: string;
};
