/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseRedHatVersionEnum } from './LicenseRedHatVersionEnum';

export type LicenseRedhatRedHat = {
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  ip?: string;
  licenseId?: string;
  status?: LicenseStateEnum;
  version?: LicenseRedHatVersionEnum;
};
