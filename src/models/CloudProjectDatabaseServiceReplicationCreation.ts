/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceReplicationPolicyClassEnum } from './CloudProjectDatabaseServiceReplicationPolicyClassEnum';

export type CloudProjectDatabaseServiceReplicationCreation = {
  emitHeartbeats: boolean;
  enabled?: boolean;
  replicationPolicyClass: CloudProjectDatabaseServiceReplicationPolicyClassEnum;
  sourceIntegration?: string;
  syncGroupOffsets: boolean;
  syncInterval: number;
  targetIntegration?: string;
  topicExcludeList: string[];
  topics: string[];
};
