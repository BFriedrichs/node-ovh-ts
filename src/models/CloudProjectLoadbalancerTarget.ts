/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerTargetBalancerAlgorithmEnum } from './CloudProjectLoadbalancerTargetBalancerAlgorithmEnum';
import { CloudProjectLoadbalancerTargetProxyProtocolEnum } from './CloudProjectLoadbalancerTargetProxyProtocolEnum';
import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';

export type CloudProjectLoadbalancerTarget = {
  balancer?: CloudProjectLoadbalancerTargetBalancerAlgorithmEnum | null;
  name: string;
  proxyProtocol?: CloudProjectLoadbalancerTargetProxyProtocolEnum | null;
  servers: CloudProjectLoadbalancerServer[];
  sticky?: boolean | null;
};
