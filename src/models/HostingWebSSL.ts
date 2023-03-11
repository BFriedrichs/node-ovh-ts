/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebHostedsslStatusEnum } from './HostingWebHostedsslStatusEnum';
import { HostingWebHostedsslTypeEnum } from './HostingWebHostedsslTypeEnum';
import { HostingWebHostedsslProviderEnum } from './HostingWebHostedsslProviderEnum';

export type HostingWebSSL = {
  isReportable: boolean;
  provider: HostingWebHostedsslProviderEnum;
  regenerable: boolean;
  status: HostingWebHostedsslStatusEnum;
  taskId: number | null;
  type: HostingWebHostedsslTypeEnum;
};
