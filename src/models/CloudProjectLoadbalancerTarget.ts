/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';
import { CloudProjectLoadbalancerTargetBalancerAlgorithmEnum } from './CloudProjectLoadbalancerTargetBalancerAlgorithmEnum';
import { CloudProjectLoadbalancerTargetProxyProtocolEnum } from './CloudProjectLoadbalancerTargetProxyProtocolEnum';

export type CloudProjectLoadbalancerTarget = {
  balancer: CloudProjectLoadbalancerTargetBalancerAlgorithmEnum | null;
  name?: string;
  proxyProtocol: CloudProjectLoadbalancerTargetProxyProtocolEnum | null;
  servers?: CloudProjectLoadbalancerServer[];
  sticky: boolean | null;
};
