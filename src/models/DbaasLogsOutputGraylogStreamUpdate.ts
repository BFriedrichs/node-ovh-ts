/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsStreamColdStorageCompressionEnum } from './DbaasLogsStreamColdStorageCompressionEnum';
import { DbaasLogsStreamColdStorageContentEnum } from './DbaasLogsStreamColdStorageContentEnum';
import { DbaasLogsStreamColdStorageTargetEnum } from './DbaasLogsStreamColdStorageTargetEnum';

export type DbaasLogsOutputGraylogStreamUpdate = {
  coldStorageCompression?: DbaasLogsStreamColdStorageCompressionEnum | null;
  coldStorageContent?: DbaasLogsStreamColdStorageContentEnum | null;
  coldStorageEnabled?: boolean | null;
  coldStorageNotifyEnabled?: boolean | null;
  coldStorageRetention?: number | null;
  coldStorageTarget?: DbaasLogsStreamColdStorageTargetEnum | null;
  description: string;
  encryptionKeysIds?: string[] | null;
  indexingEnabled?: boolean | null;
  indexingMaxSize?: number | null;
  indexingNotifyEnabled?: boolean | null;
  pauseIndexingOnMaxSize?: boolean | null;
  title: string;
  webSocketEnabled?: boolean | null;
};
