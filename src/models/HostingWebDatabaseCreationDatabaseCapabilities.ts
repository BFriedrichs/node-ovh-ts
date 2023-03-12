/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDatabaseTypeEnum } from './HostingWebDatabaseDatabaseTypeEnum';
import { HostingWebDatabaseDatabaseCapabilitiesTypeEnum } from './HostingWebDatabaseDatabaseCapabilitiesTypeEnum';
import { HostingWebDatabaseDatabaseIsolationEnum } from './HostingWebDatabaseDatabaseIsolationEnum';

export type HostingWebDatabaseCreationDatabaseCapabilities = {
  available: number;
  engines: HostingWebDatabaseDatabaseTypeEnum[];
  isolation: HostingWebDatabaseDatabaseIsolationEnum;
  quota: number;
  type: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
};
