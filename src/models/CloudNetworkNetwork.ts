/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkNetworkRegion } from './CloudNetworkNetworkRegion';
import { CloudNetworkNetworkStatusEnum } from './CloudNetworkNetworkStatusEnum';
import { CloudNetworkNetworkTypeEnum } from './CloudNetworkNetworkTypeEnum';

export type CloudNetworkNetwork = {
  id: string;
  name: string;
  regions: CloudNetworkNetworkRegion;
  status: CloudNetworkNetworkStatusEnum;
  type: CloudNetworkNetworkTypeEnum | null;
  vlanId: number;
};
