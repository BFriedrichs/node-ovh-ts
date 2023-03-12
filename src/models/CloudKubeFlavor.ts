/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeFlavorStateEnum } from './CloudKubeFlavorStateEnum';
import { CloudKubeFlavorCategoryEnum } from './CloudKubeFlavorCategoryEnum';

export type CloudKubeFlavor = {
  category: CloudKubeFlavorCategoryEnum;
  gpus: number;
  name: string;
  ram: number;
  state: CloudKubeFlavorStateEnum;
  vCPUs: number;
};
