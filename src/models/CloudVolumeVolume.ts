/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudVolumeVolumeTypeEnum } from './CloudVolumeVolumeTypeEnum';

export type CloudVolumeVolume = {
  attachedTo?: string[];
  bootable?: boolean;
  creationDate?: Date;
  description?: string;
  id?: string;
  name?: string;
  planCode?: string | null;
  region?: string;
  size?: number;
  status?: string;
  type?: CloudVolumeVolumeTypeEnum;
};
