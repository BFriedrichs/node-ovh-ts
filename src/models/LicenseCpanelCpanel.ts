/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseCpanelVersionEnum } from './LicenseCpanelVersionEnum';

export type LicenseCpanelCpanel = {
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  ip?: string;
  licenseId?: string;
  status?: LicenseStateEnum;
  version?: LicenseCpanelVersionEnum;
};
