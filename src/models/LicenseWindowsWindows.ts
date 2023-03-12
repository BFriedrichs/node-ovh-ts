/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseWindowsOsVersionEnum } from './LicenseWindowsOsVersionEnum';

export type LicenseWindowsWindows = {
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  ip?: string;
  licenseId?: string;
  status?: LicenseStateEnum;
  version?: LicenseWindowsOsVersionEnum;
};
