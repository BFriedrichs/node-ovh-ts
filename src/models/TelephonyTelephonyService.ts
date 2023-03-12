/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyNumberCountryCodeEnum } from './TelephonyNumberCountryCodeEnum';
import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';
import { TelephonyServiceNumberCountryEnum } from './TelephonyServiceNumberCountryEnum';
import { TelephonyPropertyEnum } from './TelephonyPropertyEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyTelephonyService = {
  associatedDeviceMac: string | null;
  country: TelephonyServiceNumberCountryEnum;
  countryCode: TelephonyNumberCountryCodeEnum;
  currentOutplan: OrderPrice;
  description: string;
  featureType: TelephonyTypeEnum;
  getPublicOffer: TelephonyLineOffer;
  hasFaxCapabilities: boolean;
  offers: string[];
  properties: TelephonyPropertyEnum[];
  rio: string;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
  simultaneousLines: number;
};
