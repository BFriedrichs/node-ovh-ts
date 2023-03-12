/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslXdslModemConfigProtocolTypeEnum } from './XdslXdslModemConfigProtocolTypeEnum';

export type XdslPortMapping = {
  allowedRemoteIp?: string | null;
  description?: string | null;
  externalPortEnd?: number | null;
  externalPortStart?: number;
  id?: number;
  internalClient?: string;
  internalPort?: number;
  internalPortEnd?: number | null;
  name?: string;
  protocol?: XdslXdslModemConfigProtocolTypeEnum;
  taskId?: number | null;
};
