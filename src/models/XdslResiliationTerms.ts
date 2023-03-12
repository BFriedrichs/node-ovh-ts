/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { XdslResiliationReasonEnum } from './XdslResiliationReasonEnum';

export type XdslResiliationTerms = {
  due: OrderPrice;
  engageDate: Date | null;
  minResiliationDate: Date;
  resiliationDate: Date;
  resiliationReasons: XdslResiliationReasonEnum[];
};
