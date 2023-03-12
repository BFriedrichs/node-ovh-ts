/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslXdslModemConfigProtocolTypeEnum } from './XdslXdslModemConfigProtocolTypeEnum';

export type XdslTemplateModemPortMapping = {
  allowedRemoteIp?: string | null;
  description?: string | null;
  externalPortEnd?: number | null;
  externalPortStart?: number;
  internalClient?: string;
  internalPort?: number;
  name?: string;
  protocol?: XdslXdslModemConfigProtocolTypeEnum;
};
