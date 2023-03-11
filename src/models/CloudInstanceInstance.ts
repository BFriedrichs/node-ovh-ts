/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudInstanceIpAddress } from './CloudInstanceIpAddress';
import { CloudInstanceInstanceStatusEnum } from './CloudInstanceInstanceStatusEnum';
import { CloudInstanceMonthlyBilling } from './CloudInstanceMonthlyBilling';

export type CloudInstanceInstance = {
  created: Date;
  currentMonthOutgoingTraffic: number | null;
  flavorId: string;
  id: string;
  imageId: string;
  ipAddresses: CloudInstanceIpAddress;
  monthlyBilling: CloudInstanceMonthlyBilling | null;
  name: string;
  operationIds: string;
  planCode: string | null;
  region: string;
  sshKeyId: string | null;
  status: CloudInstanceInstanceStatusEnum;
};
