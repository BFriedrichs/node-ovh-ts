/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudQuotaNetworkQuotas } from './CloudQuotaNetworkQuotas';
import { CloudQuotaLoadbalancerQuotas } from './CloudQuotaLoadbalancerQuotas';
import { CloudQuotaKeymanagerQuotas } from './CloudQuotaKeymanagerQuotas';
import { CloudQuotaVolumeUsageQuotas } from './CloudQuotaVolumeUsageQuotas';
import { CloudQuotaKeypairQuotas } from './CloudQuotaKeypairQuotas';
import { CloudQuotaInstanceUsageQuotas } from './CloudQuotaInstanceUsageQuotas';

export type CloudQuotaQuotas = {
  instance: CloudQuotaInstanceUsageQuotas | null;
  keymanager: CloudQuotaKeymanagerQuotas | null;
  keypair: CloudQuotaKeypairQuotas | null;
  loadbalancer: CloudQuotaLoadbalancerQuotas | null;
  network: CloudQuotaNetworkQuotas | null;
  region: string;
  volume: CloudQuotaVolumeUsageQuotas | null;
};
