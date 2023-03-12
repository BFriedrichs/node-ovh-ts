/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkGatewayModelEnum } from './CloudNetworkGatewayModelEnum';
import { CloudNetworkGatewayInterface } from './CloudNetworkGatewayInterface';
import { CloudNetworkGatewayStatusEnum } from './CloudNetworkGatewayStatusEnum';
import { CloudNetworkGatewayExternalInformation } from './CloudNetworkGatewayExternalInformation';

export type CloudNetworkGateway = {
  externalInformation?: CloudNetworkGatewayExternalInformation | null;
  id?: string;
  interfaces?: CloudNetworkGatewayInterface[];
  model?: CloudNetworkGatewayModelEnum;
  name?: string;
  region?: string;
  status?: CloudNetworkGatewayStatusEnum;
};
