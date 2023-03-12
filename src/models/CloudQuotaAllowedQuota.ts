/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudQuotaNetworkQuota } from './CloudQuotaNetworkQuota';
import { CloudQuotaComputeQuota } from './CloudQuotaComputeQuota';
import { CloudQuotaVolumeQuota } from './CloudQuotaVolumeQuota';

export type CloudQuotaAllowedQuota = {
  compute?: CloudQuotaComputeQuota;
  name?: string;
  network?: CloudQuotaNetworkQuota;
  volume?: CloudQuotaVolumeQuota;
};
