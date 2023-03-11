/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewayTaskStatusEnum } from './SslGatewayTaskStatusEnum';
import { SslGatewayTaskActionEnum } from './SslGatewayTaskActionEnum';

export type SslGatewayTask = {
  action: SslGatewayTaskActionEnum;
  creationDate: Date;
  id: number;
  progress: number;
  status: SslGatewayTaskStatusEnum;
};
