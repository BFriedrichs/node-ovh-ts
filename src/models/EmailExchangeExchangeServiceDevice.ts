/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeDeviceActiveSyncStateEnum } from './EmailExchangeDeviceActiveSyncStateEnum';

export type EmailExchangeExchangeServiceDevice = {
  IMEI?: string;
  creationDate?: Date;
  deviceId?: string;
  deviceModel?: string;
  deviceState?: EmailExchangeDeviceActiveSyncStateEnum;
  guid?: string;
  identity?: string;
  lastUpdate?: Date | null;
  taskPendingId?: number;
};
