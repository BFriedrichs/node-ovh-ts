/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerStatsTarget } from './CloudProjectLoadbalancerStatsTarget';
import { CloudProjectLoadbalancerStatsStatusEnum } from './CloudProjectLoadbalancerStatsStatusEnum';
import { CloudProjectLoadbalancerStatsThroughput } from './CloudProjectLoadbalancerStatsThroughput';

export type CloudProjectLoadbalancerStats = {
  concurrentFlows: number;
  httpRequestsPerSecond: number | null;
  status: CloudProjectLoadbalancerStatsStatusEnum;
  targets: CloudProjectLoadbalancerStatsTarget;
  tcpConnectionsPerSecond: number;
  throughput: CloudProjectLoadbalancerStatsThroughput;
};
