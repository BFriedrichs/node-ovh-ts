/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsEncryptionKeyAlgorithmEnum } from './DbaasLogsEncryptionKeyAlgorithmEnum';

export type DbaasLogsEncryptionKey = {
  algorithm?: DbaasLogsEncryptionKeyAlgorithmEnum;
  content: string;
  createdAt?: Date;
  encryptionKeyId?: string;
  fingerprint: string;
  isEditable?: boolean;
  nbArchive?: number | null;
  title: string;
  uid?: string;
};
