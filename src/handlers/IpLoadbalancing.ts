/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingBackendHttpBackendHttp } from '../models/IpLoadbalancingBackendHttpBackendHttp';
import { IpLoadbalancingPendingChanges } from '../models/IpLoadbalancingPendingChanges';
import { IpLoadbalancingBackendUdpCustomerServerBackendUDPServer } from '../models/IpLoadbalancingBackendUdpCustomerServerBackendUDPServer';
import { IpLoadbalancingBalanceHTTPEnum } from '../models/IpLoadbalancingBalanceHTTPEnum';
import { IpLoadbalancingZoneZone } from '../models/IpLoadbalancingZoneZone';
import { IpLoadbalancingStickinessTCPEnum } from '../models/IpLoadbalancingStickinessTCPEnum';
import { IpLoadbalancingQuotaQuota } from '../models/IpLoadbalancingQuotaQuota';
import { IpLoadbalancingRouteAvailableAction } from '../models/IpLoadbalancingRouteAvailableAction';
import { IpLoadbalancingTaskStatusEnum } from '../models/IpLoadbalancingTaskStatusEnum';
import { IpLoadbalancingRouteHttpRouteHttp } from '../models/IpLoadbalancingRouteHttpRouteHttp';
import { IpLoadbalancingFrontendUdpFrontendUdp } from '../models/IpLoadbalancingFrontendUdpFrontendUdp';
import { IpLoadbalancingSslTypeEnum } from '../models/IpLoadbalancingSslTypeEnum';
import { IpLoadbalancingBackendUdpBackendUdp } from '../models/IpLoadbalancingBackendUdpBackendUdp';
import { IpLoadbalancingVrackNetworkVrackNetwork } from '../models/IpLoadbalancingVrackNetworkVrackNetwork';
import { IpLoadbalancingVrackInformation } from '../models/IpLoadbalancingVrackInformation';
import { IpLoadbalancingBackendProbe } from '../models/IpLoadbalancingBackendProbe';
import { IpLoadbalancingNatIps } from '../models/IpLoadbalancingNatIps';
import { IpLoadbalancingBackendTcpBackendTcp } from '../models/IpLoadbalancingBackendTcpBackendTcp';
import { IpLoadbalancingOnMarkedDownEnum } from '../models/IpLoadbalancingOnMarkedDownEnum';
import { IpLoadbalancingDefinedFarm } from '../models/IpLoadbalancingDefinedFarm';
import { IpLoadbalancingFrontendHttpFrontendHttp } from '../models/IpLoadbalancingFrontendHttpFrontendHttp';
import { IpLoadbalancingBackendTcpCustomerServerBackendTCPServer } from '../models/IpLoadbalancingBackendTcpCustomerServerBackendTCPServer';
import { IpLoadbalancingDefinedRoute } from '../models/IpLoadbalancingDefinedRoute';
import { IpLoadbalancingRouteAvailableRule } from '../models/IpLoadbalancingRouteAvailableRule';
import { IpLoadbalancingVrackNetworkCreationRules } from '../models/IpLoadbalancingVrackNetworkCreationRules';
import { IpLoadbalancingDefinedFrontend } from '../models/IpLoadbalancingDefinedFrontend';
import { IpLoadbalancingStickinessHTTPEnum } from '../models/IpLoadbalancingStickinessHTTPEnum';
import { IpLoadbalancingBackendCustomerServerStatusEnum } from '../models/IpLoadbalancingBackendCustomerServerStatusEnum';
import { IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer } from '../models/IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer';
import { IpLoadbalancingTaskTask } from '../models/IpLoadbalancingTaskTask';
import { IpLoadbalancingProxyProtocolVersionEnum } from '../models/IpLoadbalancingProxyProtocolVersionEnum';
import { ServicesService } from '../models/ServicesService';
import { IpLoadbalancingSslSsl } from '../models/IpLoadbalancingSslSsl';
import { IpLoadbalancingBalanceTCPEnum } from '../models/IpLoadbalancingBalanceTCPEnum';
import { IpLoadbalancingRouteTcpRouteTcp } from '../models/IpLoadbalancingRouteTcpRouteTcp';
import { IpLoadBalancingIp } from '../models/IpLoadBalancingIp';
import { IpLoadbalancingQuotaHistoryQuotaHistory } from '../models/IpLoadbalancingQuotaHistoryQuotaHistory';
import { IpLoadBalancingTaskActionEnum } from '../models/IpLoadBalancingTaskActionEnum';
import { IpLoadbalancingRouteRuleRouteRule } from '../models/IpLoadbalancingRouteRuleRouteRule';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { IpLoadbalancingRouteRuleMatchesEnum } from '../models/IpLoadbalancingRouteRuleMatchesEnum';
import { IpLoadbalancingFrontendTcpFrontendTcp } from '../models/IpLoadbalancingFrontendTcpFrontendTcp';
import { IpLoadbalancingRouteHttpAction } from '../models/IpLoadbalancingRouteHttpAction';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { IpLoadbalancingInstancesState } from '../models/IpLoadbalancingInstancesState';
import { IpLoadbalancingStatus } from '../models/IpLoadbalancingStatus';
import { IpLoadbalancingRouteTcpAction } from '../models/IpLoadbalancingRouteTcpAction';
import { IpLoadbalancingFarmAvailableProbe } from '../models/IpLoadbalancingFarmAvailableProbe';
import OVHBase from '../ovh';

class IpLoadbalancingHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ipLoadbalancing');
  };

  /** List of zone available for an IP load balancing */
  listAvailableZones = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ipLoadbalancing/availableZones');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<IpLoadBalancingIp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: IpLoadBalancingIp): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}`, body);
  };

  /** Available farm probes for health checks */
  getAvailableFarmProbesByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingFarmAvailableProbe[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFarmProbes`);
  };

  /** Available farm types */
  getAvailableFarmTypeByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFarmType`);
  };

  /** Available frontend type */
  getAvailableFrontendTypeByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableFrontendType`);
  };

  /** Available route actions */
  getAvailableRouteActionsByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingRouteAvailableAction[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableRouteActions`);
  };

  /** Available route match rules */
  getAvailableRouteRulesByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingRouteAvailableRule[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/availableRouteRules`);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmTerminationByServiceName = (
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
  listDefinedFarmsByServiceName = (serviceName: string): Promise<IpLoadbalancingDefinedFarm[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedFarms`);
  };

  /** List of defined frontends, and whether they are HTTP, TCP or UDP */
  listDefinedFrontendsByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingDefinedFrontend[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedFrontends`);
  };

  /** List of defined routes, and whether they are HTTP or TCP */
  listDefinedRoutesByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingDefinedRoute[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/definedRoutes`);
  };

  /** List all failover ip routed to this IPLB */
  listFailoversByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/failover`);
  };

  /** Order a free certificate. We order and deliver it for you */
  postFreeCertificateByServiceName = (
    serviceName: string,
    body: { fqdn: string[] }
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/freeCertificate`, body);
  };

  /** HTTP Farm for this iplb */
  getHttpFarmByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm`);
  };

  /** Add a new HTTP Farm on your IP Load Balancing */
  addHttpFarmByServiceName = (
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
  deleteHttpFarmByServiceNameAndFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`);
  };

  /** Get this object properties */
  getHttpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendHttpBackendHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`);
  };

  /** Alter this object properties */
  updateHttpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendHttpBackendHttp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`, body);
  };

  /** HTTP Farm's Servers */
  getHttpFarmServerByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`);
  };

  /** Add a server to an HTTP Farm */
  addHttpFarmServerByServiceNameAndFarmId = (
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
  deleteHttpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getHttpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  updateHttpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getHttpFrontendByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/frontend`);
  };

  /** Add a new http frontend on your IP Load Balancing */
  addHttpFrontendByServiceName = (
    serviceName: string,
    body: {
      allowedSource?: string[];
      dedicatedIpfo?: string[];
      defaultFarmId?: number;
      defaultSslId?: number;
      deniedSource?: string[];
      disabled?: boolean;
      displayName?: string;
      hsts?: boolean;
      httpHeader?: string[];
      port: string;
      redirectLocation?: string;
      ssl?: boolean;
      zone: string;
    }
  ): Promise<IpLoadbalancingFrontendHttpFrontendHttp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/http/frontend`, body);
  };

  /** Delete an HTTP frontend */
  deleteHttpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`
    );
  };

  /** Get this object properties */
  getHttpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendHttpFrontendHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  updateHttpFrontendByServiceNameAndFrontendId = (
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
  getHttpRouteByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route`);
  };

  /** Add a new HTTP route to your frontend */
  addHttpRouteByServiceName = (
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
  deleteHttpRouteByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`);
  };

  /** Get this object properties */
  getHttpRouteByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteHttpRouteHttp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`);
  };

  /** Alter this object properties */
  updateHttpRouteByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string,
    body: IpLoadbalancingRouteHttpRouteHttp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/http/route/${routeId}`, body);
  };

  /** HTTP routes for this iplb */
  getHttpRouteRuleByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`);
  };

  /** Add a new rule to your route */
  addHttpRouteRuleByServiceNameAndRouteId = (
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
  deleteHttpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  getHttpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  updateHttpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  getInstancesStateByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingInstancesState[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/instancesState`);
  };

  /** Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one */
  getNatIpByServiceName = (serviceName: string): Promise<IpLoadbalancingNatIps[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/natIp`);
  };

  /** List the pending changes on your Load Balancer configuration, per zone */
  listPendingChangesByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingPendingChanges[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/pendingChanges`);
  };

  /** Available quota informations for current billing period per zone */
  getQuotaByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quota`);
  };

  /** Get this object properties */
  getQuotaByServiceNameAndZone = (
    serviceName: string,
    zone: string
  ): Promise<IpLoadbalancingQuotaQuota> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quota/${zone}`);
  };

  /** Alter this object properties */
  updateQuotaByServiceNameAndZone = (
    serviceName: string,
    zone: string,
    body: IpLoadbalancingQuotaQuota
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/quota/${zone}`, body);
  };

  /** Quota history informations, per month */
  getQuotaHistoryByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quotaHistory`);
  };

  /** Get this object properties */
  getQuotaHistoryByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<IpLoadbalancingQuotaHistoryQuotaHistory> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/quotaHistory/${id}`);
  };

  /** Apply the configuration to your iplb */
  postRefreshByServiceName = (
    serviceName: string,
    body: { zone?: string }
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/refresh`, body);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/serviceInfos`, body);
  };

  /** Ssl for this iplb */
  getSslByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/ssl`);
  };

  /** Add a new custom SSL certificate on your IP Load Balancing */
  addSslByServiceName = (
    serviceName: string,
    body: { certificate: string; chain?: string; displayName?: string; key: string }
  ): Promise<IpLoadbalancingSslSsl> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/ssl`, body);
  };

  /** Delete a custom SSL certificate */
  deleteSslByServiceNameAndId = (id: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/ssl/${id}`);
  };

  /** Get this object properties */
  getSslByServiceNameAndId = (id: number, serviceName: string): Promise<IpLoadbalancingSslSsl> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/ssl/${id}`);
  };

  /** Alter this object properties */
  updateSslByServiceNameAndId = (
    id: number,
    serviceName: string,
    body: IpLoadbalancingSslSsl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/ssl/${id}`, body);
  };

  /** Get the global status of your IPLB */
  getStatusByServiceName = (serviceName: string): Promise<IpLoadbalancingStatus> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/status`);
  };

  /** Task for this iplb */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/task/${id}`);
  };

  /** TCP Farm for this iplb */
  getTcpFarmByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm`);
  };

  /** Add a new TCP Farm on your IP Load Balancing */
  addTcpFarmByServiceName = (
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
  deleteTcpFarmByServiceNameAndFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`);
  };

  /** Get this object properties */
  getTcpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendTcpBackendTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`);
  };

  /** Alter this object properties */
  updateTcpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendTcpBackendTcp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`, body);
  };

  /** TCP Farm's Servers */
  getTcpFarmServerByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`);
  };

  /** Add a server to a TCP Farm */
  addTcpFarmServerByServiceNameAndFarmId = (
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
  deleteTcpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getTcpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  updateTcpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getTcpFrontendByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/frontend`);
  };

  /** Add a new TCP frontend on your IP Load Balancing */
  addTcpFrontendByServiceName = (
    serviceName: string,
    body: {
      allowedSource?: string[];
      dedicatedIpfo?: string[];
      defaultFarmId?: number;
      defaultSslId?: number;
      deniedSource?: string[];
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
  deleteTcpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`);
  };

  /** Get this object properties */
  getTcpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendTcpFrontendTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  updateTcpFrontendByServiceNameAndFrontendId = (
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
  getTcpRouteByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route`);
  };

  /** Add a new TCP route to your frontend */
  addTcpRouteByServiceName = (
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
  deleteTcpRouteByServiceNameAndRouteId = (routeId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`);
  };

  /** Get this object properties */
  getTcpRouteByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<IpLoadbalancingRouteTcpRouteTcp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`);
  };

  /** Alter this object properties */
  updateTcpRouteByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string,
    body: IpLoadbalancingRouteTcpRouteTcp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`, body);
  };

  /** HTTP routes for this iplb */
  getTcpRouteRuleByServiceNameAndRouteId = (
    routeId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`);
  };

  /** Add a new rule to your route */
  addTcpRouteRuleByServiceNameAndRouteId = (
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
  deleteTcpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  getTcpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  updateTcpRouteRuleByServiceNameAndRouteIdAndRuleId = (
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
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/terminate`);
  };

  /** UDP Farm for this iplb */
  getUdpFarmByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm`);
  };

  /** Add a new UDP Farm on your IP Load Balancing */
  addUdpFarmByServiceName = (
    serviceName: string,
    body: { displayName?: string; port: number; vrackNetworkId?: number; zone: string }
  ): Promise<IpLoadbalancingBackendUdpBackendUdp> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/udp/farm`, body);
  };

  /** Delete an UDP Farm */
  deleteUdpFarmByServiceNameAndFarmId = (farmId: number, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`);
  };

  /** Get this object properties */
  getUdpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<IpLoadbalancingBackendUdpBackendUdp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`);
  };

  /** Alter this object properties */
  updateUdpFarmByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string,
    body: IpLoadbalancingBackendUdpBackendUdp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`, body);
  };

  /** UDP Farm's Servers */
  getUdpFarmServerByServiceNameAndFarmId = (
    farmId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`);
  };

  /** Add a server to an UDP Farm */
  addUdpFarmServerByServiceNameAndFarmId = (
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
  deleteUdpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getUdpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  updateUdpFarmServerByServiceNameAndFarmIdAndServerId = (
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
  getUdpFrontendByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/frontend`);
  };

  /** Add a new UDP frontend on your IP Load Balancing */
  addUdpFrontendByServiceName = (
    serviceName: string,
    body: {
      dedicatedIpfo?: string[];
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
  deleteUdpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`);
  };

  /** Get this object properties */
  getUdpFrontendByServiceNameAndFrontendId = (
    frontendId: number,
    serviceName: string
  ): Promise<IpLoadbalancingFrontendUdpFrontendUdp> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`);
  };

  /** Alter this object properties */
  updateUdpFrontendByServiceNameAndFrontendId = (
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
  getVrackNetworkByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/network`);
  };

  /** Add a description of a private network in the attached vRack */
  addVrackNetworkByServiceName = (
    serviceName: string,
    body: { displayName?: string; farmId?: number[]; natIp: string; subnet: string; vlan?: number }
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/vrack/network`, body);
  };

  /** Delete this description of a private network in the vRack. It must not be used by any farm server */
  deleteVrackNetworkByServiceNameAndVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
    );
  };

  /** Get this object properties */
  getVrackNetworkByServiceNameAndVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request(
      'GET',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
    );
  };

  /** Alter this object properties */
  updateVrackNetworkByServiceNameAndVrackNetworkId = (
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
  updateVrackNetworkFarmIdByServiceNameAndVrackNetworkId = (
    serviceName: string,
    vrackNetworkId: number,
    body: { farmId: number[] }
  ): Promise<IpLoadbalancingVrackNetworkVrackNetwork> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}/updateFarmId`,
      body
    );
  };

  /** Rules to create a network attached to a vrack */
  getVrackNetworkCreationRulesByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingVrackNetworkCreationRules> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/networkCreationRules`);
  };

  /** Information about vRack for your Load Balancer */
  getVrackStatusByServiceName = (serviceName: string): Promise<IpLoadbalancingVrackInformation> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/vrack/status`);
  };

  /** Zone for this iplb */
  getZoneByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/zone`);
  };

  /** Get this object properties */
  getZoneByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<IpLoadbalancingZoneZone> => {
    return this.ovh.request('GET', `/ipLoadbalancing/${serviceName}/zone/${name}`);
  };

  /** Cancel the termination request of your service zone option */
  postZoneCancelTerminationByServiceNameAndName = (
    name: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/ipLoadbalancing/${serviceName}/zone/${name}/cancelTermination`
    );
  };

  /** Terminate your service zone option */
  postZoneTerminateByServiceNameAndName = (name: string, serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/ipLoadbalancing/${serviceName}/zone/${name}/terminate`);
  };
}

export { IpLoadbalancingHandler };
