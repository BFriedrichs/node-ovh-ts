/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslProvider } from './XdslProvider';
import { XdslFiberEligibilityStatusEnum } from './XdslFiberEligibilityStatusEnum';
import { XdslGtrEnum } from './XdslGtrEnum';
import { XdslOffer } from './XdslOffer';

export type XdslFiberEligibility = {
  availabilityDate: Date | null;
  buildingName: string | null;
  buildingReference: string | null;
  buildingSeqId: number | null;
  firstEligibleDate: Date | null;
  grts: XdslGtrEnum[] | null;
  id: number;
  lastUpdate: Date;
  offer: XdslOffer | null;
  provider: XdslProvider | null;
  status: XdslFiberEligibilityStatusEnum;
};
