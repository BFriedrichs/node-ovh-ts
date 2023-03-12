/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';
import { MsServicesSyncLicenseEnum } from './MsServicesSyncLicenseEnum';

export type MsServicesSyncInformation = {
  configured?: boolean;
  license?: MsServicesSyncLicenseEnum;
  state?: MsServicesObjectStateEnum;
  taskPendingId?: number;
};
