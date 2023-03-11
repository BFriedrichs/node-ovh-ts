/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsMigrationStatusEnum } from './VpsMigrationStatusEnum';
import { VpsMigrationDatacenterEnum } from './VpsMigrationDatacenterEnum';
import { VpsMigrationOptionMapping2016 } from './VpsMigrationOptionMapping2016';

export type VpsMigrationVPS2016to2020 = {
  currentPlan: string;
  datacenter: VpsMigrationDatacenterEnum;
  date: Date | null;
  newPlan: string;
  options: VpsMigrationOptionMapping2016;
  product: string;
  status: VpsMigrationStatusEnum;
};
