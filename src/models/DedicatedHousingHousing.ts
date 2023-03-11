/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedHousingOptions } from './DedicatedHousingOptions';
import { DedicatedHousingDatacenterEnum } from './DedicatedHousingDatacenterEnum';
import { DedicatedHousingNetworkInfo } from './DedicatedHousingNetworkInfo';

export type DedicatedHousingHousing = {
  datacenter: DedicatedHousingDatacenterEnum | null;
  name: string;
  network: DedicatedHousingNetworkInfo;
  options: DedicatedHousingOptions;
  rack: string;
  securityCode: string;
};
