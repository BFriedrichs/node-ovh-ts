/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTemplateOsInfoLicense } from './DedicatedTemplateOsInfoLicense';
import { DedicatedTemplateOsUsageEnum } from './DedicatedTemplateOsUsageEnum';
import { DedicatedTemplateOsSubfamilyEnum } from './DedicatedTemplateOsSubfamilyEnum';
import { DedicatedTemplateOsInfoProject } from './DedicatedTemplateOsInfoProject';
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
