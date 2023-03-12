/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudStorageContainerObject } from './CloudStorageContainerObject';
import { CloudStorageTypeEnum } from './CloudStorageTypeEnum';

export type CloudStorageContainerDetail = {
  archive?: boolean;
  containerType?: CloudStorageTypeEnum;
  cors?: string[];
  name?: string;
  objects?: CloudStorageContainerObject[];
  public?: boolean;
  region?: string;
  staticUrl?: string;
  storedBytes?: number;
  storedObjects?: number;
};
