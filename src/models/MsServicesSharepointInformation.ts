/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';
import { MsServicesSharepointAccountAccessRightsEnum } from './MsServicesSharepointAccountAccessRightsEnum';
import { MsServicesSharepointLicenseEnum } from './MsServicesSharepointLicenseEnum';

export type MsServicesSharepointInformation = {
  accessRights?: MsServicesSharepointAccountAccessRightsEnum;
  activeDirectoryAccountId?: number;
  configured?: boolean;
  currentUsage?: number | null;
  deleteAtExpiration?: boolean | null;
  id?: number;
  license?: MsServicesSharepointLicenseEnum;
  officeLicense?: boolean;
  quota?: number;
  state?: MsServicesObjectStateEnum;
  taskPendingId?: number;
};
