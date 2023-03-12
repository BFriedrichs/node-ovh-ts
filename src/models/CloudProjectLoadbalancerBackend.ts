/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerBackendProxyProtocolEnum } from './CloudProjectLoadbalancerBackendProxyProtocolEnum';
import { CloudProjectLoadbalancerBackendBalancerAlgorithmEnum } from './CloudProjectLoadbalancerBackendBalancerAlgorithmEnum';
import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';

export type CloudProjectLoadbalancerBackend = {
  balancer: CloudProjectLoadbalancerBackendBalancerAlgorithmEnum | null;
  name?: string;
  proxyProtocol: CloudProjectLoadbalancerBackendProxyProtocolEnum | null;
  servers?: CloudProjectLoadbalancerServer[];
  sticky: boolean | null;
};
