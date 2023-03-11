/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseConfigurationStatus } from './HostingPrivateDatabaseConfigurationStatus';
import { HostingPrivateDatabaseConfigurationDetail } from './HostingPrivateDatabaseConfigurationDetail';

export type HostingPrivateDatabaseConfiguration = {
  details: HostingPrivateDatabaseConfigurationDetail;
  lastUpdate: Date;
  status: HostingPrivateDatabaseConfigurationStatus;
  taskId: string | null;
};
