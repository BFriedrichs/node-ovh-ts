/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsBatchError } from './SmsBatchError';
import { SmsBatchStatusEnum } from './SmsBatchStatusEnum';

export type SmsBatch = {
  accountID?: number;
  createdAt?: Date;
  errors?: SmsBatchError[];
  estimatedCredits?: number;
  finishedAt?: Date | null;
  from?: string | null;
  id?: string;
  message?: string;
  name?: string;
  processedRecords?: number;
  receivers?: string[] | null;
  sentAt?: Date | null;
  slotID?: string | null;
  startedAt?: Date | null;
  status?: SmsBatchStatusEnum;
  totalRecords?: number;
  updatedAt?: Date;
};
