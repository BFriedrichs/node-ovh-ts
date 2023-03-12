/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsStreamColdStorageTargetEnum } from './DbaasLogsStreamColdStorageTargetEnum';
import { DbaasLogsStreamColdStorageContentEnum } from './DbaasLogsStreamColdStorageContentEnum';
import { DbaasLogsStreamColdStorageCompressionEnum } from './DbaasLogsStreamColdStorageCompressionEnum';

export type DbaasLogsOutputGraylogStreamUpdate = {
  coldStorageCompression: DbaasLogsStreamColdStorageCompressionEnum | null;
  coldStorageContent: DbaasLogsStreamColdStorageContentEnum | null;
  coldStorageEnabled: boolean | null;
  coldStorageNotifyEnabled: boolean | null;
  coldStorageRetention: number | null;
  coldStorageTarget: DbaasLogsStreamColdStorageTargetEnum | null;
  description?: string;
  encryptionKeysIds: string[] | null;
  indexingEnabled: boolean | null;
  indexingMaxSize: number | null;
  indexingNotifyEnabled: boolean | null;
  pauseIndexingOnMaxSize: boolean | null;
  title?: string;
  webSocketEnabled: boolean | null;
};
