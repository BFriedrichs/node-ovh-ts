/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseDirectAdminOsEnum } from './LicenseDirectAdminOsEnum';
import { LicenseDirectAdminVersionEnum } from './LicenseDirectAdminVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

export type LicenseDirectadminDirectAdmin = {
  clientId: number;
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  ip: string;
  licenseId: string;
  os: LicenseDirectAdminOsEnum;
  status: LicenseStateEnum;
  version: LicenseDirectAdminVersionEnum;
};
