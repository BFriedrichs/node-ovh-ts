/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyServiceNumberCountryEnum } from './TelephonyServiceNumberCountryEnum';
import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyPropertyEnum } from './TelephonyPropertyEnum';
import { OrderPrice } from './OrderPrice';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';
import { TelephonyNumberCountryCodeEnum } from './TelephonyNumberCountryCodeEnum';

export type TelephonyTelephonyService = {
  associatedDeviceMac: string | null;
  country: TelephonyServiceNumberCountryEnum;
  countryCode: TelephonyNumberCountryCodeEnum;
  currentOutplan: OrderPrice;
  description: string;
  featureType: TelephonyTypeEnum;
  getPublicOffer: TelephonyLineOffer;
  hasFaxCapabilities: boolean;
  offers: string;
  properties: TelephonyPropertyEnum;
  rio: string;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
  simultaneousLines: number;
};
