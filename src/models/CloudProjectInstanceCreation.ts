/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudInstanceAutoBackup } from './CloudInstanceAutoBackup';
import { CloudInstanceNetworkParams } from './CloudInstanceNetworkParams';

export type CloudProjectInstanceCreation = {
  autobackup: CloudInstanceAutoBackup | null;
  flavorId?: string;
  groupId: string | null;
  imageId: string | null;
  monthlyBilling: boolean | null;
  name?: string;
  networks: CloudInstanceNetworkParams[] | null;
  region?: string;
  sshKeyId: string | null;
  userData: string | null;
  volumeId: string | null;
};
