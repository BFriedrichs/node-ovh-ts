/* WARNING: This file is auto-generated . Do not edit manually. */

import { PackXdslResiliationReasonEnum } from './PackXdslResiliationReasonEnum';
import { OrderPrice } from './OrderPrice';

export type PackXdslResiliationTerms = {
  due: OrderPrice;
  engageDate: Date | null;
  minResiliationDate: Date;
  resiliationDate: Date;
  resiliationReasons: PackXdslResiliationReasonEnum[];
};
