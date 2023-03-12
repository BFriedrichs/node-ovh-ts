/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudStorageTypeEnum } from './CloudStorageTypeEnum';
import { CloudStorageContainerObject } from './CloudStorageContainerObject';

export type CloudStorageContainerDetail = {
  archive: boolean;
  containerType: CloudStorageTypeEnum;
  cors: string[];
  name: string;
  objects: CloudStorageContainerObject[];
  public: boolean;
  region: string;
  staticUrl: string;
  storedBytes: number;
  storedObjects: number;
};
