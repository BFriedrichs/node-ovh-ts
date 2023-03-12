/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseDirectAdminVersionEnum } from './LicenseDirectAdminVersionEnum';
import { LicenseDirectAdminOsEnum } from './LicenseDirectAdminOsEnum';

export type LicenseDirectadminDirectAdmin = {
  clientId?: number;
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  ip?: string;
  licenseId?: string;
  os?: LicenseDirectAdminOsEnum;
  status?: LicenseStateEnum;
  version?: LicenseDirectAdminVersionEnum;
};
