/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudQuotaNetworkQuota } from './CloudQuotaNetworkQuota';
import { CloudQuotaVolumeQuota } from './CloudQuotaVolumeQuota';
import { CloudQuotaComputeQuota } from './CloudQuotaComputeQuota';

export type CloudQuotaAllowedQuota = {
  compute: CloudQuotaComputeQuota;
  name: string;
  network: CloudQuotaNetworkQuota;
  volume: CloudQuotaVolumeQuota;
};
