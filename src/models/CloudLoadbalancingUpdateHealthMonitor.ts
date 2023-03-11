/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingHealthMonitorHTTPConfiguration } from './CloudLoadbalancingHealthMonitorHTTPConfiguration';

export type CloudLoadbalancingUpdateHealthMonitor = {
  httpConfiguration: CloudLoadbalancingHealthMonitorHTTPConfiguration;
  maxRetries: number;
  maxRetriesDown: number;
  name: string;
  periodicity: number;
  timeout: number;
};
