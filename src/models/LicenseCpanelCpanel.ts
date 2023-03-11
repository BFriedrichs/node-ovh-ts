/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseCpanelVersionEnum } from './LicenseCpanelVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

export type LicenseCpanelCpanel = {
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  ip: string;
  licenseId: string;
  status: LicenseStateEnum;
  version: LicenseCpanelVersionEnum;
};
