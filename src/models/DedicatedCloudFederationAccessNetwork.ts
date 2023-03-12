/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudOptionAccessNetworkStateEnum } from './DedicatedCloudOptionAccessNetworkStateEnum';

export type DedicatedCloudFederationAccessNetwork = {
  activeDirectoryId?: number;
  baseDnForGroups?: string;
  baseDnForUsers?: string;
  description?: string;
  domainAlias?: string;
  domainName?: string;
  ip?: string;
  ldapHostname?: string | null;
  ldapTcpPort?: number;
  noSsl?: boolean;
  sslThumbprint?: string | null;
  state?: DedicatedCloudOptionAccessNetworkStateEnum;
  username?: string;
};
