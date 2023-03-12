/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderReductionContextEnum } from './OrderReductionContextEnum';
import { OrderPrice } from './OrderPrice';
import { OrderReductionTypeEnum } from './OrderReductionTypeEnum';

export type OrderReduction = {
  context?: OrderReductionContextEnum;
  description?: string;
  price?: OrderPrice;
  reductionDescription?: string;
  type?: OrderReductionTypeEnum;
  value?: OrderPrice;
};
