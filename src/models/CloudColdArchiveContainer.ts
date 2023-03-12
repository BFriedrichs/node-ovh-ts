/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudStorageObject } from './CloudStorageObject';
import { CloudColdArchiveContainerStatusEnum } from './CloudColdArchiveContainerStatusEnum';

export type CloudColdArchiveContainer = {
  createdAt: Date;
  name: string;
  objects: CloudStorageObject[];
  objectsCount: number;
  objectsSize: number;
  ownerId: number;
  status: CloudColdArchiveContainerStatusEnum;
  virtualHost: string;
};
