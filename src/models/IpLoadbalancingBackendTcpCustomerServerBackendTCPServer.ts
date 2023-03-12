/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingBackendCustomerServerStatusEnum } from './IpLoadbalancingBackendCustomerServerStatusEnum';
import { IpLoadbalancingServerState } from './IpLoadbalancingServerState';
import { IpLoadbalancingOnMarkedDownEnum } from './IpLoadbalancingOnMarkedDownEnum';
import { IpLoadbalancingProxyProtocolVersionEnum } from './IpLoadbalancingProxyProtocolVersionEnum';

export type IpLoadbalancingBackendTcpCustomerServerBackendTCPServer = {
  address?: string;
  backendId?: number;
  backup?: boolean;
  chain?: string | null;
  displayName?: string | null;
  onMarkedDown?: IpLoadbalancingOnMarkedDownEnum | null;
  port?: number | null;
  probe?: boolean;
  proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersionEnum | null;
  serverId?: number;
  serverState?: IpLoadbalancingServerState[];
  ssl?: boolean;
  status?: IpLoadbalancingBackendCustomerServerStatusEnum;
  weight?: number | null;
};
