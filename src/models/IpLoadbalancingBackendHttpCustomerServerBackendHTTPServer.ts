/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingProxyProtocolVersionEnum } from './IpLoadbalancingProxyProtocolVersionEnum';
import { IpLoadbalancingOnMarkedDownEnum } from './IpLoadbalancingOnMarkedDownEnum';
import { IpLoadbalancingServerState } from './IpLoadbalancingServerState';
import { IpLoadbalancingBackendCustomerServerStatusEnum } from './IpLoadbalancingBackendCustomerServerStatusEnum';

export type IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer = {
  address: string;
  backendId: number;
  backup: boolean;
  chain: string | null;
  cookie: string | null;
  displayName: string | null;
  onMarkedDown: IpLoadbalancingOnMarkedDownEnum | null;
  port: number | null;
  probe: boolean;
  proxyProtocolVersion: IpLoadbalancingProxyProtocolVersionEnum | null;
  serverId: number;
  serverState: IpLoadbalancingServerState;
  ssl: boolean;
  status: IpLoadbalancingBackendCustomerServerStatusEnum;
  weight: number | null;
};
