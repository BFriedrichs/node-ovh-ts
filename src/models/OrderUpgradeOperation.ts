/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderUpgradeOperationTypeEnum } from './OrderUpgradeOperationTypeEnum';
import { OrderUpgradeOperationStatusEnum } from './OrderUpgradeOperationStatusEnum';
import { OrderUpgradeOperationProduct } from './OrderUpgradeOperationProduct';

export type OrderUpgradeOperation = {
  id: number;
  product: OrderUpgradeOperationProduct;
  status: OrderUpgradeOperationStatusEnum;
  type: OrderUpgradeOperationTypeEnum;
};
