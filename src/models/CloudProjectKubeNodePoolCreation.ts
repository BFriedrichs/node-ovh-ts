/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectKubeNodePoolAutoscalingParams } from './CloudProjectKubeNodePoolAutoscalingParams';
import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';

export type CloudProjectKubeNodePoolCreation = {
  antiAffinity: boolean | null;
  autoscale: boolean | null;
  autoscaling: CloudProjectKubeNodePoolAutoscalingParams;
  desiredNodes: number;
  flavorName?: string;
  maxNodes: number;
  minNodes: number;
  monthlyBilled: boolean | null;
  name: string;
  template: CloudKubeNodePoolTemplate;
};
