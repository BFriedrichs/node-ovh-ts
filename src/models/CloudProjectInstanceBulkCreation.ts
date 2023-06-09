/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudInstanceNetworkBulkParams } from './CloudInstanceNetworkBulkParams';
import { CloudInstanceAutoBackup } from './CloudInstanceAutoBackup';

export type CloudProjectInstanceBulkCreation = {
  autobackup?: CloudInstanceAutoBackup | null;
  flavorId: string;
  groupId?: string | null;
  imageId?: string | null;
  monthlyBilling?: boolean | null;
  name: string;
  networks?: CloudInstanceNetworkBulkParams[] | null;
  number: number;
  region: string;
  sshKeyId?: string | null;
  userData?: string | null;
  volumeId?: string | null;
};
