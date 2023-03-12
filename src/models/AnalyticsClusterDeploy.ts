/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsNodeDeploy } from './AnalyticsNodeDeploy';

export type AnalyticsClusterDeploy = {
  clusterName?: string;
  clusterType?: string;
  edgeNodeStorage?: number;
  hdfsEffectiveStorage?: number;
  hdfsReplicationFactor?: number;
  masterNodeStorage?: number;
  masterPassword?: string;
  nodes?: AnalyticsNodeDeploy[];
  osProjectId?: string;
  osProjectName?: string;
  osRegion?: string;
  osToken?: string;
  sshPublicKey?: string;
};
