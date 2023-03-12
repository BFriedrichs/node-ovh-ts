/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeMigrationStepStatusEnum } from './MeMigrationStepStatusEnum';
import { MeMigrationStepDebt } from './MeMigrationStepDebt';
import { MeMigrationStepContracts } from './MeMigrationStepContracts';
import { MeMigrationStepNameEnum } from './MeMigrationStepNameEnum';
import { MeMigrationStepOrders } from './MeMigrationStepOrders';

export type MeMigrationStep = {
  contracts: MeMigrationStepContracts | null;
  debt: MeMigrationStepDebt | null;
  name: MeMigrationStepNameEnum;
  orders: MeMigrationStepOrders | null;
  status: MeMigrationStepStatusEnum;
};
