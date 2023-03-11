/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudQuotaInstanceUsageQuotas } from './CloudQuotaInstanceUsageQuotas';
import { CloudQuotaKeypairQuotas } from './CloudQuotaKeypairQuotas';
import { CloudQuotaKeymanagerQuotas } from './CloudQuotaKeymanagerQuotas';
import { CloudQuotaNetworkQuotas } from './CloudQuotaNetworkQuotas';
import { CloudQuotaVolumeUsageQuotas } from './CloudQuotaVolumeUsageQuotas';
import { CloudQuotaLoadbalancerQuotas } from './CloudQuotaLoadbalancerQuotas';

export type CloudQuotaQuotas = {
  instance: CloudQuotaInstanceUsageQuotas | null;
  keymanager: CloudQuotaKeymanagerQuotas | null;
  keypair: CloudQuotaKeypairQuotas | null;
  loadbalancer: CloudQuotaLoadbalancerQuotas | null;
  network: CloudQuotaNetworkQuotas | null;
  region: string;
  volume: CloudQuotaVolumeUsageQuotas | null;
};
