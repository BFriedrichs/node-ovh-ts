/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebCronStateEnum } from './HostingWebCronStateEnum';
import { HostingWebCronStatusEnum } from './HostingWebCronStatusEnum';
import { HostingWebLanguagesEnum } from './HostingWebLanguagesEnum';

export type HostingWebCron = {
  command?: string;
  description: string | null;
  email: string | null;
  frequency?: string;
  id: number;
  language?: HostingWebLanguagesEnum;
  state: HostingWebCronStateEnum;
  status: HostingWebCronStatusEnum;
};
