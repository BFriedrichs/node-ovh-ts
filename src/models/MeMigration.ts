/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeMigrationStatusEnum } from './MeMigrationStatusEnum';
import { MeMigrationStep } from './MeMigrationStep';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';

export type MeMigration = {
  from?: NichandleOvhSubsidiaryEnum;
  id?: number;
  status?: MeMigrationStatusEnum;
  steps?: MeMigrationStep[] | null;
  to?: NichandleOvhSubsidiaryEnum;
};
