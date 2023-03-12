/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslOffer } from './XdslOffer';
import { XdslProvider } from './XdslProvider';
import { XdslGtrEnum } from './XdslGtrEnum';
import { XdslFiberEligibilityStatusEnum } from './XdslFiberEligibilityStatusEnum';

export type XdslFiberEligibility = {
  availabilityDate?: Date | null;
  buildingName?: string | null;
  buildingReference?: string | null;
  buildingSeqId?: number | null;
  firstEligibleDate?: Date | null;
  grts?: XdslGtrEnum[] | null;
  id?: number;
  lastUpdate?: Date;
  offer?: XdslOffer | null;
  provider?: XdslProvider | null;
  status?: XdslFiberEligibilityStatusEnum;
};
