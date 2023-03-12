/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudInstanceInstanceStatusEnum } from './CloudInstanceInstanceStatusEnum';
import { CloudInstanceIpAddress } from './CloudInstanceIpAddress';
import { CloudImageImage } from './CloudImageImage';
import { CloudInstanceMonthlyBilling } from './CloudInstanceMonthlyBilling';
import { CloudSshkeySshKeyDetail } from './CloudSshkeySshKeyDetail';
import { CloudFlavorFlavor } from './CloudFlavorFlavor';

export type CloudInstanceInstanceDetail = {
  created: Date;
  currentMonthOutgoingTraffic: number | null;
  flavor: CloudFlavorFlavor;
  id: string;
  image: CloudImageImage;
  ipAddresses: CloudInstanceIpAddress[];
  monthlyBilling: CloudInstanceMonthlyBilling | null;
  name: string;
  operationIds: string[];
  planCode: string | null;
  region: string;
  rescuePassword: string | null;
  sshKey: CloudSshkeySshKeyDetail | null;
  status: CloudInstanceInstanceStatusEnum;
};
