/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeUserStateEnum } from './LicenseOfficeUserStateEnum';
import { LicenseOfficeLicenceEnum } from './LicenseOfficeLicenceEnum';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';

export type LicenseOfficeOfficeUser = {
  activationEmail?: string;
  deleteAtExpiration?: boolean;
  firstName?: string;
  isVirtual?: boolean;
  lastName?: string;
  licences?: LicenseOfficeLicenceEnum[];
  status?: LicenseOfficeUserStateEnum;
  taskPendingId?: number;
  usageLocation?: CoreTypesCountryEnum;
};
