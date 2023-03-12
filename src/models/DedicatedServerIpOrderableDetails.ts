/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerIpTypeOrderableEnum } from './DedicatedServerIpTypeOrderableEnum';
import { DedicatedServerIpBlockSizeEnum } from './DedicatedServerIpBlockSizeEnum';
import { DedicatedServerOptionRequiredEnum } from './DedicatedServerOptionRequiredEnum';

export type DedicatedServerIpOrderableDetails = {
  blockSizes: DedicatedServerIpBlockSizeEnum[];
  included: boolean;
  ipNumber: number | null;
  number: number;
  optionRequired: DedicatedServerOptionRequiredEnum | null;
  type: DedicatedServerIpTypeOrderableEnum;
};
