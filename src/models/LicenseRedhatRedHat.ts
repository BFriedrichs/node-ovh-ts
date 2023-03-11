/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseRedHatVersionEnum } from './LicenseRedHatVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

export type LicenseRedhatRedHat = {
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  ip: string;
  licenseId: string;
  status: LicenseStateEnum;
  version: LicenseRedHatVersionEnum;
};
