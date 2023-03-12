/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudComponent } from './CloudComponent';
import { CloudRegionContinentEnum } from './CloudRegionContinentEnum';
import { CloudRegionStatusEnum } from './CloudRegionStatusEnum';
import { CloudIpCountryEnum } from './CloudIpCountryEnum';

export type CloudRegion = {
  continentCode?: CloudRegionContinentEnum;
  datacenterLocation?: string;
  ipCountries?: CloudIpCountryEnum[];
  name?: string;
  services?: CloudComponent[];
  status?: CloudRegionStatusEnum;
};
