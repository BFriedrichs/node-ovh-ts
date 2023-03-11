/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesSyncLicenseEnum } from './MsServicesSyncLicenseEnum';
import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';

export type MsServicesSyncInformation = {
  configured: boolean;
  license: MsServicesSyncLicenseEnum;
  state: MsServicesObjectStateEnum;
  taskPendingId: number;
};
