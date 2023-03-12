/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingListenerProtocolEnum } from './CloudLoadbalancingListenerProtocolEnum';
import { CloudLoadbalancingLoadbalancerPoolCreate } from './CloudLoadbalancingLoadbalancerPoolCreate';

export type CloudLoadbalancingLoadbalancerListenerCreate = {
  name?: string;
  pools?: CloudLoadbalancingLoadbalancerPoolCreate[];
  port: number;
  protocol: CloudLoadbalancingListenerProtocolEnum;
  secretId?: string;
};
