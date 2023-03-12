/* WARNING: This file is auto-generated . Do not edit manually. */

import { CoreTypesIpVersionEnum } from './CoreTypesIpVersionEnum';
import { XdslIpStatusEnum } from './XdslIpStatusEnum';

export type XdslIP = {
  dnsList?: string[];
  ip?: string;
  range?: number;
  status?: XdslIpStatusEnum;
  version?: CoreTypesIpVersionEnum;
};
