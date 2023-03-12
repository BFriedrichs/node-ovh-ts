/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudInstanceMonthlyBilling } from './CloudInstanceMonthlyBilling';
import { CloudInstanceIpAddress } from './CloudInstanceIpAddress';
import { CloudSshkeySshKeyDetail } from './CloudSshkeySshKeyDetail';
import { CloudFlavorFlavor } from './CloudFlavorFlavor';
import { CloudImageImage } from './CloudImageImage';
import { CloudInstanceInstanceStatusEnum } from './CloudInstanceInstanceStatusEnum';

export type CloudInstanceInstanceDetail = {
  created?: Date;
  currentMonthOutgoingTraffic?: number | null;
  flavor?: CloudFlavorFlavor;
  id?: string;
  image?: CloudImageImage;
  ipAddresses?: CloudInstanceIpAddress[];
  monthlyBilling?: CloudInstanceMonthlyBilling | null;
  name?: string;
  operationIds?: string[];
  planCode?: string | null;
  region?: string;
  rescuePassword?: string | null;
  sshKey?: CloudSshkeySshKeyDetail | null;
  status?: CloudInstanceInstanceStatusEnum;
};
