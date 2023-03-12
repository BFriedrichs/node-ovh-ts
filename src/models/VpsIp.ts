/* WARNING: This file is auto-generated . Do not edit manually. */

import { CoreTypesIpVersionEnum } from './CoreTypesIpVersionEnum';
import { VpsIpGeolocationEnum } from './VpsIpGeolocationEnum';
import { VpsIpTypeEnum } from './VpsIpTypeEnum';

export type VpsIp = {
  gateway?: string | null;
  geolocation?: VpsIpGeolocationEnum;
  ipAddress?: string;
  macAddress?: string | null;
  reverse?: string | null;
  type?: VpsIpTypeEnum;
  version?: CoreTypesIpVersionEnum;
};
