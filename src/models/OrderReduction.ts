/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderReductionContextEnum } from './OrderReductionContextEnum';
import { OrderReductionTypeEnum } from './OrderReductionTypeEnum';
import { OrderPrice } from './OrderPrice';

export type OrderReduction = {
  context: OrderReductionContextEnum;
  description: string;
  price: OrderPrice;
  reductionDescription: string;
  type: OrderReductionTypeEnum;
  value: OrderPrice;
};
