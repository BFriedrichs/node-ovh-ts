/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseWorkLightVersionEnum } from './LicenseWorkLightVersionEnum';

export type LicenseWorklightWorkLight = {
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  ip?: string;
  licenseId?: string;
  status?: LicenseStateEnum;
  version?: LicenseWorkLightVersionEnum;
};
