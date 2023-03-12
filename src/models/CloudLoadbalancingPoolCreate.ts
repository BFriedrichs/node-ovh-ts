/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';

export type CloudLoadbalancingPoolCreate = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum;
  listenerId: string;
  loadbalancerId: string;
  name: string;
  protocol?: CloudLoadbalancingPoolProtocolEnum;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence | null;
};
