/* WARNING: This file is auto-generated . Do not edit manually. */

import { HttpMethodEnum } from './HttpMethodEnum';

export type ApiLog = {
  account: string;
  date: Date;
  ip: string | null;
  logId: number;
  method: HttpMethodEnum;
  path: string;
  route: string;
};
