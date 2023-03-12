/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { PackXdslResiliationReasonEnum } from './PackXdslResiliationReasonEnum';

export type PackXdslResiliationTerms = {
  due?: OrderPrice;
  engageDate?: Date | null;
  minResiliationDate?: Date;
  resiliationDate?: Date;
  resiliationReasons?: PackXdslResiliationReasonEnum[];
};
