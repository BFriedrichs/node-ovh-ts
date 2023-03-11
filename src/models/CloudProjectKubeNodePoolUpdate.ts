/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectKubeNodePoolAutoscalingParams } from './CloudProjectKubeNodePoolAutoscalingParams';
import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';

export type CloudProjectKubeNodePoolUpdate = {
  autoscale: boolean | null;
  autoscaling: CloudProjectKubeNodePoolAutoscalingParams;
  desiredNodes: number;
  maxNodes: number;
  minNodes: number;
  nodesToRemove: string;
  template: CloudKubeNodePoolTemplate;
};
