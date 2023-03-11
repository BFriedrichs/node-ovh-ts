/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';

export type CloudLoadbalancingPoolCreate = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum;
  listenerId: string;
  loadbalancerId: string;
  name: string;
  protocol?: CloudLoadbalancingPoolProtocolEnum;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence | null;
};
