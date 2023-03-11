/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseCreationDatabaseCapabilities } from './HostingWebDatabaseCreationDatabaseCapabilities';
import { HostingWebCronLanguageAvailable } from './HostingWebCronLanguageAvailable';
import { HostingWebDiskType } from './HostingWebDiskType';
import { HostingWebHighLightEnum } from './HostingWebHighLightEnum';
import { HostingWebCreationEmailCapabilities } from './HostingWebCreationEmailCapabilities';

export type HostingWebCapabilities = {
  attachedDomains: number;
  crontab: boolean;
  databaseEngines: number;
  databases: HostingWebDatabaseCreationDatabaseCapabilities;
  disk: HostingWebDiskType | null;
  emails: HostingWebCreationEmailCapabilities;
  envVars: number;
  extraUsers: number;
  filesBrowser: boolean;
  highlight: HostingWebHighLightEnum | null;
  languages: HostingWebCronLanguageAvailable;
  moduleOneClick: boolean;
  privateDatabases: HostingWebDatabaseCreationDatabaseCapabilities;
  runtimes: number;
  sitesRecommended: number | null;
  ssh: boolean;
  traffic: number | null;
};
