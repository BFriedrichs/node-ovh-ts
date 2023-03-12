/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeMigrationStepNameEnum } from './MeMigrationStepNameEnum';
import { MeMigrationStepDebt } from './MeMigrationStepDebt';
import { MeMigrationStepOrders } from './MeMigrationStepOrders';
import { MeMigrationStepContracts } from './MeMigrationStepContracts';
import { MeMigrationStepStatusEnum } from './MeMigrationStepStatusEnum';

export type MeMigrationStep = {
  contracts?: MeMigrationStepContracts | null;
  debt?: MeMigrationStepDebt | null;
  name?: MeMigrationStepNameEnum;
  orders?: MeMigrationStepOrders | null;
  status?: MeMigrationStepStatusEnum;
};
