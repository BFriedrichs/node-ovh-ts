/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslResiliationReasonEnum } from './XdslResiliationReasonEnum';
import { OrderPrice } from './OrderPrice';

export type XdslResiliationTerms = {
  due: OrderPrice;
  engageDate: Date | null;
  minResiliationDate: Date;
  resiliationDate: Date;
  resiliationReasons: XdslResiliationReasonEnum;
};
