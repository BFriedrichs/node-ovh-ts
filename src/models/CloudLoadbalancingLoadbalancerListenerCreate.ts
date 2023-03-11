/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadbalancerPoolCreate } from './CloudLoadbalancingLoadbalancerPoolCreate';
import { CloudLoadbalancingListenerProtocolEnum } from './CloudLoadbalancingListenerProtocolEnum';

export type CloudLoadbalancingLoadbalancerListenerCreate = {
  name: string;
  pools: CloudLoadbalancingLoadbalancerPoolCreate;
  port?: number;
  protocol?: CloudLoadbalancingListenerProtocolEnum;
  secretId: string;
};
