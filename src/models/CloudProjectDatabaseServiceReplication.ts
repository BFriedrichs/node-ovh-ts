/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceReplicationPolicyClassEnum } from './CloudProjectDatabaseServiceReplicationPolicyClassEnum';

export type CloudProjectDatabaseServiceReplication = {
  emitHeartbeats?: boolean;
  enabled: boolean;
  id?: string;
  replicationPolicyClass?: CloudProjectDatabaseServiceReplicationPolicyClassEnum;
  sourceIntegration?: string;
  syncGroupOffsets?: boolean;
  syncInterval?: number;
  targetIntegration?: string;
  topicExcludeList?: string[];
  topics?: string[];
};
