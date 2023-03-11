/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsIpTypeEnum } from './VpsIpTypeEnum';
import { CoreTypesIpVersionEnum } from './CoreTypesIpVersionEnum';
import { VpsIpGeolocationEnum } from './VpsIpGeolocationEnum';

export type VpsIp = {
  gateway: string | null;
  geolocation: VpsIpGeolocationEnum;
  ipAddress: string;
  macAddress: string | null;
  reverse: string | null;
  type: VpsIpTypeEnum;
  version: CoreTypesIpVersionEnum;
};
