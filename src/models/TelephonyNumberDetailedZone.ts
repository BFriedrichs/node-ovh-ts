/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyNumberDetailedZoneTypeEnum } from './TelephonyNumberDetailedZoneTypeEnum';
import { TelephonyNumberDetailedZoneMatchingCriteriaEnum } from './TelephonyNumberDetailedZoneMatchingCriteriaEnum';
import { TelephonyNumberCountryCodeEnum } from './TelephonyNumberCountryCodeEnum';
import { TelephonyNumberCountryEnum } from './TelephonyNumberCountryEnum';

export type TelephonyNumberDetailedZone = {
  askedCity: string | null;
  city: string;
  country: TelephonyNumberCountryEnum;
  internationalNumber: string;
  matchingCriteria: TelephonyNumberDetailedZoneMatchingCriteriaEnum | null;
  number: string;
  prefix: TelephonyNumberCountryCodeEnum;
  type: TelephonyNumberDetailedZoneTypeEnum;
  zipCode: string | null;
  zneList: string;
};
