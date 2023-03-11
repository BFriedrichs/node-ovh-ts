/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkGatewayInterface } from './CloudNetworkGatewayInterface';
import { CloudNetworkGatewayModelEnum } from './CloudNetworkGatewayModelEnum';
import { CloudNetworkGatewayExternalInformation } from './CloudNetworkGatewayExternalInformation';
import { CloudNetworkGatewayStatusEnum } from './CloudNetworkGatewayStatusEnum';

export type CloudNetworkGateway = {
  externalInformation: CloudNetworkGatewayExternalInformation | null;
  id: string;
  interfaces: CloudNetworkGatewayInterface;
  model: CloudNetworkGatewayModelEnum;
  name: string;
  region: string;
  status: CloudNetworkGatewayStatusEnum;
};
