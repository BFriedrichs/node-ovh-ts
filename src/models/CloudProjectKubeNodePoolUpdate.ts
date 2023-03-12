/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';
import { CloudProjectKubeNodePoolAutoscalingParams } from './CloudProjectKubeNodePoolAutoscalingParams';

export type CloudProjectKubeNodePoolUpdate = {
  autoscale?: boolean | null;
  autoscaling?: CloudProjectKubeNodePoolAutoscalingParams;
  desiredNodes?: number;
  maxNodes?: number;
  minNodes?: number;
  nodesToRemove?: string[];
  template?: CloudKubeNodePoolTemplate;
};
