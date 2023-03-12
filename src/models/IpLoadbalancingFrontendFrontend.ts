/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingProxyTypeEnum } from './IpLoadbalancingProxyTypeEnum';

export type IpLoadbalancingFrontendFrontend = {
  allowedSource?: string[] | null;
  dedicatedIpfo?: string[] | null;
  defaultBackendId?: number | null;
  defaultSslId?: number | null;
  deniedSource?: string[] | null;
  disabled?: boolean;
  hsts?: boolean;
  httpHeader?: string[] | null;
  id?: number;
  port?: string;
  redirectLocation?: string | null;
  ssl?: boolean;
  type?: IpLoadbalancingProxyTypeEnum;
  zone?: string;
};
