/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerBackendBalancerAlgorithmEnum } from './CloudProjectLoadbalancerBackendBalancerAlgorithmEnum';
import { CloudProjectLoadbalancerServer } from './CloudProjectLoadbalancerServer';
import { CloudProjectLoadbalancerBackendProxyProtocolEnum } from './CloudProjectLoadbalancerBackendProxyProtocolEnum';

export type CloudProjectLoadbalancerBackend = {
  balancer: CloudProjectLoadbalancerBackendBalancerAlgorithmEnum | null;
  name?: string;
  proxyProtocol: CloudProjectLoadbalancerBackendProxyProtocolEnum | null;
  servers?: CloudProjectLoadbalancerServer;
  sticky: boolean | null;
};
