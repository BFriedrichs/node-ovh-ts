/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';

export type CloudProjectKubeCreationNodePool = {
  antiAffinity: boolean | null;
  autoscale: boolean | null;
  desiredNodes: number;
  flavorName: string;
  maxNodes: number;
  minNodes: number;
  monthlyBilled: boolean | null;
  name: string;
  template: CloudKubeNodePoolTemplate;
};
