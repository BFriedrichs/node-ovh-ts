/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudStorageObject } from './CloudStorageObject';

export type CloudStorageContainer = {
  createdAt?: Date;
  name?: string;
  objects?: CloudStorageObject[];
  objectsCount?: number;
  objectsSize?: number;
  ownerId?: number;
  region?: string;
  virtualHost?: string;
};
