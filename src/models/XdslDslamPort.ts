/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslDslamLineProfile } from './XdslDslamLineProfile';
import { XdslDslamPortStatusEnum } from './XdslDslamPortStatusEnum';

export type XdslDslamPort = {
  lastDesyncDate: Date | null;
  lastSyncDate: Date | null;
  profile: XdslDslamLineProfile | null;
  status: XdslDslamPortStatusEnum;
};
