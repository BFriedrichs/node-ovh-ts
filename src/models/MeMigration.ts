/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';
import { MeMigrationStep } from './MeMigrationStep';
import { MeMigrationStatusEnum } from './MeMigrationStatusEnum';

export type MeMigration = {
  from: NichandleOvhSubsidiaryEnum;
  id: number;
  status: MeMigrationStatusEnum;
  steps: MeMigrationStep | null;
  to: NichandleOvhSubsidiaryEnum;
};
