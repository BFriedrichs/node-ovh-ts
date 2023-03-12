/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeServiceTypeEnum } from './LicenseOfficeServiceTypeEnum';
import { LicenseOfficeServiceStateEnum } from './LicenseOfficeServiceStateEnum';

export type LicenseOfficeOfficeTenant = {
  address: string;
  city: string;
  creationDate: Date;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  serviceName: string;
  serviceType: LicenseOfficeServiceTypeEnum;
  status: LicenseOfficeServiceStateEnum;
  zipCode: string;
};
