/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslGtrEnum } from './XdslGtrEnum';
import { XdslOffer } from './XdslOffer';
import { XdslFiberEligibilityStatusEnum } from './XdslFiberEligibilityStatusEnum';
import { XdslProvider } from './XdslProvider';

export type XdslFiberEligibility = {
  availabilityDate: Date | null;
  buildingName: string | null;
  buildingReference: string | null;
  buildingSeqId: number | null;
  firstEligibleDate: Date | null;
  grts: XdslGtrEnum | null;
  id: number;
  lastUpdate: Date;
  offer: XdslOffer | null;
  provider: XdslProvider | null;
  status: XdslFiberEligibilityStatusEnum;
};
