/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebModuleBranchEnum } from './HostingWebModuleBranchEnum';
import { HostingWebModuleAdminNameTypeEnum } from './HostingWebModuleAdminNameTypeEnum';
import { HostingWebModuleLanguageEnum } from './HostingWebModuleLanguageEnum';

export type HostingWebModuleList = {
  active: boolean;
  adminNameType: HostingWebModuleAdminNameTypeEnum;
  author: string;
  branch: HostingWebModuleBranchEnum;
  id: number;
  keywords: string;
  language: HostingWebModuleLanguageEnum;
  languageRequirement: string;
  latest: boolean;
  name: string;
  size: number;
  upgradeFrom: number;
  version: string;
};
