/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTemplateOsInfoLicense } from './DedicatedTemplateOsInfoLicense';
import { DedicatedTemplateOsInfoProject } from './DedicatedTemplateOsInfoProject';
import { DedicatedTemplateOsSubfamilyEnum } from './DedicatedTemplateOsSubfamilyEnum';
import { DedicatedTemplateOsUsageEnum } from './DedicatedTemplateOsUsageEnum';
import { DedicatedTemplateOsTypeEnum } from './DedicatedTemplateOsTypeEnum';

export type DedicatedTemplateOsInfo = {
  category: DedicatedTemplateOsUsageEnum;
  description: string;
  endOfInstall: Date | null;
  family: DedicatedTemplateOsTypeEnum;
  license: DedicatedTemplateOsInfoLicense | null;
  project: DedicatedTemplateOsInfoProject | null;
  subfamily: DedicatedTemplateOsSubfamilyEnum;
  templateName: string;
};
