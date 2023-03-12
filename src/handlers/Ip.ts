/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingZoneEnum } from '../models/IpLoadBalancingZoneEnum';
import { IpCampus } from '../models/IpCampus';
import { IpGameMitigationRule } from '../models/IpGameMitigationRule';
import { ServicesService } from '../models/ServicesService';
import { IpServiceIp } from '../models/IpServiceIp';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { IpMitigationStatsScaleEnum } from '../models/IpMitigationStatsScaleEnum';
import { IpReverseIp } from '../models/IpReverseIp';
import { IpSpamStats } from '../models/IpSpamStats';
import { IpFirewallRuleStateEnum } from '../models/IpFirewallRuleStateEnum';
import { IpLoadBalancingIpLoadBalancingPort } from '../models/IpLoadBalancingIpLoadBalancingPort';
import { IpMitigationStateEnum } from '../models/IpMitigationStateEnum';
import { IpFirewallSequenceRangeEnum } from '../models/IpFirewallSequenceRangeEnum';
import { IpMitigationIp } from '../models/IpMitigationIp';
import { IpIpVersionEnum } from '../models/IpIpVersionEnum';
import { IpIpTypeEnum } from '../models/IpIpTypeEnum';
import { IpFirewallNetworkRule } from '../models/IpFirewallNetworkRule';
import { IpArpStateEnum } from '../models/IpArpStateEnum';
import { IpMitigationProfile } from '../models/IpMitigationProfile';
import { IpLoadBalancingIp } from '../models/IpLoadBalancingIp';
import { IpMitigationStats } from '../models/IpMitigationStats';
import { IpFirewallActionEnum } from '../models/IpFirewallActionEnum';
import { IpDestinations } from '../models/IpDestinations';
import { IpRipeInfos } from '../models/IpRipeInfos';
import { IpSpamIp } from '../models/IpSpamIp';
import { IpLoadBalancingBackendProbeEnum } from '../models/IpLoadBalancingBackendProbeEnum';
import { IpLoadBalancingBackendIp } from '../models/IpLoadBalancingBackendIp';
import { IpMitigationProfileAutoMitigationTimeOutEnum } from '../models/IpMitigationProfileAutoMitigationTimeOutEnum';
import { IpSpamStateEnum } from '../models/IpSpamStateEnum';
import { IpLoadBalancingStickinessEnum } from '../models/IpLoadBalancingStickinessEnum';
import { IpTaskFunctionEnum } from '../models/IpTaskFunctionEnum';
import { IpIp } from '../models/IpIp';
import { IpLoadBalancingAdditionalPortEnum } from '../models/IpLoadBalancingAdditionalPortEnum';
import { IpGameMitigation } from '../models/IpGameMitigation';
import { IpLoadBalancingTask } from '../models/IpLoadBalancingTask';
import { IpIpMigrationToken } from '../models/IpIpMigrationToken';
import { IpAntiphishing } from '../models/IpAntiphishing';
import { IpAntiphishingStateEnum } from '../models/IpAntiphishingStateEnum';
import { IpReverseDelegation } from '../models/IpReverseDelegation';
import { IpFirewallIp } from '../models/IpFirewallIp';
import { IpTaskStatusEnum } from '../models/IpTaskStatusEnum';
import { IpMitigationDetailedStats } from '../models/IpMitigationDetailedStats';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { IpLoadbalancingTaskTask } from '../models/IpLoadbalancingTaskTask';
import { IpArpBlockedIp } from '../models/IpArpBlockedIp';
import { IpGameMitigationRuleProtocolEnum } from '../models/IpGameMitigationRuleProtocolEnum';
import { IpFirewallOptionTCP } from '../models/IpFirewallOptionTCP';
import { IpBlockedIp } from '../models/IpBlockedIp';
import { IpBlockedIpStateEnum } from '../models/IpBlockedIpStateEnum';
import { IpFirewallProtocolEnum } from '../models/IpFirewallProtocolEnum';
import { IpFirewallStateEnum } from '../models/IpFirewallStateEnum';
import { IpIpTask } from '../models/IpIpTask';
import OVHBase from '../ovh';

class IpHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Your OVH IPs */
  get = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ip');
  };

  /** Get IP campuses */
  getCampus = (): Promise<IpCampus[]> => {
    return this.ovh.request('GET', '/ip/campus');
  };

  /** List available services */
  listLoadBalancing = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ip/loadBalancing');
  };

  /** Get this object properties */
  getLoadBalancingByServiceName = (serviceName: string): Promise<IpLoadBalancingIp> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}`);
  };

  /** List of backends you can attach to your IP */
  listLoadBalancingAllowedBackendsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/allowedBackends`);
  };

  /** Backends for this IP load balancing */
  getLoadBalancingBackendByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/backend`);
  };

  /** Add a new backend on your IP load balancing */
  addLoadBalancingBackendByServiceName = (
    serviceName: string,
    body: { ipBackend: string; probe: IpLoadBalancingBackendProbeEnum; weight?: number }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/backend`, body);
  };

  /** Remove a backend IP */
  deleteLoadBalancingBackendByServiceNameAndBackend = (
    backend: string,
    serviceName: string
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('DELETE', `/ip/loadBalancing/${serviceName}/backend/${backend}`);
  };

  /** Get this object properties */
  getLoadBalancingBackendByServiceNameAndBackend = (
    backend: string,
    serviceName: string
  ): Promise<IpLoadBalancingBackendIp> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/backend/${backend}`);
  };

  /** Alter this object properties */
  updateLoadBalancingBackendByServiceNameAndBackend = (
    backend: string,
    serviceName: string,
    body: IpLoadBalancingBackendIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/loadBalancing/${serviceName}/backend/${backend}`, body);
  };

  /** Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail */
  postLoadBalancingBackendBackupStateByServiceNameAndBackend = (
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
  postLoadBalancingBackendSetWeightByServiceNameAndBackend = (
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
  postLoadBalancingImportCustomSslByServiceName = (
    serviceName: string,
    body: { certificate: string; chain?: string; key: string }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/importCustomSsl`, body);
  };

  /** Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one. */
  getLoadBalancingInternalNatIpByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/internalNatIp`);
  };

  /** Get all srcPort */
  getLoadBalancingPortsRedirectionByServiceName = (
    serviceName: string
  ): Promise<IpLoadBalancingAdditionalPortEnum[]> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/portsRedirection`);
  };

  /** Add a new port redirection */
  addLoadBalancingPortsRedirectionByServiceName = (
    serviceName: string,
    body: IpLoadBalancingIpLoadBalancingPort
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/portsRedirection`, body);
  };

  /** Delete a port redirection */
  deleteLoadBalancingPortsRedirectionByServiceNameAndSrcPort = (
    serviceName: string,
    srcPort: IpLoadBalancingAdditionalPortEnum
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request(
      'DELETE',
      `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`
    );
  };

  /** Get the value for the given srcPort */
  getLoadBalancingPortsRedirectionByServiceNameAndSrcPort = (
    serviceName: string,
    srcPort: IpLoadBalancingAdditionalPortEnum
  ): Promise<IpLoadBalancingIpLoadBalancingPort> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`);
  };

  /** Ip subnet used to send probes to your backends */
  getLoadBalancingProbeIpByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/probeIp`);
  };

  /** Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc) */
  postLoadBalancingRestoreSslByServiceName = (
    serviceName: string
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/restoreSsl`);
  };

  /** Get this object properties */
  getLoadBalancingServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateLoadBalancingServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/loadBalancing/${serviceName}/serviceInfos`, body);
  };

  /** Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness */
  postLoadBalancingStickinessByServiceName = (
    serviceName: string,
    body: { stickiness: IpLoadBalancingStickinessEnum }
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('POST', `/ip/loadBalancing/${serviceName}/stickiness`, body);
  };

  /** Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection. */
  postLoadBalancingSwitchToIplbNextGenerationApiByServiceName = (
    serviceName: string
  ): Promise<IpLoadbalancingTaskTask> => {
    return this.ovh.request(
      'POST',
      `/ip/loadBalancing/${serviceName}/switchToIplbNextGenerationApi`
    );
  };

  /** Task list associated with this IP */
  getLoadBalancingTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/task`);
  };

  /** Get this object properties */
  getLoadBalancingTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<IpLoadBalancingTask> => {
    return this.ovh.request('GET', `/ip/loadBalancing/${serviceName}/task/${taskId}`);
  };

  /** List available services */
  listService = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ip/service');
  };

  /** Get this object properties */
  getServiceByServiceName = (serviceName: string): Promise<IpServiceIp> => {
    return this.ovh.request('GET', `/ip/service/${serviceName}`);
  };

  /** Alter this object properties */
  updateServiceByServiceName = (serviceName: string, body: IpServiceIp): Promise<void> => {
    return this.ovh.request('PUT', `/ip/service/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchServiceChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/ip/service/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmServiceTerminationByServiceName = (
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
  getServiceServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ip/service/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/service/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postServiceTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ip/service/${serviceName}/terminate`);
  };

  /** Get this object properties */
  getByIp = (ip: string): Promise<IpIp> => {
    return this.ovh.request('GET', `/ip/${ip}`);
  };

  /** Alter this object properties */
  updateByIp = (ip: string, body: IpIp): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}`, body);
  };

  /** Anti-Hack blocked IP */
  getAntihackByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/antihack`);
  };

  /** Get this object properties */
  getAntihackByIpAndIpBlocked = (ip: string, ipBlocked: string): Promise<IpBlockedIp> => {
    return this.ovh.request('GET', `/ip/${ip}/antihack/${ipBlocked}`);
  };

  /** Unblock this IP */
  postAntihackUnblockByIpAndIpBlocked = (ip: string, ipBlocked: string): Promise<void> => {
    return this.ovh.request('POST', `/ip/${ip}/antihack/${ipBlocked}/unblock`);
  };

  /** ARP blocked IP */
  getArpByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/arp`);
  };

  /** Get this object properties */
  getArpByIpAndIpBlocked = (ip: string, ipBlocked: string): Promise<IpArpBlockedIp> => {
    return this.ovh.request('GET', `/ip/${ip}/arp/${ipBlocked}`);
  };

  /** Unblock this IP */
  postArpUnblockByIpAndIpBlocked = (ip: string, ipBlocked: string): Promise<void> => {
    return this.ovh.request('POST', `/ip/${ip}/arp/${ipBlocked}/unblock`);
  };

  /** Change organisation of this IP */
  updateOrgByIp = (ip: string, body: { organisation: string }): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/changeOrg`, body);
  };

  /** Reverse delegation on IPv6 subnet */
  getDelegationByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/delegation`);
  };

  /** Add target for reverse delegation on IPv6 subnet */
  addDelegationByIp = (ip: string, body: { target: string }): Promise<IpReverseDelegation> => {
    return this.ovh.request('POST', `/ip/${ip}/delegation`, body);
  };

  /** Delete a target for reverse delegation on IPv6 subnet */
  deleteDelegationByIpAndTarget = (ip: string, target: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/delegation/${target}`);
  };

  /** Get this object properties */
  getDelegationByIpAndTarget = (ip: string, target: string): Promise<IpReverseDelegation> => {
    return this.ovh.request('GET', `/ip/${ip}/delegation/${target}`);
  };

  /** Ip under firewall */
  getFirewallByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall`);
  };

  /** AntiDDOS option. Add new IP on firewall */
  postFirewallByIp = (ip: string, body: { ipOnFirewall: string }): Promise<IpFirewallIp> => {
    return this.ovh.request('POST', `/ip/${ip}/firewall`, body);
  };

  /** AntiDDOS option. Delete IP and rules from firewall */
  deleteFirewallByIpAndIpOnFirewall = (ip: string, ipOnFirewall: string): Promise<string> => {
    return this.ovh.request('DELETE', `/ip/${ip}/firewall/${ipOnFirewall}`);
  };

  /** Get this object properties */
  getFirewallByIpAndIpOnFirewall = (ip: string, ipOnFirewall: string): Promise<IpFirewallIp> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}`);
  };

  /** Alter this object properties */
  updateFirewallByIpAndIpOnFirewall = (
    ip: string,
    ipOnFirewall: string,
    body: IpFirewallIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/firewall/${ipOnFirewall}`, body);
  };

  /** Rules for this IP */
  getFirewallRuleByIpAndIpOnFirewall = (ip: string, ipOnFirewall: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}/rule`);
  };

  /** AntiDDOS option. Add new rule on your IP */
  postFirewallRuleByIpAndIpOnFirewall = (
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
  deleteFirewallRuleByIpAndIpOnFirewallAndSequence = (
    ip: string,
    ipOnFirewall: string,
    sequence: number
  ): Promise<IpFirewallNetworkRule> => {
    return this.ovh.request('DELETE', `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`);
  };

  /** Get this object properties */
  getFirewallRuleByIpAndIpOnFirewallAndSequence = (
    ip: string,
    ipOnFirewall: string,
    sequence: number
  ): Promise<IpFirewallNetworkRule> => {
    return this.ovh.request('GET', `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`);
  };

  /** Ip under game anti-ddos */
  getGameByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/game`);
  };

  /** Get this object properties */
  getGameByIpAndIpOnGame = (ip: string, ipOnGame: string): Promise<IpGameMitigation> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}`);
  };

  /** Alter this object properties */
  updateGameByIpAndIpOnGame = (
    ip: string,
    ipOnGame: string,
    body: IpGameMitigation
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/game/${ipOnGame}`, body);
  };

  /** IDs of rules configured for this IP */
  getGameRuleByIpAndIpOnGame = (ip: string, ipOnGame: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}/rule`);
  };

  /** Add new rule on your IP */
  addGameRuleByIpAndIpOnGame = (
    ip: string,
    ipOnGame: string,
    body: { ports: number; protocol: IpGameMitigationRuleProtocolEnum }
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('POST', `/ip/${ip}/game/${ipOnGame}/rule`, body);
  };

  /** Delete rule */
  deleteGameRuleByIpAndIpOnGameAndId = (
    id: number,
    ip: string,
    ipOnGame: string
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('DELETE', `/ip/${ip}/game/${ipOnGame}/rule/${id}`);
  };

  /** Get this object properties */
  getGameRuleByIpAndIpOnGameAndId = (
    id: number,
    ip: string,
    ipOnGame: string
  ): Promise<IpGameMitigationRule> => {
    return this.ovh.request('GET', `/ip/${ip}/game/${ipOnGame}/rule/${id}`);
  };

  /** Cloud Linux licenses associated to this IP */
  getLicenseCloudLinuxByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/cloudLinux`);
  };

  /** Cpanel licenses associated to this IP */
  getLicenseCpanelByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/cpanel`);
  };

  /** DirectAdmin licenses associated to this IP */
  getLicenseDirectadminByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/directadmin`);
  };

  /** Plesk licenses associated to this IP */
  getLicensePleskByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/plesk`);
  };

  /** SQL Server licenses associated to this IP */
  getLicenseSqlserverByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/sqlserver`);
  };

  /** Virtuozzo licenses associated to this IP */
  getLicenseVirtuozzoByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/virtuozzo`);
  };

  /** Windows licenses associated to this IP */
  getLicenseWindowsByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/windows`);
  };

  /** WorkLight licenses associated to this IP */
  getLicenseWorklightByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/license/worklight`);
  };

  /** Get this object properties */
  getMigrationTokenByIp = (ip: string): Promise<IpIpMigrationToken> => {
    return this.ovh.request('GET', `/ip/${ip}/migrationToken`);
  };

  /** Generate a migration token */
  postMigrationTokenByIp = (
    ip: string,
    body: { customerId: string }
  ): Promise<IpIpMigrationToken> => {
    return this.ovh.request('POST', `/ip/${ip}/migrationToken`, body);
  };

  /** Ip under mitigation */
  getMitigationByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation`);
  };

  /** AntiDDOS option. Add new IP on permanent mitigation */
  postMitigationByIp = (ip: string, body: { ipOnMitigation: string }): Promise<IpMitigationIp> => {
    return this.ovh.request('POST', `/ip/${ip}/mitigation`, body);
  };

  /** AntiDDOS option. Delete IP from mitigation */
  deleteMitigationByIpAndIpOnMitigation = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationIp> => {
    return this.ovh.request('DELETE', `/ip/${ip}/mitigation/${ipOnMitigation}`);
  };

  /** Get this object properties */
  getMitigationByIpAndIpOnMitigation = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationIp> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}`);
  };

  /** Alter this object properties */
  updateMitigationByIpAndIpOnMitigation = (
    ip: string,
    ipOnMitigation: string,
    body: IpMitigationIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/mitigation/${ipOnMitigation}`, body);
  };

  /** AntiDDOS option. Get statistics about your traffic in and out during this mitigation */
  getMitigationStatsByIpAndIpOnMitigation = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationStats[]> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}/stats`);
  };

  /** AntiDDOS option. Get top stream on your ip on a specific timestamp */
  getMitigationTopStreamByIpAndIpOnMitigation = (
    ip: string,
    ipOnMitigation: string
  ): Promise<IpMitigationDetailedStats[]> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigation/${ipOnMitigation}/topStream`);
  };

  /** Manage mitigation profile on your IPs */
  getMitigationProfilesByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigationProfiles`);
  };

  /** Create new profile for one of your ip */
  createMitigationProfilesByIp = (
    ip: string,
    body: {
      autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOutEnum;
      ipMitigationProfile: string;
    }
  ): Promise<IpMitigationProfile> => {
    return this.ovh.request('POST', `/ip/${ip}/mitigationProfiles`, body);
  };

  /** Delete mitigation profile */
  deleteMitigationProfilesByIpAndIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`);
  };

  /** Get this object properties */
  getMitigationProfilesByIpAndIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string
  ): Promise<IpMitigationProfile> => {
    return this.ovh.request('GET', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`);
  };

  /** Alter this object properties */
  updateMitigationProfilesByIpAndIpMitigationProfile = (
    ip: string,
    ipMitigationProfile: string,
    body: IpMitigationProfile
  ): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`, body);
  };

  /** List services available as a destination */
  listMoveByIp = (ip: string): Promise<IpDestinations> => {
    return this.ovh.request('GET', `/ip/${ip}/move`);
  };

  /** Move this IP to another service */
  postMoveByIp = (ip: string, body: { nexthop?: string; to: string }): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/move`, body);
  };

  /** Park this IP */
  postParkByIp = (ip: string): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/park`);
  };

  /** Ip under anti-phishing */
  getPhishingByIp = (ip: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ip/${ip}/phishing`);
  };

  /** Get this object properties */
  getPhishingByIpAndId = (id: number, ip: string): Promise<IpAntiphishing> => {
    return this.ovh.request('GET', `/ip/${ip}/phishing/${id}`);
  };

  /** Reverse on your ip */
  getReverseByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/reverse`);
  };

  /** Add reverse on an ip */
  addReverseByIp = (
    ip: string,
    body: { ipReverse: string; reverse: string }
  ): Promise<IpReverseIp> => {
    return this.ovh.request('POST', `/ip/${ip}/reverse`, body);
  };

  /** Delete a reverse on one IP */
  deleteReverseByIpAndIpReverse = (ip: string, ipReverse: string): Promise<void> => {
    return this.ovh.request('DELETE', `/ip/${ip}/reverse/${ipReverse}`);
  };

  /** Get this object properties */
  getReverseByIpAndIpReverse = (ip: string, ipReverse: string): Promise<IpReverseIp> => {
    return this.ovh.request('GET', `/ip/${ip}/reverse/${ipReverse}`);
  };

  /** Get this object properties */
  getRipeByIp = (ip: string): Promise<IpRipeInfos> => {
    return this.ovh.request('GET', `/ip/${ip}/ripe`);
  };

  /** Alter this object properties */
  updateRipeByIp = (ip: string, body: IpRipeInfos): Promise<void> => {
    return this.ovh.request('PUT', `/ip/${ip}/ripe`, body);
  };

  /** Ip spamming */
  getSpamByIp = (ip: string): Promise<string[]> => {
    return this.ovh.request('GET', `/ip/${ip}/spam`);
  };

  /** Get this object properties */
  getSpamByIpAndIpSpamming = (ip: string, ipSpamming: string): Promise<IpSpamIp> => {
    return this.ovh.request('GET', `/ip/${ip}/spam/${ipSpamming}`);
  };

  /** Get statistics about the email traffic */
  getSpamStatsByIpAndIpSpamming = (ip: string, ipSpamming: string): Promise<IpSpamStats[]> => {
    return this.ovh.request('GET', `/ip/${ip}/spam/${ipSpamming}/stats`);
  };

  /** Release the ip from anti-spam system */
  postSpamUnblockByIpAndIpSpamming = (ip: string, ipSpamming: string): Promise<IpSpamIp> => {
    return this.ovh.request('POST', `/ip/${ip}/spam/${ipSpamming}/unblock`);
  };

  /** IP tasks */
  getTaskByIp = (ip: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ip/${ip}/task`);
  };

  /** Get this object properties */
  getTaskByIpAndTaskId = (ip: string, taskId: number): Promise<IpIpTask> => {
    return this.ovh.request('GET', `/ip/${ip}/task/${taskId}`);
  };

  /** Delete a failover IP */
  postTerminateByIp = (ip: string): Promise<IpIpTask> => {
    return this.ovh.request('POST', `/ip/${ip}/terminate`);
  };
}

export { IpHandler };
