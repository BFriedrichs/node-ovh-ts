/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerMonitoringProtocolEnum } from './DedicatedServerMonitoringProtocolEnum';
import { DedicatedServerMonitoringIntervalEnum } from './DedicatedServerMonitoringIntervalEnum';

export type DedicatedServerServiceMonitoring = {
  challengeText?: string | null;
  enabled?: boolean;
  interval?: DedicatedServerMonitoringIntervalEnum;
  ip?: string;
  monitoringId?: number;
  port?: number;
  protocol?: DedicatedServerMonitoringProtocolEnum;
  url?: string | null;
};
