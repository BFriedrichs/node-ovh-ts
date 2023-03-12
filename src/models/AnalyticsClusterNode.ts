/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsNodeTypeEnum } from './AnalyticsNodeTypeEnum';
import { AnalyticsStatusEnum } from './AnalyticsStatusEnum';

export type AnalyticsClusterNode = {
  deploymentEndDate: Date | null;
  deploymentStartDate: Date | null;
  flavor: string | null;
  hostname: string | null;
  ip: string | null;
  nodeId: string;
  nodeType: AnalyticsNodeTypeEnum;
  osRegion: string | null;
  status: AnalyticsStatusEnum;
  storage: number | null;
};
