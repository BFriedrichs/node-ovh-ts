/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';

export type CloudLoadbalancingPoolUpdate = {
  algorithm: CloudLoadbalancingPoolAlgorithmEnum | null;
  name: string | null;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence | null;
};
