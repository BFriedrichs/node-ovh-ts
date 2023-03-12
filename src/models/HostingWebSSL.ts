/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebHostedsslStatusEnum } from './HostingWebHostedsslStatusEnum';
import { HostingWebHostedsslProviderEnum } from './HostingWebHostedsslProviderEnum';
import { HostingWebHostedsslTypeEnum } from './HostingWebHostedsslTypeEnum';

export type HostingWebSSL = {
  isReportable: boolean;
  provider: HostingWebHostedsslProviderEnum;
  regenerable: boolean;
  status: HostingWebHostedsslStatusEnum;
  taskId: number | null;
  type: HostingWebHostedsslTypeEnum;
};
