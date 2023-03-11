/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageRegionEnum } from './StorageRegionEnum';
import { StorageNetAppServiceStatusEnum } from './StorageNetAppServiceStatusEnum';
import { StorageNetAppServicePerformanceLevelEnum } from './StorageNetAppServicePerformanceLevelEnum';

export type StorageNetAppService = {
  createdAt: Date;
  id: string;
  name: string;
  performanceLevel: StorageNetAppServicePerformanceLevelEnum;
  product: string;
  quota: number;
  region: StorageRegionEnum;
  status: StorageNetAppServiceStatusEnum;
};
