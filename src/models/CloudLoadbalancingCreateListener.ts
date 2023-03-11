/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingListenerProtocolEnum } from './CloudLoadbalancingListenerProtocolEnum';

export type CloudLoadbalancingCreateListener = {
  certificateId: string;
  defaultPoolId: string;
  loadbalancerId?: string;
  name?: string;
  port?: number;
  protocol?: CloudLoadbalancingListenerProtocolEnum;
};
