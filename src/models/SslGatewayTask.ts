/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewayTaskActionEnum } from './SslGatewayTaskActionEnum';
import { SslGatewayTaskStatusEnum } from './SslGatewayTaskStatusEnum';

export type SslGatewayTask = {
  action: SslGatewayTaskActionEnum;
  creationDate: Date;
  id: number;
  progress: number;
  status: SslGatewayTaskStatusEnum;
};
