/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebEnvVarTypeEnum } from './HostingWebEnvVarTypeEnum';
import { HostingWebEnvVarStatusEnum } from './HostingWebEnvVarStatusEnum';

export type HostingWebEnvVar = {
  key: string;
  status: HostingWebEnvVarStatusEnum;
  taskId: number | null;
  type: HostingWebEnvVarTypeEnum;
  value: string;
};
