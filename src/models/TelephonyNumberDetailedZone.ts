/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyNumberCountryCodeEnum } from './TelephonyNumberCountryCodeEnum';
import { TelephonyNumberDetailedZoneMatchingCriteriaEnum } from './TelephonyNumberDetailedZoneMatchingCriteriaEnum';
import { TelephonyNumberCountryEnum } from './TelephonyNumberCountryEnum';
import { TelephonyNumberDetailedZoneTypeEnum } from './TelephonyNumberDetailedZoneTypeEnum';

export type TelephonyNumberDetailedZone = {
  askedCity?: string | null;
  city?: string;
  country?: TelephonyNumberCountryEnum;
  internationalNumber?: string;
  matchingCriteria?: TelephonyNumberDetailedZoneMatchingCriteriaEnum | null;
  number?: string;
  prefix?: TelephonyNumberCountryCodeEnum;
  type?: TelephonyNumberDetailedZoneTypeEnum;
  zipCode?: string | null;
  zneList?: string[];
};
