/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerTargetProxyProtocolEnum } from './CloudProjectLoadbalancerTargetProxyProtocolEnum';
import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';
import { CloudProjectLoadbalancerTargetBalancerAlgorithmEnum } from './CloudProjectLoadbalancerTargetBalancerAlgorithmEnum';

export type CloudProjectLoadbalancerTarget = {
  balancer: CloudProjectLoadbalancerTargetBalancerAlgorithmEnum | null;
  name?: string;
  proxyProtocol: CloudProjectLoadbalancerTargetProxyProtocolEnum | null;
  servers?: CloudProjectLoadbalancerServer;
  sticky: boolean | null;
};
