/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingPendingChanges } from '../models/IpLoadbalancingPendingChanges';
import { IpLoadbalancingRouteHttpAction } from '../models/IpLoadbalancingRouteHttpAction';
import { IpLoadbalancingBackendUdpCustomerServerBackendUDPServer } from '../models/IpLoadbalancingBackendUdpCustomerServerBackendUDPServer';
import { IpLoadbalancingDefinedFarm } from '../models/IpLoadbalancingDefinedFarm';
import { IpLoadbalancingFarmAvailableProbe } from '../models/IpLoadbalancingFarmAvailableProbe';
import { IpLoadbalancingTaskTask } from '../models/IpLoadbalancingTaskTask';
import { IpLoadbalancingDefinedFrontend } from '../models/IpLoadbalancingDefinedFrontend';
import { IpLoadbalancingRouteHttpRouteHttp } from '../models/IpLoadbalancingRouteHttpRouteHttp';
import { IpLoadbalancingFrontendUdpFrontendUdp } from '../models/IpLoadbalancingFrontendUdpFrontendUdp';
import { IpLoadbalancingBackendProbe } from '../models/IpLoadbalancingBackendProbe';
import { IpLoadBalancingIp } from '../models/IpLoadBalancingIp';
import { IpLoadbalancingNatIps } from '../models/IpLoadbalancingNatIps';
import { IpLoadbalancingSslTypeEnum } from '../models/IpLoadbalancingSslTypeEnum';
import { IpLoadbalancingBackendUdpBackendUdp } from '../models/IpLoadbalancingBackendUdpBackendUdp';
import { IpLoadbalancingRouteRuleMatchesEnum } from '../models/IpLoadbalancingRouteRuleMatchesEnum';
import { IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer } from '../models/IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer';
import { IpLoadbalancingInstancesState } from '../models/IpLoadbalancingInstancesState';
import { IpLoadbalancingVrackNetworkVrackNetwork } from '../models/IpLoadbalancingVrackNetworkVrackNetwork';
import { IpLoadbalancingSslSsl } from '../models/IpLoadbalancingSslSsl';
import { IpLoadBalancingTaskActionEnum } from '../models/IpLoadBalancingTaskActionEnum';
import { IpLoadbalancingFrontendHttpFrontendHttp } from '../models/IpLoadbalancingFrontendHttpFrontendHttp';
import { IpLoadbalancingBalanceHTTPEnum } from '../models/IpLoadbalancingBalanceHTTPEnum';
import { IpLoadbalancingZoneZone } from '../models/IpLoadbalancingZoneZone';
import { IpLoadbalancingVrackNetworkCreationRules } from '../models/IpLoadbalancingVrackNetworkCreationRules';
import { IpLoadbalancingBackendTcpCustomerServerBackendTCPServer } from '../models/IpLoadbalancingBackendTcpCustomerServerBackendTCPServer';
import { ServicesService } from '../models/ServicesService';
import { IpLoadbalancingStickinessTCPEnum } from '../models/IpLoadbalancingStickinessTCPEnum';
import { IpLoadbalancingBackendCustomerServerStatusEnum } from '../models/IpLoadbalancingBackendCustomerServerStatusEnum';
import { IpLoadbalancingRouteAvailableRule } from '../models/IpLoadbalancingRouteAvailableRule';
import { IpLoadbalancingBackendTcpBackendTcp } from '../models/IpLoadbalancingBackendTcpBackendTcp';
import { IpLoadbalancingTaskStatusEnum } from '../models/IpLoadbalancingTaskStatusEnum';
import { IpLoadbalancingFrontendTcpFrontendTcp } from '../models/IpLoadbalancingFrontendTcpFrontendTcp';
import { IpLoadbalancingQuotaQuota } from '../models/IpLoadbalancingQuotaQuota';
import { IpLoadbalancingRouteTcpAction } from '../models/IpLoadbalancingRouteTcpAction';
import { IpLoadbalancingVrackInformation } from '../models/IpLoadbalancingVrackInformation';
import { IpLoadbalancingQuotaHistoryQuotaHistory } from '../models/IpLoadbalancingQuotaHistoryQuotaHistory';
import { IpLoadbalancingDefinedRoute } from '../models/IpLoadbalancingDefinedRoute';
import { IpLoadbalancingOnMarkedDownEnum } from '../models/IpLoadbalancingOnMarkedDownEnum';
import { IpLoadbalancingRouteRuleRouteRule } from '../models/IpLoadbalancingRouteRuleRouteRule';
import { IpLoadbalancingRouteAvailableAction } from '../models/IpLoadbalancingRouteAvailableAction';
import { IpLoadbalancingStatus } from '../models/IpLoadbalancingStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { IpLoadbalancingProxyProtocolVersionEnum } from '../models/IpLoadbalancingProxyProtocolVersionEnum';
import { IpLoadbalancingBackendHttpBackendHttp } from '../models/IpLoadbalancingBackendHttpBackendHttp';
import { IpLoadbalancingBalanceTCPEnum } from '../models/IpLoadbalancingBalanceTCPEnum';
import { IpLoadbalancingRouteTcpRouteTcp } from '../models/IpLoadbalancingRouteTcpRouteTcp';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { IpLoadbalancingStickinessHTTPEnum } from '../models/IpLoadbalancingStickinessHTTPEnum';
import OVHBase from '../ovh';

class IpLoadbalancingHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/ipLoadbalancing');
  };

  /** List of zone available for an IP load balancing */
  getAvailableZones = (): Promise<string> => {
    return this.ovh.request('GET', '/ipLoadbalancing/availableZones');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<IpLoadBalancingIp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: IpLoadBalancingIp): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}`, body);
  };

  /** Available farm probes for health checks */
  getServiceNameAvailableFarmProbes = (
    serviceName: string
  ): Promise<IpLoadbalancingFarmAvailableProbe> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFarmProbes`);
  };

  /** Available farm types */
  getServiceNameAvailableFarmType = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFarmType`);
  };

  /** Available frontend type */
  getServiceNameAvailableFrontendType = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFrontendType`);
  };

  /** Available route actions */
  getServiceNameAvailableRouteActions = (
    serviceName: string
  ): Promise<IpLoadbalancingRouteAvailableAction> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableRouteActions`);
  };

  /** Available route match rules */
  getServiceNameAvailableRouteRules = (
    serviceName: string
  ): Promise<IpLoadbalancingRouteAvailableRule> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableRouteRules`);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/confirmTermination`, body);
  };

  /** List of defined farms, and whether they are HTTP, TCP or UDP */
  getServiceNameDefinedFarms = (serviceName: string): Promise<IpLoadbalancingDefinedFarm> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedFarms`);
  };

  /** List of defined frontends, and whether they are HTTP, TCP or UDP */
  getServiceNameDefinedFrontends = (
    serviceName: string
  ): Promise<IpLoadbalancingDefinedFrontend> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedFrontends`);
  };

  /** List of defined routes, and whether they are HTTP or TCP */
  getServiceNameDefinedRoutes = (serviceName: string): Promise<IpLoadbalancingDefinedRoute> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedRoutes`);
  };

  /** List all failover ip routed to this IPLB */
  getServiceNameFailover = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/failover`);
  };

  /** Order a free certificate. We order and deliver it for you */
  postServiceNameFreeCertificate = (
    serviceName: string,
    body: { fqdn: string }
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/freeCertificate`, body);
  };

  /** HTTP Farm for this iplb */
  getServiceNameHttpFarm = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm`);
  };

  /** Add a new HTTP Farm on your IP Load Balancing */
  postServiceNameHttpFarm = (
    serviceName: string,
    body: {
      balance?: IpLoadbalancingBalanceHTTPEnum;
      displayName?: string;
      port?: number;
      probe?: IpLoadbalancingBackendProbe;
      stickiness?: IpLoadbalancingStickinessHTTPEnum;
      vrackNetworkId?: number;
      zone: string;
    }
  ): Promise<IpLoadbalancingBackendHttpBackendHttp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/http/farm`, body);
  };

  /** Delete an HTTP Farm */
  deleteServiceNameHttpFarmFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`);
  };

  /** Get this object properties */
  getServiceNameHttpFarmFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendHttpBackendHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`);
  };

  /** Alter this object properties */
  putServiceNameHttpFarmFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendHttpBackendHttp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`, body);
  };

  /** HTTP Farm's Servers */
  getServiceNameHttpFarmFarmIdServer = (farmId: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`);
  };

  /** Add a server to an HTTP Farm */
  postServiceNameHttpFarmFarmIdServer = (
    farmId: number,
    serviceName: string,
    body: {
      address: string;
      backup?: boolean;
      chain?: string;
      cookie?: string;
      displayName?: string;
      onMarkedDown?: IpLoadbalancingOnMarkedDownEnum;
      port?: number;
      probe?: boolean;
      proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersionEnum;
      ssl?: boolean;
      status: IpLoadbalancingBackendCustomerServerStatusEnum;
      weight?: number;
    }
  ): Promise<IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`,
      body
    );
  };

  /** Delete a server from an HTTP Farm */
  deleteServiceNameHttpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`
    );
  };

  /** Get this object properties */
  getServiceNameHttpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`
    );
  };

  /** Alter this object properties */
  putServiceNameHttpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string,
    body: IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`,
      body
    );
  };

  /** HTTP frontends for this iplb */
  getServiceNameHttpFrontend = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/frontend`);
  };

  /** Add a new http frontend on your IP Load Balancing */
  postServiceNameHttpFrontend = (
    serviceName: string,
    body: {
      allowedSource?: string;
      dedicatedIpfo?: string;
      defaultFarmId?: number;
      defaultSslId?: number;
      deniedSource?: string;
      disabled?: boolean;
      displayName?: string;
      hsts?: boolean;
      httpHeader?: string;
      port: string;
      redirectLocation?: string;
      ssl?: boolean;
      zone: string;
    }
  ): Promise<IpLoadbalancingFrontendHttpFrontendHttp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/http/frontend`, body);
  };

  /** Delete an HTTP frontend */
  deleteServiceNameHttpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`
    );
  };

  /** Get this object properties */
  getServiceNameHttpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendHttpFrontendHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  putServiceNameHttpFrontendFrontendId = (
    frontendId: number,
    serviceName: string,
    body: IpLoadbalancingFrontendHttpFrontendHttp
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`,
      body
    );
  };

  /** HTTP routes for this iplb */
  getServiceNameHttpRoute = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route`);
  };

  /** Add a new HTTP route to your frontend */
  postServiceNameHttpRoute = (
    serviceName: string,
    body: {
      action: IpLoadbalancingRouteHttpAction;
      displayName?: string;
      frontendId?: number;
      weight?: number;
    }
  ): Promise<IpLoadbalancingRouteHttpRouteHttp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/http/route`, body);
  };

  /** Delete this HTTP route */
  deleteServiceNameHttpRouteRouteId = (routeId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`);
  };

  /** Get this object properties */
  getServiceNameHttpRouteRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteHttpRouteHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`);
  };

  /** Alter this object properties */
  putServiceNameHttpRouteRouteId = (
    routeId: number,
    serviceName: string,
    body: IpLoadbalancingRouteHttpRouteHttp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`, body);
  };

  /** HTTP routes for this iplb */
  getServiceNameHttpRouteRouteIdRule = (routeId: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`);
  };

  /** Add a new rule to your route */
  postServiceNameHttpRouteRouteIdRule = (
    routeId: number,
    serviceName: string,
    body: {
      displayName?: string;
      field: string;
      match: IpLoadbalancingRouteRuleMatchesEnum;
      negate?: boolean;
      pattern?: string;
      subField?: string;
    }
  ): Promise<IpLoadbalancingRouteRuleRouteRule> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`,
      body
    );
  };

  /** Delete this rule from the route */
  deleteServiceNameHttpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`
    );
  };

  /** Get this object properties */
  getServiceNameHttpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteRuleRouteRule> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`
    );
  };

  /** Alter this object properties */
  putServiceNameHttpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string,
    body: IpLoadbalancingRouteRuleRouteRule
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`,
      body
    );
  };

  /** Get the effective state of your IPLB instances on IPLB servers */
  getServiceNameInstancesState = (serviceName: string): Promise<IpLoadbalancingInstancesState> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/instancesState`);
  };

  /** Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one */
  getServiceNameNatIp = (serviceName: string): Promise<IpLoadbalancingNatIps> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/natIp`);
  };

  /** List the pending changes on your Load Balancer configuration, per zone */
  getServiceNamePendingChanges = (serviceName: string): Promise<IpLoadbalancingPendingChanges> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/pendingChanges`);
  };

  /** Available quota informations for current billing period per zone */
  getServiceNameQuota = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quota`);
  };

  /** Get this object properties */
  getServiceNameQuotaZone = (
    serviceName: string,
    zone: string
  ): Promise<IpLoadbalancingQuotaQuota> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quota/${zone}`);
  };

  /** Alter this object properties */
  putServiceNameQuotaZone = (
    serviceName: string,
    zone: string,
    body: IpLoadbalancingQuotaQuota
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/quota/${zone}`, body);
  };

  /** Quota history informations, per month */
  getServiceNameQuotaHistory = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quotaHistory`);
  };

  /** Get this object properties */
  getServiceNameQuotaHistoryId = (
    id: number,
    serviceName: string
  ): Promise<IpLoadbalancingQuotaHistoryQuotaHistory> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quotaHistory/${id}`);
  };

  /** Apply the configuration to your iplb */
  postServiceNameRefresh = (
    serviceName: string,
    body: { zone?: string }
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/refresh`, body);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/serviceInfos`, body);
  };

  /** Ssl for this iplb */
  getServiceNameSsl = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/ssl`);
  };

  /** Add a new custom SSL certificate on your IP Load Balancing */
  postServiceNameSsl = (
    serviceName: string,
    body: { certificate: string; chain?: string; displayName?: string; key: string }
  ): Promise<IpLoadbalancingSslSsl> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/ssl`, body);
  };

  /** Delete a custom SSL certificate */
  deleteServiceNameSslId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/ssl/${id}`);
  };

  /** Get this object properties */
  getServiceNameSslId = (id: number, serviceName: string): Promise<IpLoadbalancingSslSsl> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/ssl/${id}`);
  };

  /** Alter this object properties */
  putServiceNameSslId = (
    id: number,
    serviceName: string,
    body: IpLoadbalancingSslSsl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/ssl/${id}`, body);
  };

  /** Get the global status of your IPLB */
  getServiceNameStatus = (serviceName: string): Promise<IpLoadbalancingStatus> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/status`);
  };

  /** Task for this iplb */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskId = (id: number, serviceName: string): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/task/${id}`);
  };

  /** TCP Farm for this iplb */
  getServiceNameTcpFarm = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm`);
  };

  /** Add a new TCP Farm on your IP Load Balancing */
  postServiceNameTcpFarm = (
    serviceName: string,
    body: {
      balance?: IpLoadbalancingBalanceTCPEnum;
      displayName?: string;
      port?: number;
      probe?: IpLoadbalancingBackendProbe;
      stickiness?: IpLoadbalancingStickinessTCPEnum;
      vrackNetworkId?: number;
      zone: string;
    }
  ): Promise<IpLoadbalancingBackendTcpBackendTcp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/tcp/farm`, body);
  };

  /** Delete a TCP Farm */
  deleteServiceNameTcpFarmFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`);
  };

  /** Get this object properties */
  getServiceNameTcpFarmFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendTcpBackendTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`);
  };

  /** Alter this object properties */
  putServiceNameTcpFarmFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendTcpBackendTcp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`, body);
  };

  /** TCP Farm's Servers */
  getServiceNameTcpFarmFarmIdServer = (farmId: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`);
  };

  /** Add a server to a TCP Farm */
  postServiceNameTcpFarmFarmIdServer = (
    farmId: number,
    serviceName: string,
    body: {
      address: string;
      backup?: boolean;
      chain?: string;
      displayName?: string;
      onMarkedDown?: IpLoadbalancingOnMarkedDownEnum;
      port?: number;
      probe?: boolean;
      proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersionEnum;
      ssl?: boolean;
      status: IpLoadbalancingBackendCustomerServerStatusEnum;
      weight?: number;
    }
  ): Promise<IpLoadbalancingBackendTcpCustomerServerBackendTCPServer> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`,
      body
    );
  };

  /** Delete a server from a TCP Farm */
  deleteServiceNameTcpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`
    );
  };

  /** Get this object properties */
  getServiceNameTcpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendTcpCustomerServerBackendTCPServer> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`
    );
  };

  /** Alter this object properties */
  putServiceNameTcpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string,
    body: IpLoadbalancingBackendTcpCustomerServerBackendTCPServer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`,
      body
    );
  };

  /** TCP frontends for this iplb */
  getServiceNameTcpFrontend = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/frontend`);
  };

  /** Add a new TCP frontend on your IP Load Balancing */
  postServiceNameTcpFrontend = (
    serviceName: string,
    body: {
      allowedSource?: string;
      dedicatedIpfo?: string;
      defaultFarmId?: number;
      defaultSslId?: number;
      deniedSource?: string;
      disabled?: boolean;
      displayName?: string;
      port: string;
      ssl?: boolean;
      zone: string;
    }
  ): Promise<IpLoadbalancingFrontendTcpFrontendTcp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/tcp/frontend`, body);
  };

  /** Delete an TCP frontend */
  deleteServiceNameTcpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`);
  };

  /** Get this object properties */
  getServiceNameTcpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendTcpFrontendTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  putServiceNameTcpFrontendFrontendId = (
    frontendId: number,
    serviceName: string,
    body: IpLoadbalancingFrontendTcpFrontendTcp
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`,
      body
    );
  };

  /** TCP routes for this iplb */
  getServiceNameTcpRoute = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route`);
  };

  /** Add a new TCP route to your frontend */
  postServiceNameTcpRoute = (
    serviceName: string,
    body: {
      action: IpLoadbalancingRouteTcpAction;
      displayName?: string;
      frontendId?: number;
      weight?: number;
    }
  ): Promise<IpLoadbalancingRouteTcpRouteTcp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/tcp/route`, body);
  };

  /** Delete this TCP route */
  deleteServiceNameTcpRouteRouteId = (routeId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`);
  };

  /** Get this object properties */
  getServiceNameTcpRouteRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteTcpRouteTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`);
  };

  /** Alter this object properties */
  putServiceNameTcpRouteRouteId = (
    routeId: number,
    serviceName: string,
    body: IpLoadbalancingRouteTcpRouteTcp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`, body);
  };

  /** HTTP routes for this iplb */
  getServiceNameTcpRouteRouteIdRule = (routeId: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`);
  };

  /** Add a new rule to your route */
  postServiceNameTcpRouteRouteIdRule = (
    routeId: number,
    serviceName: string,
    body: {
      displayName?: string;
      field: string;
      match: IpLoadbalancingRouteRuleMatchesEnum;
      negate?: boolean;
      pattern?: string;
      subField?: string;
    }
  ): Promise<IpLoadbalancingRouteRuleRouteRule> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`,
      body
    );
  };

  /** Delete this rule from the route */
  deleteServiceNameTcpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`
    );
  };

  /** Get this object properties */
  getServiceNameTcpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteRuleRouteRule> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`
    );
  };

  /** Alter this object properties */
  putServiceNameTcpRouteRouteIdRuleRuleId = (
    routeId: number,
    ruleId: number,
    serviceName: string,
    body: IpLoadbalancingRouteRuleRouteRule
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`,
      body
    );
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/terminate`);
  };

  /** UDP Farm for this iplb */
  getServiceNameUdpFarm = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm`);
  };

  /** Add a new UDP Farm on your IP Load Balancing */
  postServiceNameUdpFarm = (
    serviceName: string,
    body: { displayName?: string; port: number; vrackNetworkId?: number; zone: string }
  ): Promise<IpLoadbalancingBackendUdpBackendUdp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/udp/farm`, body);
  };

  /** Delete an UDP Farm */
  deleteServiceNameUdpFarmFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`);
  };

  /** Get this object properties */
  getServiceNameUdpFarmFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendUdpBackendUdp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`);
  };

  /** Alter this object properties */
  putServiceNameUdpFarmFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendUdpBackendUdp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`, body);
  };

  /** UDP Farm's Servers */
  getServiceNameUdpFarmFarmIdServer = (farmId: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`);
  };

  /** Add a server to an UDP Farm */
  postServiceNameUdpFarmFarmIdServer = (
    farmId: number,
    serviceName: string,
    body: {
      address: string;
      displayName?: string;
      port?: number;
      status: IpLoadbalancingBackendCustomerServerStatusEnum;
    }
  ): Promise<IpLoadbalancingBackendUdpCustomerServerBackendUDPServer> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`,
      body
    );
  };

  /** Delete a server from an UDP Farm */
  deleteServiceNameUdpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`
    );
  };

  /** Get this object properties */
  getServiceNameUdpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendUdpCustomerServerBackendUDPServer> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`
    );
  };

  /** Alter this object properties */
  putServiceNameUdpFarmFarmIdServerServerId = (
    farmId: number,
    serverId: number,
    serviceName: string,
    body: IpLoadbalancingBackendUdpCustomerServerBackendUDPServer
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`,
      body
    );
  };

  /** UDP frontends for this iplb */
  getServiceNameUdpFrontend = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/frontend`);
  };

  /** Add a new UDP frontend on your IP Load Balancing */
  postServiceNameUdpFrontend = (
    serviceName: string,
    body: {
      dedicatedIpfo?: string;
      defaultFarmId?: number;
      disabled?: boolean;
      displayName?: string;
      port: string;
      zone: string;
    }
  ): Promise<IpLoadbalancingFrontendUdpFrontendUdp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/udp/frontend`, body);
  };

  /** Delete an UDP frontend */
  deleteServiceNameUdpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`);
  };

  /** Get this object properties */
  getServiceNameUdpFrontendFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendUdpFrontendUdp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  putServiceNameUdpFrontendFrontendId = (
    frontendId: number,
    serviceName: string,
    body: IpLoadbalancingFrontendUdpFrontendUdp
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`,
      body
    );
  };

  /** Descriptions of private networks in the vRack attached to this Load Balancer */
  getServiceNameVrackNetwork = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/network`);
  };

  /** Add a description of a private network in the attached vRack */
  postServiceNameVrackNetwork = (
    serviceName: string,
    body: { displayName?: string; farmId?: number; natIp: string; subnet: string; vlan?: number }
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/vrack/network`, body);
  };

  /** Delete this description of a private network in the vRack. It must not be used by any farm server */
  deleteServiceNameVrackNetworkVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
    );
  };

  /** Get this object properties */
  getServiceNameVrackNetworkVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
    );
  };

  /** Alter this object properties */
  putServiceNameVrackNetworkVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number,
    body: IpLoadbalancingVrackNetworkVrackNetwork
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`,
      body
    );
  };

  /** Update farm attached to that vrack network id */
  postServiceNameVrackNetworkVrackNetworkIdUpdateFarmId = (
    serviceName: string,
    vrackNetworkId: number,
    body: { farmId: number }
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}/updateFarmId`,
      body
    );
  };

  /** Rules to create a network attached to a vrack */
  getServiceNameVrackNetworkCreationRules = (
    serviceName: string
  ): Promise<IpLoadbalancingVrackNetworkCreationRules> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/networkCreationRules`);
  };

  /** Information about vRack for your Load Balancer */
  getServiceNameVrackStatus = (serviceName: string): Promise<IpLoadbalancingVrackInformation> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/status`);
  };

  /** Zone for this iplb */
  getServiceNameZone = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/zone`);
  };

  /** Get this object properties */
  getServiceNameZoneName = (
    name: string,
    serviceName: string
  ): Promise<IpLoadbalancingZoneZone> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/zone/${name}`);
  };

  /** Cancel the termination request of your service zone option */
  postServiceNameZoneNameCancelTermination = (name: string, serviceName: string): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/zone/${name}/cancelTermination`
    );
  };

  /** Terminate your service zone option */
  postServiceNameZoneNameTerminate = (name: string, serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/zone/${name}/terminate`);
  };
}

export default IpLoadbalancingHandler;
