/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyRedirect = {
  description?: string;
  destination?: string | null;
  featureType?: TelephonyTypeEnum;
  serviceName?: string;
  serviceType?: TelephonyTypeServiceEnum;
};
