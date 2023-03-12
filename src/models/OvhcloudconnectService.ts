/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectServiceBandwidthEnum } from './OvhcloudconnectServiceBandwidthEnum';
import { OvhcloudconnectServiceStatusEnum } from './OvhcloudconnectServiceStatusEnum';
import { OvhcloudconnectServiceProviderEnum } from './OvhcloudconnectServiceProviderEnum';
import { OvhcloudconnectServicePortEnum } from './OvhcloudconnectServicePortEnum';

export type OvhcloudconnectService = {
  bandwidth: OvhcloudconnectServiceBandwidthEnum;
  description: string;
  interfaceList: number[];
  pop: string;
  portQuantity: OvhcloudconnectServicePortEnum;
  product: string;
  provider: OvhcloudconnectServiceProviderEnum;
  status: OvhcloudconnectServiceStatusEnum;
  uuid: string;
  vrack: string | null;
};
