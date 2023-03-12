/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDatabaseCapabilitiesTypeEnum } from './HostingWebDatabaseDatabaseCapabilitiesTypeEnum';
import { HostingWebDatabaseDatabaseTypeEnum } from './HostingWebDatabaseDatabaseTypeEnum';
import { HostingWebDatabaseDatabaseIsolationEnum } from './HostingWebDatabaseDatabaseIsolationEnum';

export type HostingWebDatabaseCreationDatabaseCapabilities = {
  available?: number;
  engines?: HostingWebDatabaseDatabaseTypeEnum[];
  isolation?: HostingWebDatabaseDatabaseIsolationEnum;
  quota?: number;
  type?: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
};
