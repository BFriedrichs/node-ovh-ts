/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';
import { CloudProjectKubeNodePoolAutoscalingParams } from './CloudProjectKubeNodePoolAutoscalingParams';

export type CloudProjectKubeNodePoolCreation = {
  antiAffinity?: boolean | null;
  autoscale?: boolean | null;
  autoscaling?: CloudProjectKubeNodePoolAutoscalingParams;
  desiredNodes?: number;
  flavorName: string;
  maxNodes?: number;
  minNodes?: number;
  monthlyBilled?: boolean | null;
  name?: string;
  template?: CloudKubeNodePoolTemplate;
};
