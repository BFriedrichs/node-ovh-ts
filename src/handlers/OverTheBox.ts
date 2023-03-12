/* WARNING: This file is auto-generated . Do not edit manually. */

import { OtbDeviceStatisticsPeriodEnum } from '../models/OtbDeviceStatisticsPeriodEnum';
import { OverTheBoxHardware } from '../models/OverTheBoxHardware';
import { OverTheBoxService } from '../models/OverTheBoxService';
import { OverTheBoxRemoteAccess } from '../models/OverTheBoxRemoteAccess';
import { OverTheBoxDeviceForRegistration } from '../models/OverTheBoxDeviceForRegistration';
import { OverTheBoxAvailableStatusEnum } from '../models/OverTheBoxAvailableStatusEnum';
import { OverTheBoxTemporaryLogsLink } from '../models/OverTheBoxTemporaryLogsLink';
import { OverTheBoxDevice } from '../models/OverTheBoxDevice';
import { OvertheboxConfigurationDnsNameserver } from '../models/OvertheboxConfigurationDnsNameserver';
import { OvertheboxConfigurationFirewallRedirect } from '../models/OvertheboxConfigurationFirewallRedirect';
import { OverTheBoxDeviceAction } from '../models/OverTheBoxDeviceAction';
import { OverTheBoxActionStatusEnum } from '../models/OverTheBoxActionStatusEnum';
import { OverTheBoxBackup } from '../models/OverTheBoxBackup';
import { OverTheBoxTask } from '../models/OverTheBoxTask';
import { OvertheboxConfigurationDnsLocalDomain } from '../models/OvertheboxConfigurationDnsLocalDomain';
import { OverTheBoxAvailableMigrationOffer } from '../models/OverTheBoxAvailableMigrationOffer';
import { OtbDeviceStatistics } from '../models/OtbDeviceStatistics';
import { OverTheBoxAvailableDeviceAction } from '../models/OverTheBoxAvailableDeviceAction';
import { OvertheboxConfigurationNetworkInterface } from '../models/OvertheboxConfigurationNetworkInterface';
import { ServicesService } from '../models/ServicesService';
import { OtbDeviceStatisticsTypeEnum } from '../models/OtbDeviceStatisticsTypeEnum';
import { PriceOverTheBoxOfferEnum } from '../models/PriceOverTheBoxOfferEnum';
import { OvertheboxConfigurationDhcpStaticLease } from '../models/OvertheboxConfigurationDhcpStaticLease';
import { OverTheBoxTaskStatusEnum } from '../models/OverTheBoxTaskStatusEnum';
import { OvertheboxConfigurationDhcpConfig } from '../models/OvertheboxConfigurationDhcpConfig';
import { OvertheboxConfigurationFirewallRule } from '../models/OvertheboxConfigurationFirewallRule';
import OVHBase from '../ovh';

class OverTheBoxHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/overTheBox');
  };

  /** List the available offers for the new call */
  listAvailableOffers = (): Promise<PriceOverTheBoxOfferEnum[]> => {
    return this.ovh.request('GET', '/overTheBox/availableOffers');
  };

  /** Get the list of devices connected from the same IP address */
  postDevices = (): Promise<OverTheBoxDeviceForRegistration[]> => {
    return this.ovh.request('POST', '/overTheBox/devices');
  };

  /** List available services */
  listHardwares = (): Promise<string[]> => {
    return this.ovh.request('GET', '/overTheBox/hardware');
  };

  /** List hardware that can be linked to a service */
  listHardwareAvailables = (): Promise<string[]> => {
    return this.ovh.request('GET', '/overTheBox/hardware/available');
  };

  /** Get this object properties */
  getHardwareByHardwareName = (hardwareName: string): Promise<OverTheBoxHardware> => {
    return this.ovh.request('GET', `/overTheBox/hardware/${hardwareName}`);
  };

  /** Resiliate a service */
  deleteByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}`);
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<OverTheBoxService> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: OverTheBoxService): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}`, body);
  };

  /** Change the value of autoMTU */
  updateAutoMTUByServiceName = (
    serviceName: string,
    body: { mtuAuto: OverTheBoxAvailableStatusEnum }
  ): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}/autoMTU`, body);
  };

  /** List available release channels for this service */
  listAvailableReleaseChannelsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/availableReleaseChannels`);
  };

  /** List of backups for this service */
  listBackupsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/backups`);
  };

  /** Delete a backup */
  deleteBackupsByServiceNameAndBackupId = (
    backupId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/backups/${backupId}`);
  };

  /** Get this object properties */
  getBackupsByServiceNameAndBackupId = (
    backupId: string,
    serviceName: string
  ): Promise<OverTheBoxBackup> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/backups/${backupId}`);
  };

  /** Cancel the resiliation of the Service */
  postCancelResiliationByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/changeContact`, body);
  };

  /** Return the list of DHCP configurations */
  getConfigurationDhcpConfigByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDhcpConfig[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/config`);
  };

  /** Create a DHCP configuration */
  createConfigurationDhcpConfigByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationDhcpConfig
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/configuration/dhcp/config`, body);
  };

  /** Delete a DHCP configuration */
  deleteConfigurationDhcpConfigByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/configuration/dhcp/config/${id}`);
  };

  /** Return the specified DHCP configuration */
  getConfigurationDhcpConfigByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/config/${id}`);
  };

  /** Update a DHCP configuration */
  updateConfigurationDhcpConfigByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationDhcpConfig
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/dhcp/config/${id}`,
      body
    );
  };

  /** Return the list of DHCP static leases */
  getConfigurationDhcpStaticLeaseByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDhcpStaticLease[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/staticLease`);
  };

  /** Create a DHCP static lease */
  createConfigurationDhcpStaticLeaseByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationDhcpStaticLease
  ): Promise<OvertheboxConfigurationDhcpStaticLease> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease`,
      body
    );
  };

  /** Delete a DHCP static lease */
  deleteConfigurationDhcpStaticLeaseByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease/${id}`
    );
  };

  /** Return the specified DHCP static lease */
  getConfigurationDhcpStaticLeaseByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDhcpStaticLease> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease/${id}`
    );
  };

  /** Update a DHCP static lease */
  updateConfigurationDhcpStaticLeaseByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationDhcpStaticLease
  ): Promise<OvertheboxConfigurationDhcpStaticLease> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease/${id}`,
      body
    );
  };

  /** Return the list of DNS local domains */
  getConfigurationDnsLocalDomainByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDnsLocalDomain[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/localDomain`);
  };

  /** Create a DNS local domain */
  createConfigurationDnsLocalDomainByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationDnsLocalDomain
  ): Promise<OvertheboxConfigurationDnsLocalDomain> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/configuration/dns/localDomain`,
      body
    );
  };

  /** Delete a DNS local domain */
  deleteConfigurationDnsLocalDomainByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dns/localDomain/${id}`
    );
  };

  /** Return the specified DNS local domain */
  getConfigurationDnsLocalDomainByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDnsLocalDomain> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/dns/localDomain/${id}`
    );
  };

  /** Update a DNS local domain */
  updateConfigurationDnsLocalDomainByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationDnsLocalDomain
  ): Promise<OvertheboxConfigurationDnsLocalDomain> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/dns/localDomain/${id}`,
      body
    );
  };

  /** Return the list of DNS nameservers */
  getConfigurationDnsNameserverByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDnsNameserver[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/nameserver`);
  };

  /** Create a DNS nameserver */
  createConfigurationDnsNameserverByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationDnsNameserver
  ): Promise<OvertheboxConfigurationDnsNameserver> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/configuration/dns/nameserver`,
      body
    );
  };

  /** Delete a DNS nameserver */
  deleteConfigurationDnsNameserverByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dns/nameserver/${id}`
    );
  };

  /** Get a DNS nameserver configuration */
  getConfigurationDnsNameserverByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDnsNameserver> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/nameserver/${id}`);
  };

  /** Update a DNS nameserver configuration */
  updateConfigurationDnsNameserverByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationDnsNameserver
  ): Promise<OvertheboxConfigurationDnsNameserver> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/dns/nameserver/${id}`,
      body
    );
  };

  /** Return the list of firewall redirects */
  getConfigurationFirewallRedirectByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationFirewallRedirect[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/redirect`);
  };

  /** Create a firewall redirect */
  createConfigurationFirewallRedirectByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationFirewallRedirect
  ): Promise<OvertheboxConfigurationFirewallRedirect> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/configuration/firewall/redirect`,
      body
    );
  };

  /** Delete a firewall redirect */
  deleteConfigurationFirewallRedirectByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/firewall/redirect/${id}`
    );
  };

  /** Get a firewall redirect */
  getConfigurationFirewallRedirectByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationFirewallRedirect> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/firewall/redirect/${id}`
    );
  };

  /** Update a firewall redirect */
  updateConfigurationFirewallRedirectByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationFirewallRedirect
  ): Promise<OvertheboxConfigurationFirewallRedirect> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/firewall/redirect/${id}`,
      body
    );
  };

  /** Return the list of firewall rules */
  getConfigurationFirewallRuleByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationFirewallRule[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/rule`);
  };

  /** Create a firewall rule */
  createConfigurationFirewallRuleByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationFirewallRule
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/configuration/firewall/rule`, body);
  };

  /** Delete a firewall rule */
  deleteConfigurationFirewallRuleByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/firewall/rule/${id}`
    );
  };

  /** Get a firewall rule */
  getConfigurationFirewallRuleByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/rule/${id}`);
  };

  /** Update a firewall rule */
  updateConfigurationFirewallRuleByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationFirewallRule
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/firewall/rule/${id}`,
      body
    );
  };

  /** Return the list of network interfaces */
  getConfigurationNetworkInterfaceByServiceName = (
    serviceName: string
  ): Promise<OvertheboxConfigurationNetworkInterface[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/network/interface`);
  };

  /** Create a network interface */
  createConfigurationNetworkInterfaceByServiceName = (
    serviceName: string,
    body: OvertheboxConfigurationNetworkInterface
  ): Promise<OvertheboxConfigurationNetworkInterface> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/configuration/network/interface`,
      body
    );
  };

  /** Delete a network interface */
  deleteConfigurationNetworkInterfaceByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/network/interface/${id}`
    );
  };

  /** Get a network interface */
  getConfigurationNetworkInterfaceByServiceNameAndId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationNetworkInterface> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/network/interface/${id}`
    );
  };

  /** Update a network interface */
  updateConfigurationNetworkInterfaceByServiceNameAndId = (
    serviceName: string,
    id: string,
    body: OvertheboxConfigurationNetworkInterface
  ): Promise<OvertheboxConfigurationNetworkInterface> => {
    return this.ovh.request(
      'PUT',
      `/overTheBox/${serviceName}/configuration/network/interface/${id}`,
      body
    );
  };

  /** Unlink a device from a service */
  deleteDeviceByServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/device`);
  };

  /** Get this object properties */
  getDeviceByServiceName = (serviceName: string): Promise<OverTheBoxDevice> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device`);
  };

  /** List of actions scheduled for this device */
  listDeviceActionsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/actions`);
  };

  /** Create a device action on the device */
  createDeviceActionsByServiceName = (
    serviceName: string,
    body: { name: string }
  ): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/actions`, body);
  };

  /** Get this object properties */
  getDeviceActionsByServiceNameAndActionId = (
    actionId: string,
    serviceName: string
  ): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/actions/${actionId}`);
  };

  /** List the available device actions */
  listDeviceAvailableActionsByServiceName = (
    serviceName: string
  ): Promise<OverTheBoxAvailableDeviceAction[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/availableActions`);
  };

  /** Create an action to generate a backup */
  createDeviceBackupByServiceName = (serviceName: string): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/backup`);
  };

  /** Generate a temporary url to retrieve device logs */
  postDeviceLogsByServiceName = (serviceName: string): Promise<OverTheBoxTemporaryLogsLink> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/logs`);
  };

  /** Create a group of actions to restore a given backup */
  createDeviceRestoreBackupByServiceName = (
    serviceName: string,
    body: { backupId: string }
  ): Promise<OverTheBoxDeviceAction[]> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/restoreBackup`, body);
  };

  /** Link a device to this service */
  postLinkDeviceByServiceName = (
    serviceName: string,
    body: { deviceId: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/linkDevice`, body);
  };

  /** Link an available hardware to this service */
  postLinkHardwareByServiceName = (
    serviceName: string,
    body: { hardwareName: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/linkHardware`, body);
  };

  /** List all available offers one can migrate to */
  listMigrationOffersByServiceName = (
    serviceName: string
  ): Promise<OverTheBoxAvailableMigrationOffer[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/migration/offers`);
  };

  /** List of remote accesses for the service */
  listRemoteAccessesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/remoteAccesses`);
  };

  /** Create a new remote access for the service */
  createRemoteAccessesByServiceName = (
    serviceName: string,
    body: { allowedIp?: string; expirationDate?: Date; exposedPort: number; publicKey?: string }
  ): Promise<OverTheBoxRemoteAccess> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/remoteAccesses`, body);
  };

  /** Delete a remote access */
  deleteRemoteAccessesByServiceNameAndRemoteAccessId = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`
    );
  };

  /** Get this object properties */
  getRemoteAccessesByServiceNameAndRemoteAccessId = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<OverTheBoxRemoteAccess> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`);
  };

  /** Authorize the remote access */
  postRemoteAccessesAuthorizeByServiceNameAndRemoteAccessId = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}/authorize`
    );
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}/serviceInfos`, body);
  };

  /** Get statistics for an OTB device */
  getStatisticsByServiceName = (serviceName: string): Promise<OtbDeviceStatistics[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/statistics`);
  };

  /** List of tasks scheduled for this service */
  listTasksByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: string
  ): Promise<OverTheBoxTask> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/tasks/${taskId}`);
  };
}

export { OverTheBoxHandler };
