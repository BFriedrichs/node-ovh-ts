/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerBitFormatEnum } from './DedicatedServerBitFormatEnum';
import { DedicatedTemplateOsLanguageEnum } from './DedicatedTemplateOsLanguageEnum';
import { DedicatedTemplateOsInfoLicense } from './DedicatedTemplateOsInfoLicense';
import { DedicatedTemplateOsProperties } from './DedicatedTemplateOsProperties';
import { DedicatedTemplateOsUsageEnum } from './DedicatedTemplateOsUsageEnum';
import { DedicatedTemplateOsTypeEnum } from './DedicatedTemplateOsTypeEnum';
import { DedicatedTemplateOsInput } from './DedicatedTemplateOsInput';
import { DedicatedTemplateOsInfoProject } from './DedicatedTemplateOsInfoProject';
import { DedicatedTemplateOsFileSystemEnum } from './DedicatedTemplateOsFileSystemEnum';
import { DedicatedTemplateOsSubfamilyEnum } from './DedicatedTemplateOsSubfamilyEnum';

export type DedicatedInstallationTemplateTemplates = {
  availableLanguages?: DedicatedTemplateOsLanguageEnum[];
  bitFormat?: DedicatedServerBitFormatEnum;
  category?: DedicatedTemplateOsUsageEnum;
  customization?: DedicatedTemplateOsProperties | null;
  defaultLanguage?: DedicatedTemplateOsLanguageEnum;
  description?: string;
  distribution?: string;
  endOfInstall?: Date;
  family?: DedicatedTemplateOsTypeEnum;
  filesystems?: DedicatedTemplateOsFileSystemEnum[];
  hardRaidConfiguration?: boolean | null;
  inputs?: DedicatedTemplateOsInput[] | null;
  license?: DedicatedTemplateOsInfoLicense | null;
  lvmReady?: boolean | null;
  noPartitioning?: boolean;
  project?: DedicatedTemplateOsInfoProject | null;
  softRaidOnlyMirroring?: boolean;
  subfamily?: DedicatedTemplateOsSubfamilyEnum;
  supportsDistributionKernel?: boolean | null;
  supportsGptLabel?: boolean | null;
  supportsRTM?: boolean;
  supportsSqlServer?: boolean | null;
  templateName?: string;
};
