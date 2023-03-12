/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectFloatingIpStatusEnum } from './CloudProjectFloatingIpStatusEnum';
import { CloudProjectFloatingIpAssociatedEntity } from './CloudProjectFloatingIpAssociatedEntity';

export type CloudProjectFloatingIp = {
  associatedEntity: CloudProjectFloatingIpAssociatedEntity | null;
  id: string;
  ip: string;
  networkId: string;
  region: string | null;
  status: CloudProjectFloatingIpStatusEnum;
};
