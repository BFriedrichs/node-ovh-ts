/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyNumber = {
  description: string;
  featureType: TelephonyTypeEnum;
  partOfPool: string | null;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
};
