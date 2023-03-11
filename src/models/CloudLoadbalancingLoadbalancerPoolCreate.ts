/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadbalancerMemberCreate } from './CloudLoadbalancingLoadbalancerMemberCreate';
import { CloudLoadbalancingHealthMonitorCreate } from './CloudLoadbalancingHealthMonitorCreate';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';

export type CloudLoadbalancingLoadbalancerPoolCreate = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum;
  default?: boolean;
  healthMonitor: CloudLoadbalancingHealthMonitorCreate | null;
  members: CloudLoadbalancingLoadbalancerMemberCreate;
  name: string;
  protocol?: CloudLoadbalancingPoolProtocolEnum;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence;
};
