/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingHealthMonitorCreate } from './CloudLoadbalancingHealthMonitorCreate';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingLoadbalancerMemberCreate } from './CloudLoadbalancingLoadbalancerMemberCreate';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';

export type CloudLoadbalancingLoadbalancerPoolCreate = {
  algorithm: CloudLoadbalancingPoolAlgorithmEnum;
  default: boolean;
  healthMonitor?: CloudLoadbalancingHealthMonitorCreate | null;
  members?: CloudLoadbalancingLoadbalancerMemberCreate[];
  name?: string;
  protocol: CloudLoadbalancingPoolProtocolEnum;
  sessionPersistence?: CloudLoadbalancingPoolSessionPersistence;
};
