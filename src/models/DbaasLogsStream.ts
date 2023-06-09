/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsStreamColdStorageCompressionEnum } from './DbaasLogsStreamColdStorageCompressionEnum';
import { DbaasLogsStreamColdStorageContentEnum } from './DbaasLogsStreamColdStorageContentEnum';
import { DbaasLogsStreamColdStorageTargetEnum } from './DbaasLogsStreamColdStorageTargetEnum';

export type DbaasLogsStream = {
  canAlert?: boolean;
  coldStorageCompression?: DbaasLogsStreamColdStorageCompressionEnum | null;
  coldStorageContent?: DbaasLogsStreamColdStorageContentEnum | null;
  coldStorageEnabled?: boolean | null;
  coldStorageNotifyEnabled?: boolean | null;
  coldStorageRetention?: number | null;
  coldStorageTarget?: DbaasLogsStreamColdStorageTargetEnum | null;
  createdAt?: Date;
  description?: string;
  encryptionKeysIds?: string[] | null;
  indexingCurrentSize?: number | null;
  indexingEnabled?: boolean | null;
  indexingMaxSize?: number | null;
  indexingNotifyEnabled?: boolean | null;
  isEditable?: boolean;
  nbAlertCondition?: number;
  nbArchive?: number;
  parentStreamId?: string | null;
  pauseIndexingOnMaxSize?: boolean | null;
  retentionId?: string;
  streamId?: string;
  title?: string;
  updatedAt?: Date | null;
  webSocketEnabled?: boolean | null;
};
