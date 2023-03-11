/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiCapabilitiesPresetCapabilities } from './CloudProjectAiCapabilitiesPresetCapabilities';
import { CloudProjectAiJobPartner } from './CloudProjectAiJobPartner';
import { CloudProjectAiCapabilitiesPresetTypeEnum } from './CloudProjectAiCapabilitiesPresetTypeEnum';
import { CloudProjectAiCapabilitiesPresetDocumentationUrl } from './CloudProjectAiCapabilitiesPresetDocumentationUrl';

export type CloudProjectAiCapabilitiesPreset = {
  capabilities: CloudProjectAiCapabilitiesPresetCapabilities;
  descriptions: string;
  docUrl: CloudProjectAiCapabilitiesPresetDocumentationUrl;
  id: string;
  logoUrl: string;
  name: string;
  partner: CloudProjectAiJobPartner;
  snippet: string;
  type: CloudProjectAiCapabilitiesPresetTypeEnum;
};
