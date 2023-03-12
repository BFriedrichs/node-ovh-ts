/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSRegionEnum } from './WebPaaSRegionEnum';
import { WebPaaSStorageUnitEnum } from './WebPaaSStorageUnitEnum';

export type WebPaaSSubscriptionMetadataProject = {
  availableEnvironments: number;
  availableUserLicenses: number;
  environment: number;
  region: WebPaaSRegionEnum;
  renewDate: Date | null;
  storage: number | null;
  storageUnit: WebPaaSStorageUnitEnum | null;
  userLicenses: number | null;
  vcpu: number;
};
