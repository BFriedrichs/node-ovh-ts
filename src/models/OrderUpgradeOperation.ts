/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderUpgradeOperationStatusEnum } from './OrderUpgradeOperationStatusEnum';
import { OrderUpgradeOperationProduct } from './OrderUpgradeOperationProduct';
import { OrderUpgradeOperationTypeEnum } from './OrderUpgradeOperationTypeEnum';

export type OrderUpgradeOperation = {
  id?: number;
  product?: OrderUpgradeOperationProduct;
  status?: OrderUpgradeOperationStatusEnum;
  type?: OrderUpgradeOperationTypeEnum;
};
