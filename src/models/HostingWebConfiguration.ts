/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebConfigurationStateEnum } from './HostingWebConfigurationStateEnum';
import { HostingWebConfigurationLanguageEnum } from './HostingWebConfigurationLanguageEnum';
import { HostingWebConfigurationEnvEnum } from './HostingWebConfigurationEnvEnum';

export type HostingWebConfiguration = {
  appEnv?: HostingWebConfigurationEnvEnum;
  entryPoint?: string | null;
  id?: number;
  language?: HostingWebConfigurationLanguageEnum;
  publicDir?: string | null;
  status?: HostingWebConfigurationStateEnum;
  version?: string;
};
