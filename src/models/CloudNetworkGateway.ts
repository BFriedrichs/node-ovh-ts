/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkGatewayStatusEnum } from './CloudNetworkGatewayStatusEnum';
import { CloudNetworkGatewayExternalInformation } from './CloudNetworkGatewayExternalInformation';
import { CloudNetworkGatewayInterface } from './CloudNetworkGatewayInterface';
import { CloudNetworkGatewayModelEnum } from './CloudNetworkGatewayModelEnum';

export type CloudNetworkGateway = {
  externalInformation: CloudNetworkGatewayExternalInformation | null;
  id: string;
  interfaces: CloudNetworkGatewayInterface[];
  model: CloudNetworkGatewayModelEnum;
  name: string;
  region: string;
  status: CloudNetworkGatewayStatusEnum;
};
