/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsNodeCapability } from './AnalyticsNodeCapability';
import { AnalyticsPlatformCapabilityRequirement } from './AnalyticsPlatformCapabilityRequirement';
import { AnalyticsComponent } from './AnalyticsComponent';

export type AnalyticsPlatformCapability = {
  availableRegion?: string[];
  bastionNode?: AnalyticsNodeCapability;
  components?: AnalyticsComponent[];
  edgeNode?: AnalyticsNodeCapability;
  hdfsReplicationFactor?: number;
  masterNode?: AnalyticsNodeCapability;
  requirements?: AnalyticsPlatformCapabilityRequirement[] | null;
  utilityNode?: AnalyticsNodeCapability;
  version?: string;
  versionDescription?: string;
  workerNode?: AnalyticsNodeCapability;
};
