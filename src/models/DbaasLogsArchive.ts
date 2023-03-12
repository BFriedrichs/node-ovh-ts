/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsArchiveRetrievalStateEnum } from './DbaasLogsArchiveRetrievalStateEnum';

export type DbaasLogsArchive = {
  archiveId?: string;
  createdAt?: Date | null;
  filename?: string;
  md5?: string;
  retrievalDelay?: number;
  retrievalState?: DbaasLogsArchiveRetrievalStateEnum;
  sha256?: string;
  size?: number;
};
