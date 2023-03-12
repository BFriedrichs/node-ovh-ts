/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebModuleLanguageEnum } from './HostingWebModuleLanguageEnum';
import { HostingWebModuleStatusEnum } from './HostingWebModuleStatusEnum';
import { HostingWebModuleDependencyType } from './HostingWebModuleDependencyType';

export type HostingWebModule = {
  adminFolder?: string;
  adminName?: string;
  creationDate?: Date;
  dependencies?: HostingWebModuleDependencyType[];
  id?: number;
  language?: HostingWebModuleLanguageEnum;
  lastUpdate?: Date;
  moduleId?: number;
  path?: string;
  status?: HostingWebModuleStatusEnum;
  targetUrl?: string;
  taskId?: number | null;
};
