/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTemplateOsLanguageEnum } from './DedicatedTemplateOsLanguageEnum';
import { DedicatedTemplateOsInfoLicense } from './DedicatedTemplateOsInfoLicense';
import { DedicatedTemplateOsInfoProject } from './DedicatedTemplateOsInfoProject';
import { DedicatedTemplateOsSubfamilyEnum } from './DedicatedTemplateOsSubfamilyEnum';
import { DedicatedTemplateOsUsageEnum } from './DedicatedTemplateOsUsageEnum';
import { DedicatedTemplateOsInput } from './DedicatedTemplateOsInput';
import { DedicatedTemplateOsFileSystemEnum } from './DedicatedTemplateOsFileSystemEnum';
import { DedicatedTemplateOsProperties } from './DedicatedTemplateOsProperties';
import { DedicatedTemplateOsTypeEnum } from './DedicatedTemplateOsTypeEnum';
import { DedicatedServerBitFormatEnum } from './DedicatedServerBitFormatEnum';

export type DedicatedInstallationTemplateTemplates = {
  availableLanguages: DedicatedTemplateOsLanguageEnum;
  bitFormat: DedicatedServerBitFormatEnum;
  category: DedicatedTemplateOsUsageEnum;
  customization: DedicatedTemplateOsProperties | null;
  defaultLanguage: DedicatedTemplateOsLanguageEnum;
  description: string;
  distribution: string;
  endOfInstall: Date;
  family: DedicatedTemplateOsTypeEnum;
  filesystems: DedicatedTemplateOsFileSystemEnum;
  hardRaidConfiguration: boolean | null;
  inputs: DedicatedTemplateOsInput | null;
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
