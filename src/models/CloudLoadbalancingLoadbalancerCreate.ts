/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadbalancerNetworkInformationCreate } from './CloudLoadbalancingLoadbalancerNetworkInformationCreate';
import { CloudLoadbalancingLoadbalancerListenerCreate } from './CloudLoadbalancingLoadbalancerListenerCreate';

export type CloudLoadbalancingLoadbalancerCreate = {
  flavorId?: string;
  listeners: CloudLoadbalancingLoadbalancerListenerCreate;
  name: string;
  networkInformation?: CloudLoadbalancingLoadbalancerNetworkInformationCreate;
};
