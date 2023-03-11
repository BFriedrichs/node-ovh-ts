/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudRegionContinentEnum } from './CloudRegionContinentEnum';
import { CloudComponent } from './CloudComponent';
import { CloudRegionStatusEnum } from './CloudRegionStatusEnum';
import { CloudIpCountryEnum } from './CloudIpCountryEnum';

export type CloudRegion = {
  continentCode: CloudRegionContinentEnum;
  datacenterLocation: string;
  ipCountries: CloudIpCountryEnum;
  name: string;
  services: CloudComponent;
  status: CloudRegionStatusEnum;
};
