/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseWorkLightVersionEnum } from './LicenseWorkLightVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

export type LicenseWorklightWorkLight = {
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  ip: string;
  licenseId: string;
  status: LicenseStateEnum;
  version: LicenseWorkLightVersionEnum;
};
