/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerPartitionRaidEnum } from './DedicatedServerPartitionRaidEnum';
import { DedicatedTemplateOsFileSystemEnum } from './DedicatedTemplateOsFileSystemEnum';
import { DedicatedTemplatePartitionTypeEnum } from './DedicatedTemplatePartitionTypeEnum';

export type DedicatedInstallationTemplateTemplatePartitions = {
  filesystem: DedicatedTemplateOsFileSystemEnum;
  mountpoint: string;
  order: number;
  raid: DedicatedServerPartitionRaidEnum | null;
  size: number;
  type: DedicatedTemplatePartitionTypeEnum;
  volumeName: string | null;
};
