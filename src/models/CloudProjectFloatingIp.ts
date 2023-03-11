/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectFloatingIpAssociatedEntity } from './CloudProjectFloatingIpAssociatedEntity';
import { CloudProjectFloatingIpStatusEnum } from './CloudProjectFloatingIpStatusEnum';

export type CloudProjectFloatingIp = {
  associatedEntity: CloudProjectFloatingIpAssociatedEntity | null;
  id: string;
  ip: string;
  networkId: string;
  region: string | null;
  status: CloudProjectFloatingIpStatusEnum;
};
