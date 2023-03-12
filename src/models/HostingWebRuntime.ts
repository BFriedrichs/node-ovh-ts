/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebRuntimeTypeEnum } from './HostingWebRuntimeTypeEnum';
import { HostingWebRuntimeEnvEnum } from './HostingWebRuntimeEnvEnum';
import { HostingWebRuntimeStateEnum } from './HostingWebRuntimeStateEnum';

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
