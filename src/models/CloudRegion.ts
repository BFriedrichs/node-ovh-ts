/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudComponent } from './CloudComponent';
import { CloudRegionStatusEnum } from './CloudRegionStatusEnum';
import { CloudRegionContinentEnum } from './CloudRegionContinentEnum';
import { CloudIpCountryEnum } from './CloudIpCountryEnum';

export type CloudRegion = {
  continentCode: CloudRegionContinentEnum;
  datacenterLocation: string;
  ipCountries: CloudIpCountryEnum[];
  name: string;
  services: CloudComponent[];
  status: CloudRegionStatusEnum;
};
