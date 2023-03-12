/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderUpgradeOperationTypeEnum } from './OrderUpgradeOperationTypeEnum';
import { OrderUpgradeOperationProduct } from './OrderUpgradeOperationProduct';
import { OrderUpgradeOperationStatusEnum } from './OrderUpgradeOperationStatusEnum';

export type OrderUpgradeOperation = {
  id: number;
  product: OrderUpgradeOperationProduct;
  status: OrderUpgradeOperationStatusEnum;
  type: OrderUpgradeOperationTypeEnum;
};
