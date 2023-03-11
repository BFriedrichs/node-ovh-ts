/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudVolumeVolumeTypeEnum } from './CloudVolumeVolumeTypeEnum';

export type CloudProjectVolumeCreation = {
  description: string | null;
  imageId: string | null;
  name: string | null;
  region?: string;
  size?: number;
  snapshotId: string | null;
  type?: CloudVolumeVolumeTypeEnum;
};
