/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsStatusEnum } from './AnalyticsStatusEnum';
import { AnalyticsNodeTypeEnum } from './AnalyticsNodeTypeEnum';

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
