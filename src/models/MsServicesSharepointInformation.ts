/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesSharepointLicenseEnum } from './MsServicesSharepointLicenseEnum';
import { MsServicesSharepointAccountAccessRightsEnum } from './MsServicesSharepointAccountAccessRightsEnum';
import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';

export type MsServicesSharepointInformation = {
  accessRights: MsServicesSharepointAccountAccessRightsEnum;
  activeDirectoryAccountId: number;
  configured: boolean;
  currentUsage: number | null;
  deleteAtExpiration: boolean | null;
  id: number;
  license: MsServicesSharepointLicenseEnum;
  officeLicense: boolean;
  quota: number;
  state: MsServicesObjectStateEnum;
  taskPendingId: number;
};
