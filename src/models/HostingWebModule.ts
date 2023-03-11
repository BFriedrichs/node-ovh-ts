/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebModuleDependencyType } from './HostingWebModuleDependencyType';
import { HostingWebModuleStatusEnum } from './HostingWebModuleStatusEnum';
import { HostingWebModuleLanguageEnum } from './HostingWebModuleLanguageEnum';

export type HostingWebModule = {
  adminFolder: string;
  adminName: string;
  creationDate: Date;
  dependencies: HostingWebModuleDependencyType;
  id: number;
  language: HostingWebModuleLanguageEnum;
  lastUpdate: Date;
  moduleId: number;
  path: string;
  status: HostingWebModuleStatusEnum;
  targetUrl: string;
  taskId: number | null;
};
