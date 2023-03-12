/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';

export type CloudLoadbalancingPoolUpdate = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum | null;
  name?: string | null;
  sessionPersistence?: CloudLoadbalancingPoolSessionPersistence | null;
};
