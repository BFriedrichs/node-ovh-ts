/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobPartner } from './CloudProjectAiJobPartner';
import { CloudProjectAiCapabilitiesPresetCapabilities } from './CloudProjectAiCapabilitiesPresetCapabilities';
import { CloudProjectAiCapabilitiesPresetDocumentationUrl } from './CloudProjectAiCapabilitiesPresetDocumentationUrl';
import { CloudProjectAiCapabilitiesPresetTypeEnum } from './CloudProjectAiCapabilitiesPresetTypeEnum';

export type CloudProjectAiCapabilitiesPreset = {
  capabilities: CloudProjectAiCapabilitiesPresetCapabilities;
  descriptions: string[];
  docUrl: CloudProjectAiCapabilitiesPresetDocumentationUrl[];
  id: string;
  logoUrl: string;
  name: string;
  partner: CloudProjectAiJobPartner;
  snippet: string;
  type: CloudProjectAiCapabilitiesPresetTypeEnum;
};
