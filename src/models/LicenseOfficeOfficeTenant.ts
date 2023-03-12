/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeServiceStateEnum } from './LicenseOfficeServiceStateEnum';
import { LicenseOfficeServiceTypeEnum } from './LicenseOfficeServiceTypeEnum';

export type LicenseOfficeOfficeTenant = {
  address?: string;
  city?: string;
  creationDate?: Date;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  serviceName?: string;
  serviceType?: LicenseOfficeServiceTypeEnum;
  status?: LicenseOfficeServiceStateEnum;
  zipCode?: string;
};
