/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudQuotaInstanceUsageQuotas } from './CloudQuotaInstanceUsageQuotas';
import { CloudQuotaKeymanagerQuotas } from './CloudQuotaKeymanagerQuotas';
import { CloudQuotaVolumeUsageQuotas } from './CloudQuotaVolumeUsageQuotas';
import { CloudQuotaLoadbalancerQuotas } from './CloudQuotaLoadbalancerQuotas';
import { CloudQuotaKeypairQuotas } from './CloudQuotaKeypairQuotas';
import { CloudQuotaNetworkQuotas } from './CloudQuotaNetworkQuotas';

export type CloudQuotaQuotas = {
  instance?: CloudQuotaInstanceUsageQuotas | null;
  keymanager?: CloudQuotaKeymanagerQuotas | null;
  keypair?: CloudQuotaKeypairQuotas | null;
  loadbalancer?: CloudQuotaLoadbalancerQuotas | null;
  network?: CloudQuotaNetworkQuotas | null;
  region?: string;
  volume?: CloudQuotaVolumeUsageQuotas | null;
};
