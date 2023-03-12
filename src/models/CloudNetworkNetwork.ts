/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkNetworkStatusEnum } from './CloudNetworkNetworkStatusEnum';
import { CloudNetworkNetworkTypeEnum } from './CloudNetworkNetworkTypeEnum';
import { CloudNetworkNetworkRegion } from './CloudNetworkNetworkRegion';

export type CloudNetworkNetwork = {
  id: string;
  name: string;
  regions: CloudNetworkNetworkRegion[];
  status: CloudNetworkNetworkStatusEnum;
  type: CloudNetworkNetworkTypeEnum | null;
  vlanId: number;
};
