/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderReductionTypeEnum } from './OrderReductionTypeEnum';
import { OrderReductionContextEnum } from './OrderReductionContextEnum';
import { OrderPrice } from './OrderPrice';

export type OrderReduction = {
  context: OrderReductionContextEnum;
  description: string;
  price: OrderPrice;
  reductionDescription: string;
  type: OrderReductionTypeEnum;
  value: OrderPrice;
};
