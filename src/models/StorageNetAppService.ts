/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageRegionEnum } from './StorageRegionEnum';
import { StorageNetAppServicePerformanceLevelEnum } from './StorageNetAppServicePerformanceLevelEnum';
import { StorageNetAppServiceStatusEnum } from './StorageNetAppServiceStatusEnum';

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
