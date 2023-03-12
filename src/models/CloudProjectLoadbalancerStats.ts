/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerStatsStatusEnum } from './CloudProjectLoadbalancerStatsStatusEnum';
import { CloudProjectLoadbalancerStatsThroughput } from './CloudProjectLoadbalancerStatsThroughput';
import { CloudProjectLoadbalancerStatsTarget } from './CloudProjectLoadbalancerStatsTarget';

export type CloudProjectLoadbalancerStats = {
  concurrentFlows?: number;
  httpRequestsPerSecond?: number | null;
  status?: CloudProjectLoadbalancerStatsStatusEnum;
  targets?: CloudProjectLoadbalancerStatsTarget[];
  tcpConnectionsPerSecond?: number;
  throughput?: CloudProjectLoadbalancerStatsThroughput;
};
