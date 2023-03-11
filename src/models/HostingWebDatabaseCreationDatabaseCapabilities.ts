/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDatabaseIsolationEnum } from './HostingWebDatabaseDatabaseIsolationEnum';
import { HostingWebDatabaseDatabaseCapabilitiesTypeEnum } from './HostingWebDatabaseDatabaseCapabilitiesTypeEnum';
import { HostingWebDatabaseDatabaseTypeEnum } from './HostingWebDatabaseDatabaseTypeEnum';

export type HostingWebDatabaseCreationDatabaseCapabilities = {
  available: number;
  engines: HostingWebDatabaseDatabaseTypeEnum;
  isolation: HostingWebDatabaseDatabaseIsolationEnum;
  quota: number;
  type: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
};
