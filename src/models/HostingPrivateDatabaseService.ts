/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseAvailableVersionEnum } from './HostingPrivateDatabaseAvailableVersionEnum';
import { HostingPrivateDatabaseTypeEnum } from './HostingPrivateDatabaseTypeEnum';
import { HostingPrivateDatabaseGraphEndpoint } from './HostingPrivateDatabaseGraphEndpoint';
import { HostingPrivateDatabaseCapability } from './HostingPrivateDatabaseCapability';
import { HostingPrivateDatabaseDatacenterEnum } from './HostingPrivateDatabaseDatacenterEnum';
import { HostingPrivateDatabaseStateEnum } from './HostingPrivateDatabaseStateEnum';
import { HostingPrivateDatabaseOfferEnum } from './HostingPrivateDatabaseOfferEnum';

export type HostingPrivateDatabaseService = {
  capabilities: HostingPrivateDatabaseCapability[];
  cpu: number;
  datacenter: HostingPrivateDatabaseDatacenterEnum;
  displayName: string | null;
  graphEndpoint: HostingPrivateDatabaseGraphEndpoint | null;
  guiURL: string | null;
  hostname: string | null;
  hostnameFtp: string | null;
  infrastructure: string;
  ip: string | null;
  lastCheck: Date;
  offer: HostingPrivateDatabaseOfferEnum;
  port: number;
  portFtp: number | null;
  quotaSize: number;
  quotaUsed: number;
  ram: number;
  server: string | null;
  serviceName: string;
  state: HostingPrivateDatabaseStateEnum;
  tlsCa: string | null;
  type: HostingPrivateDatabaseTypeEnum;
  version: HostingPrivateDatabaseAvailableVersionEnum;
  versionLabel: string;
  versionNumber: number;
};
