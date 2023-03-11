/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebConfigurationEnvEnum } from './HostingWebConfigurationEnvEnum';
import { HostingWebConfigurationStateEnum } from './HostingWebConfigurationStateEnum';
import { HostingWebConfigurationLanguageEnum } from './HostingWebConfigurationLanguageEnum';

export type HostingWebConfiguration = {
  appEnv: HostingWebConfigurationEnvEnum;
  entryPoint: string | null;
  id: number;
  language: HostingWebConfigurationLanguageEnum;
  publicDir: string | null;
  status: HostingWebConfigurationStateEnum;
  version: string;
};
