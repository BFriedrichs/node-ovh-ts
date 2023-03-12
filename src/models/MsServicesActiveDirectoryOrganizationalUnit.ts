/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesServiceStateEnum } from './MsServicesServiceStateEnum';

export type MsServicesActiveDirectoryOrganizationalUnit = {
  complexityEnabled?: boolean;
  lockoutDuration?: number;
  lockoutObservationWindow?: number;
  lockoutThreshold?: number | null;
  maxPasswordAge?: number | null;
  minPasswordAge?: number | null;
  minPasswordLength?: number | null;
  name?: string;
  officeTenantServiceName?: string | null;
  state?: MsServicesServiceStateEnum;
  taskPendingId?: number;
};
