/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebRuntimeEnvEnum } from './HostingWebRuntimeEnvEnum';
import { HostingWebRuntimeStateEnum } from './HostingWebRuntimeStateEnum';
import { HostingWebRuntimeTypeEnum } from './HostingWebRuntimeTypeEnum';

export type HostingWebRuntime = {
  appBootstrap: string | null;
  appEnv: HostingWebRuntimeEnvEnum;
  creationDate: Date;
  id: number;
  isDefault: boolean;
  isDeletable: boolean;
  lastUpdate: Date;
  name: string | null;
  publicDir: string | null;
  status: HostingWebRuntimeStateEnum;
  taskId: number | null;
  type: HostingWebRuntimeTypeEnum;
};
