/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeUserStateEnum } from './LicenseOfficeUserStateEnum';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { LicenseOfficeLicenceEnum } from './LicenseOfficeLicenceEnum';

export type LicenseOfficeOfficeUser = {
  activationEmail: string;
  deleteAtExpiration: boolean;
  firstName: string;
  isVirtual: boolean;
  lastName: string;
  licences: LicenseOfficeLicenceEnum[];
  status: LicenseOfficeUserStateEnum;
  taskPendingId: number;
  usageLocation: CoreTypesCountryEnum;
};
