/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsClusterNode } from './AnalyticsClusterNode';
import { AnalyticsStatusEnum } from './AnalyticsStatusEnum';

export type AnalyticsCluster = {
  analyticsProjectId?: string | null;
  clusterName?: string | null;
  clusterType?: string | null;
  deploymentEndDate?: Date | null;
  deploymentStartDate?: Date | null;
  domain?: string | null;
  nodes?: AnalyticsClusterNode[] | null;
  osProjectId?: string | null;
  osRegion?: string | null;
  serviceName?: string;
  status?: AnalyticsStatusEnum;
};
