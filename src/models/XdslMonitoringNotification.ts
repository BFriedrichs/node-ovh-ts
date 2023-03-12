/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslMonitoringNotificationsTypeEnum } from './XdslMonitoringNotificationsTypeEnum';
import { XdslMonitoringNotificationsFrequencyEnum } from './XdslMonitoringNotificationsFrequencyEnum';

export type XdslMonitoringNotification = {
  allowIncident: boolean;
  downThreshold: number;
  email: string | null;
  enabled: boolean;
  frequency: XdslMonitoringNotificationsFrequencyEnum;
  id: number;
  phone: string | null;
  smsAccount: string | null;
  type: XdslMonitoringNotificationsTypeEnum;
};
