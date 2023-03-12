/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsVpsVersionEnum } from './VpsVpsVersionEnum';
import { VpsVpsOptionEnum } from './VpsVpsOptionEnum';

export type VpsModel = {
  availableOptions?: VpsVpsOptionEnum[];
  datacenter?: string[];
  disk?: number;
  maximumAdditionnalIp?: number;
  memory?: number;
  name?: string;
  offer?: string;
  vcore?: number;
  version?: VpsVpsVersionEnum;
};
