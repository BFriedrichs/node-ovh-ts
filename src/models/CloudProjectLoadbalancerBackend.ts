/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';
import { CloudProjectLoadbalancerBackendProxyProtocolEnum } from './CloudProjectLoadbalancerBackendProxyProtocolEnum';
import { CloudProjectLoadbalancerBackendBalancerAlgorithmEnum } from './CloudProjectLoadbalancerBackendBalancerAlgorithmEnum';

export type CloudProjectLoadbalancerBackend = {
  balancer?: CloudProjectLoadbalancerBackendBalancerAlgorithmEnum | null;
  name: string;
  proxyProtocol?: CloudProjectLoadbalancerBackendProxyProtocolEnum | null;
  servers: CloudProjectLoadbalancerServer[];
  sticky?: boolean | null;
};
