/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeUserStateEnum } from './LicenseOfficeUserStateEnum';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { LicenseOfficeLicenceEnum } from './LicenseOfficeLicenceEnum';

export type LicenseOfficePrepaidOfficeUser = {
  activationEmail: string;
  firstName: string;
  isVirtual: boolean;
  lastName: string;
  licences: LicenseOfficeLicenceEnum[];
  serviceName: string;
  status: LicenseOfficeUserStateEnum;
  taskPendingId: number;
  tenantServiceName: string;
  usageLocation: CoreTypesCountryEnum;
};
