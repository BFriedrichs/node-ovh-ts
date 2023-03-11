/* WARNING: This file is auto-generated . Do not edit manually. */

import { WebPaaSStorageUnitEnum } from './WebPaaSStorageUnitEnum';
import { WebPaaSRegionEnum } from './WebPaaSRegionEnum';

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
