/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebCronLanguageAvailable } from './HostingWebCronLanguageAvailable';
import { HostingWebHighLightEnum } from './HostingWebHighLightEnum';
import { HostingWebCreationEmailCapabilities } from './HostingWebCreationEmailCapabilities';
import { HostingWebDiskType } from './HostingWebDiskType';
import { HostingWebDatabaseCreationDatabaseCapabilities } from './HostingWebDatabaseCreationDatabaseCapabilities';

export type HostingWebCapabilities = {
  attachedDomains?: number;
  crontab?: boolean;
  databaseEngines?: number;
  databases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  disk?: HostingWebDiskType | null;
  emails?: HostingWebCreationEmailCapabilities;
  envVars?: number;
  extraUsers?: number;
  filesBrowser?: boolean;
  highlight?: HostingWebHighLightEnum | null;
  languages?: HostingWebCronLanguageAvailable;
  moduleOneClick?: boolean;
  privateDatabases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  runtimes?: number;
  sitesRecommended?: number | null;
  ssh?: boolean;
  traffic?: number | null;
};
