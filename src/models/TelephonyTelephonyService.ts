/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { TelephonyServiceNumberCountryEnum } from './TelephonyServiceNumberCountryEnum';
import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyNumberCountryCodeEnum } from './TelephonyNumberCountryCodeEnum';
import { TelephonyPropertyEnum } from './TelephonyPropertyEnum';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyTelephonyService = {
  associatedDeviceMac?: string | null;
  country?: TelephonyServiceNumberCountryEnum;
  countryCode?: TelephonyNumberCountryCodeEnum;
  currentOutplan?: OrderPrice;
  description?: string;
  featureType?: TelephonyTypeEnum;
  getPublicOffer?: TelephonyLineOffer;
  hasFaxCapabilities?: boolean;
  offers?: string[];
  properties?: TelephonyPropertyEnum[];
  rio?: string;
  serviceName?: string;
  serviceType?: TelephonyTypeServiceEnum;
  simultaneousLines?: number;
};
