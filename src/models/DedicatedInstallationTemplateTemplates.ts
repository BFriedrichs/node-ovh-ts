/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTemplateOsInfoLicense } from './DedicatedTemplateOsInfoLicense';
import { DedicatedTemplateOsUsageEnum } from './DedicatedTemplateOsUsageEnum';
import { DedicatedTemplateOsSubfamilyEnum } from './DedicatedTemplateOsSubfamilyEnum';
import { DedicatedTemplateOsInput } from './DedicatedTemplateOsInput';
import { DedicatedTemplateOsLanguageEnum } from './DedicatedTemplateOsLanguageEnum';
import { DedicatedTemplateOsInfoProject } from './DedicatedTemplateOsInfoProject';
import { DedicatedTemplateOsProperties } from './DedicatedTemplateOsProperties';
import { DedicatedTemplateOsFileSystemEnum } from './DedicatedTemplateOsFileSystemEnum';
import { DedicatedServerBitFormatEnum } from './DedicatedServerBitFormatEnum';
import { DedicatedTemplateOsTypeEnum } from './DedicatedTemplateOsTypeEnum';

export type DedicatedInstallationTemplateTemplates = {
  availableLanguages: DedicatedTemplateOsLanguageEnum[];
  bitFormat: DedicatedServerBitFormatEnum;
  category: DedicatedTemplateOsUsageEnum;
  customization: DedicatedTemplateOsProperties | null;
  defaultLanguage: DedicatedTemplateOsLanguageEnum;
  description: string;
  distribution: string;
  endOfInstall: Date;
  family: DedicatedTemplateOsTypeEnum;
  filesystems: DedicatedTemplateOsFileSystemEnum[];
  hardRaidConfiguration: boolean | null;
  inputs: DedicatedTemplateOsInput[] | null;
  license: DedicatedTemplateOsInfoLicense | null;
  lvmReady: boolean | null;
  noPartitioning: boolean;
  project: DedicatedTemplateOsInfoProject | null;
  softRaidOnlyMirroring: boolean;
  subfamily: DedicatedTemplateOsSubfamilyEnum;
  supportsDistributionKernel: boolean | null;
  supportsGptLabel: boolean | null;
  supportsRTM: boolean;
  supportsSqlServer: boolean | null;
  templateName: string;
};
