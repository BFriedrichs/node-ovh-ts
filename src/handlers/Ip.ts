/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpBlockedIpStateEnum } from '../models/IpBlockedIpStateEnum';
import { IpMitigationStatsScaleEnum } from '../models/IpMitigationStatsScaleEnum';
import { IpLoadBalancingBackendIp } from '../models/IpLoadBalancingBackendIp';
import { IpIpMigrationToken } from '../models/IpIpMigrationToken';
import { IpArpStateEnum } from '../models/IpArpStateEnum';
import { IpFirewallActionEnum } from '../models/IpFirewallActionEnum';
import { IpReverseIp } from '../models/IpReverseIp';
import { IpMitigationStats } from '../models/IpMitigationStats';
import { IpLoadBalancingTask } from '../models/IpLoadBalancingTask';
import { IpFirewallNetworkRule } from '../models/IpFirewallNetworkRule';
import { IpLoadbalancingTaskTask } from '../models/IpLoadbalancingTaskTask';
import { IpRipeInfos } from '../models/IpRipeInfos';
import { IpSpamIp } from '../models/IpSpamIp';
import { IpCampus } from '../models/IpCampus';
import { IpLoadBalancingIp } from '../models/IpLoadBalancingIp';
import { IpArpBlockedIp } from '../models/IpArpBlockedIp';
import { IpReverseDelegation } from '../models/IpReverseDelegation';
import { IpGameMitigationRuleProtocolEnum } from '../models/IpGameMitigationRuleProtocolEnum';
import { IpFirewallRuleStateEnum } from '../models/IpFirewallRuleStateEnum';
import { IpLoadBalancingZoneEnum } from '../models/IpLoadBalancingZoneEnum';
import { IpMitigationProfileAutoMitigationTimeOutEnum } from '../models/IpMitigationProfileAutoMitigationTimeOutEnum';
import { IpAntiphishingStateEnum } from '../models/IpAntiphishingStateEnum';
import { IpGameMitigation } from '../models/IpGameMitigation';
import { IpLoadBalancingStickinessEnum } from '../models/IpLoadBalancingStickinessEnum';
import { IpLoadBalancingBackendProbeEnum } from '../models/IpLoadBalancingBackendProbeEnum';
import { IpBlockedIp } from '../models/IpBlockedIp';
import { IpSpamStateEnum } from '../models/IpSpamStateEnum';
import { IpMitigationDetailedStats } from '../models/IpMitigationDetailedStats';
import { IpServiceIp } from '../models/IpServiceIp';
import { ServicesService } from '../models/ServicesService';
import { IpSpamStats } from '../models/IpSpamStats';
import { IpMitigationProfile } from '../models/IpMitigationProfile';
import { IpTaskStatusEnum } from '../models/IpTaskStatusEnum';
import { IpIpTypeEnum } from '../models/IpIpTypeEnum';
import { IpDestinations } from '../models/IpDestinations';
import { IpFirewallProtocolEnum } from '../models/IpFirewallProtocolEnum';
import { IpTaskFunctionEnum } from '../models/IpTaskFunctionEnum';
import { IpFirewallIp } from '../models/IpFirewallIp';
import { IpIpVersionEnum } from '../models/IpIpVersionEnum';
import { IpMitigationIp } from '../models/IpMitigationIp';
import { IpMitigationStateEnum } from '../models/IpMitigationStateEnum';
import { IpIp } from '../models/IpIp';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { IpFirewallOptionTCP } from '../models/IpFirewallOptionTCP';
import { IpGameMitigationRule } from '../models/IpGameMitigationRule';
import { IpFirewallSequenceRangeEnum } from '../models/IpFirewallSequenceRangeEnum';
import { IpFirewallStateEnum } from '../models/IpFirewallStateEnum';
import { IpAntiphishing } from '../models/IpAntiphishing';
import { IpLoadBalancingIpLoadBalancingPort } from '../models/IpLoadBalancingIpLoadBalancingPort';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { IpIpTask } from '../models/IpIpTask';
import { IpLoadBalancingAdditionalPortEnum } from '../models/IpLoadBalancingAdditionalPortEnum';
import OVHBase from '../ovh';

class IpHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Your OVH IPs */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/ip');
  };

  /** Get IP campuses */
  getCampus = (): Promise<IpCampus> => {
    return this.ovh.request('GET', '/ip/campus');
  };

  /** List available services */
  getLoadBalancing = (): Promise<string> => {
    return this.ovh.request('GET', '/ip/loadBalancing');
  };

  /** Get this object properties */
  getLoadBalancingServiceName = (serviceName: string): Promise<IpLoadBalancingIp> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}`);
  };

  /** List of backends you can attach to your IP */
  getLoadBalancingServiceNameAllowedBackends = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/allowedBackends`);
  };

  /** Backends for this IP load balancing */
  getLoadBalancingServiceNameBackend = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/backend`);
  };

  /** Add a new backend on your IP load balancing */
  postLoadBalancingServiceNameBackend = (
    serviceName: string,
    body: { ipBackend: string; probe: IpLoadBalancingBackendProbeEnum; weight?: number }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/backend`, body);
  };

  /** Remove a backend IP */
  deleteLoadBalancingServiceNameBackendBackend = (
    backend: string,
    serviceName: string
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('DELETE', `/ip/loadBalancing/${serviceName}/backend/${backend}`);
  };

  /** Get this object properties */
  getLoadBalancingServiceNameBackendBackend = (
    backend: string,
    serviceName: string
  ): Promise<IpLoadBalancingBackendIp> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/backend/${backend}`);
  };

  /** Alter this object properties */
  putLoadBalancingServiceNameBackendBackend = (
    backend: string,
    serviceName: string,
    body: IpLoadBalancingBackendIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/loadBalancing/${serviceName}/backend/${backend}`, body);
  };

  /** Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail */
  postLoadBalancingServiceNameBackendBackendBackupState = (
    backend: string,
    serviceName: string,
    body: { backupStateSet: boolean; mainBackendIp?: string }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request(
      'POST',
      `/ip/loadBalancing/${serviceName}/backend/${backend}/backupState`,
      body
    );
  };

  /** Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them. */
  postLoadBalancingServiceNameBackendBackendSetWeight = (
    backend: string,
    serviceName: string,
    body: { weight: number }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request(
      'POST',
      `/ip/loadBalancing/${serviceName}/backend/${backend}/setWeight`,
      body
    );
  };

  /** Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url. */
  postLoadBalancingServiceNameImportCustomSsl = (
    serviceName: string,
    body: { certificate: string; chain?: string; key: string }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/importCustomSsl`, body);
  };

  /** Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one. */
  getLoadBalancingServiceNameInternalNatIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/internalNatIp`);
  };

  /** Get all srcPort */
  getLoadBalancingServiceNamePortsRedirection = (
    serviceName: string
  ): Promise<IpLoadBalancingAdditionalPortEnum> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/portsRedirection`);
  };

  /** Add a new port redirection */
  postLoadBalancingServiceNamePortsRedirection = (
    serviceName: string,
    body: IpLoadBalancingIpLoadBalancingPort
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/portsRedirection`, body);
  };

  /** Delete a port redirection */
  deleteLoadBalancingServiceNamePortsRedirectionSrcPort = (
    serviceName: string,
    srcPort: IpLoadBalancingAdditionalPortEnum
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request(
      'DELETE',
      `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`
    );
  };

  /** Get the value for the given srcPort */
  getLoadBalancingServiceNamePortsRedirectionSrcPort = (
    serviceName: string,
    srcPort: IpLoadBalancingAdditionalPortEnum
  ): Promise<IpLoadBalancingIpLoadBalancingPort> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`);
  };

  /** Ip subnet used to send probes to your backends */
  getLoadBalancingServiceNameProbeIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/probeIp`);
  };

  /** Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc) */
  postLoadBalancingServiceNameRestoreSsl = (serviceName: string): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/restoreSsl`);
  };

  /** Get this object properties */
  getLoadBalancingServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putLoadBalancingServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/loadBalancing/${serviceName}/serviceInfos`, body);
  };

  /** Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness */
  postLoadBalancingServiceNameStickiness = (
    serviceName: string,
    body: { stickiness: IpLoadBalancingStickinessEnum }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/stickiness`, body);
  };

  /** Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection. */
  postLoadBalancingServiceNameSwitchToIplbNextGenerationApi = (
    serviceName: string
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request(
      'POST',
      `/ip/loadBalancing/${serviceName}/switchToIplbNextGenerationApi`
    );
  };

  /** Task list associated with this IP */
  getLoadBalancingServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/task`);
  };

  /** Get this object properties */
  getLoadBalancingServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/task/${taskId}`);
  };

  /** List available services */
  getService = (): Promise<string> => {
    return this.ovh.request('GET', '/ip/service');
  };

  /** Get this object properties */
  getServiceServiceName = (serviceName: string): Promise<IpServiceIp> => {
    return this.ovh.request('GET', `/ip/service/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceServiceName = (serviceName: string, body: IpServiceIp): Promise<void> => {
    return this.ovh.request('PUT', `/ip/service/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postServiceServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/ip/service/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postServiceServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/ip/service/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getServiceServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ip/service/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/service/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postServiceServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ip/service/${serviceName}/terminate`);
  };

  /** Get this object properties */
  getIp = (ip: string): Promise<IpIp> => {
    return this.ovh.request('GET', `/ip/${ip}`);
  };

  /** Alter this object properties */
  putIp = (ip: string, body: IpIp): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}`, body);
  };

  /** Anti-Hack blocked IP */
  getIpAntihack = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/antihack`);
  };

  /** Get this object properties */
  getIpAntihackIpBlocked = (ip: string, ipBlocked: string): Promise<IpBlockedIp> => {
    return this.ovh.request('GET', `/ip/${ip}/antihack/${ipBlocked}`);
  };

  /** Unblock this IP */
  postIpAntihackIpBlockedUnblock = (ip: string, ipBlocked: string): Promise<void> => {
    return this.ovh.request('POST', `/ip/${ip}/antihack/${ipBlocked}/unblock`);
  };

  /** ARP blocked IP */
  getIpArp = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/arp`);
  };

  /** Get this object properties */
  getIpArpIpBlocked = (ip: string, ipBlocked: string): Promise<IpArpBlockedIp> => {
    return this.ovh.request('GET', `/ip/${ip}/arp/${ipBlocked}`);
  };

  /** Unblock this IP */
  postIpArpIpBlockedUnblock = (ip: string, ipBlocked: string): Promise<void> => {
    return this.ovh.request('POST', `/ip/${ip}/arp/${ipBlocked}/unblock`);
  };

  /** Change organisation of this IP */
  postIpChangeOrg = (ip: string, body: { organisation: string }): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/changeOrg`, body);
  };

  /** Reverse delegation on IPv6 subnet */
  getIpDelegation = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/delegation`);
  };

  /** Add target for reverse delegation on IPv6 subnet */
  postIpDelegation = (ip: string, body: { target: string }): Promise<IpReverseDelegation> => {
    return this.ovh.request('POST', `/ip/${ip}/delegation`, body);
  };

  /** Delete a target for reverse delegation on IPv6 subnet */
  deleteIpDelegationTarget = (ip: string, target: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/delegation/${target}`);
  };

  /** Get this object properties */
  getIpDelegationTarget = (ip: string, target: string): Promise<IpReverseDelegation> => {
    return this.ovh.request('GET', `/ip/${ip}/delegation/${target}`);
  };

  /** Ip under firewall */
  getIpFirewall = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall`);
  };

  /** AntiDDOS option. Add new IP on firewall */
  postIpFirewall = (ip: string, body: { ipOnFirewall: string }): Promise<IpFirewallIp> => {
    return this.ovh.request('POST', `/ip/${ip}/firewall`, body);
  };

  /** AntiDDOS option. Delete IP and rules from firewall */
  deleteIpFirewallIpOnFirewall = (ip: string, ipOnFirewall: string): Promise<string> => {
    return this.ovh.request('DELETE', `/ip/${ip}/firewall/${ipOnFirewall}`);
  };

  /** Get this object properties */
  getIpFirewallIpOnFirewall = (ip: string, ipOnFirewall: string): Promise<IpFirewallIp> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}`);
  };

  /** Alter this object properties */
  putIpFirewallIpOnFirewall = (
    ip: string,
    ipOnFirewall: string,
    body: IpFirewallIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/firewall/${ipOnFirewall}`, body);
  };

  /** Rules for this IP */
  getIpFirewallIpOnFirewallRule = (ip: string, ipOnFirewall: string): Promise<number> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}/rule`);
  };

  /** AntiDDOS option. Add new rule on your IP */
  postIpFirewallIpOnFirewallRule = (
    ip: string,
    ipOnFirewall: string,
    body: {
      action: IpFirewallActionEnum;
      destinationPort?: number;
      protocol: IpFirewallProtocolEnum;
      sequence: IpFirewallSequenceRangeEnum;
      source?: string;
      sourcePort?: number;
      tcpOption?: IpFirewallOptionTCP;
    }
  ): Promise<IpFirewallNetworkRule> => {
    return this.ovh.request('POST', `/ip/${ip}/firewall/${ipOnFirewall}/rule`, body);
  };

  /** AntiDDOS option. Delete rule */
  deleteIpFirewallIpOnFirewallRuleSequence = (
    ip: string,
    ipOnFirewall: string,
    sequence: number
  ): Promise<IpFirewallNetworkRule> => {
    return this.ovh.request('DELETE', `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`);
  };

  /** Get this object properties */
  getIpFirewallIpOnFirewallRuleSequence = (
    ip: string,
    ipOnFirewall: string,
    sequence: number
  ): Promise<IpFirewallNetworkRule> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`);
  };

  /** Ip under game anti-ddos */
  getIpGame = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/game`);
  };

  /** Get this object properties */
  getIpGameIpOnGame = (ip: string, ipOnGame: string): Promise<IpGameMitigation> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}`);
  };

  /** Alter this object properties */
  putIpGameIpOnGame = (ip: string, ipOnGame: string, body: IpGameMitigation): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/game/${ipOnGame}`, body);
  };

  /** IDs of rules configured for this IP */
  getIpGameIpOnGameRule = (ip: string, ipOnGame: string): Promise<number> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}/rule`);
  };

  /** Add new rule on your IP */
  postIpGameIpOnGameRule = (
    ip: string,
    ipOnGame: string,
    body: { ports: number; protocol: IpGameMitigationRuleProtocolEnum }
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('POST', `/ip/${ip}/game/${ipOnGame}/rule`, body);
  };

  /** Delete rule */
  deleteIpGameIpOnGameRuleId = (
    id: number,
    ip: string,
    ipOnGame: string
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('DELETE', `/ip/${ip}/game/${ipOnGame}/rule/${id}`);
  };

  /** Get this object properties */
  getIpGameIpOnGameRuleId = (
    id: number,
    ip: string,
    ipOnGame: string
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}/rule/${id}`);
  };

  /** Cloud Linux licenses associated to this IP */
  getIpLicenseCloudLinux = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/cloudLinux`);
  };

  /** Cpanel licenses associated to this IP */
  getIpLicenseCpanel = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/cpanel`);
  };

  /** DirectAdmin licenses associated to this IP */
  getIpLicenseDirectadmin = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/directadmin`);
  };

  /** Plesk licenses associated to this IP */
  getIpLicensePlesk = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/plesk`);
  };

  /** SQL Server licenses associated to this IP */
  getIpLicenseSqlserver = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/sqlserver`);
  };

  /** Virtuozzo licenses associated to this IP */
  getIpLicenseVirtuozzo = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/virtuozzo`);
  };

  /** Windows licenses associated to this IP */
  getIpLicenseWindows = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/windows`);
  };

  /** WorkLight licenses associated to this IP */
  getIpLicenseWorklight = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/license/worklight`);
  };

  /** Get this object properties */
  getIpMigrationToken = (ip: string): Promise<IpIpMigrationToken> => {
    return this.ovh.request('GET', `/ip/${ip}/migrationToken`);
  };

  /** Generate a migration token */
  postIpMigrationToken = (
    ip: string,
    body: { customerId: string }
  ): Promise<IpIpMigrationToken> => {
    return this.ovh.request('POST', `/ip/${ip}/migrationToken`, body);
  };

  /** Ip under mitigation */
  getIpMitigation = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation`);
  };

  /** AntiDDOS option. Add new IP on permanent mitigation */
  postIpMitigation = (ip: string, body: { ipOnMitigation: string }): Promise<IpMitigationIp> => {
    return this.ovh.request('POST', `/ip/${ip}/mitigation`, body);
  };

  /** AntiDDOS option. Delete IP from mitigation */
  deleteIpMitigationIpOnMitigation = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationIp> => {
    return this.ovh.request('DELETE', `/ip/${ip}/mitigation/${ipOnMitigation}`);
  };

  /** Get this object properties */
  getIpMitigationIpOnMitigation = (ip: string, ipOnMitigation: string): Promise<IpMitigationIp> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}`);
  };

  /** Alter this object properties */
  putIpMitigationIpOnMitigation = (
    ip: string,
    ipOnMitigation: string,
    body: IpMitigationIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/mitigation/${ipOnMitigation}`, body);
  };

  /** AntiDDOS option. Get statistics about your traffic in and out during this mitigation */
  getIpMitigationIpOnMitigationStats = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationStats> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}/stats`);
  };

  /** AntiDDOS option. Get top stream on your ip on a specific timestamp */
  getIpMitigationIpOnMitigationTopStream = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationDetailedStats> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}/topStream`);
  };

  /** Manage mitigation profile on your IPs */
  getIpMitigationProfiles = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigationProfiles`);
  };

  /** Create new profile for one of your ip */
  postIpMitigationProfiles = (
    ip: string,
    body: {
      autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOutEnum;
      ipMitigationProfile: string;
    }
  ): Promise<IpMitigationProfile> => {
    return this.ovh.request('POST', `/ip/${ip}/mitigationProfiles`, body);
  };

  /** Delete mitigation profile */
  deleteIpMitigationProfilesIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`);
  };

  /** Get this object properties */
  getIpMitigationProfilesIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string
  ): Promise<IpMitigationProfile> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`);
  };

  /** Alter this object properties */
  putIpMitigationProfilesIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string,
    body: IpMitigationProfile
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`, body);
  };

  /** List services available as a destination */
  getIpMove = (ip: string): Promise<IpDestinations> => {
    return this.ovh.request('GET', `/ip/${ip}/move`);
  };

  /** Move this IP to another service */
  postIpMove = (ip: string, body: { nexthop?: string; to: string }): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/move`, body);
  };

  /** Park this IP */
  postIpPark = (ip: string): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/park`);
  };

  /** Ip under anti-phishing */
  getIpPhishing = (ip: string): Promise<number> => {
    return this.ovh.request('GET', `/ip/${ip}/phishing`);
  };

  /** Get this object properties */
  getIpPhishingId = (id: number, ip: string): Promise<IpAntiphishing> => {
    return this.ovh.request('GET', `/ip/${ip}/phishing/${id}`);
  };

  /** Reverse on your ip */
  getIpReverse = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/reverse`);
  };

  /** Add reverse on an ip */
  postIpReverse = (
    ip: string,
    body: { ipReverse: string; reverse: string }
  ): Promise<IpReverseIp> => {
    return this.ovh.request('POST', `/ip/${ip}/reverse`, body);
  };

  /** Delete a reverse on one IP */
  deleteIpReverseIpReverse = (ip: string, ipReverse: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/reverse/${ipReverse}`);
  };

  /** Get this object properties */
  getIpReverseIpReverse = (ip: string, ipReverse: string): Promise<IpReverseIp> => {
    return this.ovh.request('GET', `/ip/${ip}/reverse/${ipReverse}`);
  };

  /** Get this object properties */
  getIpRipe = (ip: string): Promise<IpRipeInfos> => {
    return this.ovh.request('GET', `/ip/${ip}/ripe`);
  };

  /** Alter this object properties */
  putIpRipe = (ip: string, body: IpRipeInfos): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/ripe`, body);
  };

  /** Ip spamming */
  getIpSpam = (ip: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/${ip}/spam`);
  };

  /** Get this object properties */
  getIpSpamIpSpamming = (ip: string, ipSpamming: string): Promise<IpSpamIp> => {
    return this.ovh.request('GET', `/ip/${ip}/spam/${ipSpamming}`);
  };

  /** Get statistics about the email traffic */
  getIpSpamIpSpammingStats = (ip: string, ipSpamming: string): Promise<IpSpamStats> => {
    return this.ovh.request('GET', `/ip/${ip}/spam/${ipSpamming}/stats`);
  };

  /** Release the ip from anti-spam system */
  postIpSpamIpSpammingUnblock = (ip: string, ipSpamming: string): Promise<IpSpamIp> => {
    return this.ovh.request('POST', `/ip/${ip}/spam/${ipSpamming}/unblock`);
  };

  /** IP tasks */
  getIpTask = (ip: string): Promise<number> => {
    return this.ovh.request('GET', `/ip/${ip}/task`);
  };

  /** Get this object properties */
  getIpTaskTaskId = (ip: string, taskId: number): Promise<IpIpTask> => {
    return this.ovh.request('GET', `/ip/${ip}/task/${taskId}`);
  };

  /** Delete a failover IP */
  postIpTerminate = (ip: string): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/terminate`);
  };
}

export default IpHandler;
