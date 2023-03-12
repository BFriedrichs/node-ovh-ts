/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeMigrationStep } from './MeMigrationStep';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';
import { MeMigrationStatusEnum } from './MeMigrationStatusEnum';

export type MeMigration = {
  from: NichandleOvhSubsidiaryEnum;
  id: number;
  status: MeMigrationStatusEnum;
  steps: MeMigrationStep[] | null;
  to: NichandleOvhSubsidiaryEnum;
};
