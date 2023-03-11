/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseWhitelistStatus } from './HostingPrivateDatabaseWhitelistStatus';

export type HostingPrivateDatabaseWhitelist = {
  creationDate: Date;
  ip: string;
  lastUpdate: Date;
  name: string | null;
  service: boolean;
  sftp: boolean;
  status: HostingPrivateDatabaseWhitelistStatus;
  taskId: string | null;
};
