/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslDslamPortStatusEnum } from './XdslDslamPortStatusEnum';
import { XdslDslamLineProfile } from './XdslDslamLineProfile';

export type XdslDslamPort = {
  lastDesyncDate?: Date | null;
  lastSyncDate?: Date | null;
  profile?: XdslDslamLineProfile | null;
  status?: XdslDslamPortStatusEnum;
};
