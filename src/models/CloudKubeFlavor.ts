/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeFlavorCategoryEnum } from './CloudKubeFlavorCategoryEnum';
import { CloudKubeFlavorStateEnum } from './CloudKubeFlavorStateEnum';

export type CloudKubeFlavor = {
  category?: CloudKubeFlavorCategoryEnum;
  gpus?: number;
  name?: string;
  ram?: number;
  state?: CloudKubeFlavorStateEnum;
  vCPUs?: number;
};
