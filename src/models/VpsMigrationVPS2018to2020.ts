/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsMigrationVPS2018to2020Plan } from './VpsMigrationVPS2018to2020Plan';
import { VpsMigrationStatusEnum } from './VpsMigrationStatusEnum';
import { VpsMigrationDatacenterEnum } from './VpsMigrationDatacenterEnum';

export type VpsMigrationVPS2018to2020 = {
  datacenter: VpsMigrationDatacenterEnum;
  date: Date | null;
  plans: VpsMigrationVPS2018to2020Plan;
  status: VpsMigrationStatusEnum;
};
