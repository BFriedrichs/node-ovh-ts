/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingHealthMonitorCreate } from './CloudLoadbalancingHealthMonitorCreate';
import { CloudLoadbalancingLoadbalancerMemberCreate } from './CloudLoadbalancingLoadbalancerMemberCreate';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';

export type CloudLoadbalancingLoadbalancerPoolCreate = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum;
  default?: boolean;
  healthMonitor: CloudLoadbalancingHealthMonitorCreate | null;
  members: CloudLoadbalancingLoadbalancerMemberCreate[];
  name: string;
  protocol?: CloudLoadbalancingPoolProtocolEnum;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence;
};
