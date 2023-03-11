/* WARNING: This file is auto-generated . Do not edit manually. */

import { OverTheBoxAvailableMigrationOffer } from '../models/OverTheBoxAvailableMigrationOffer';
import { OverTheBoxRemoteAccess } from '../models/OverTheBoxRemoteAccess';
import { PriceOverTheBoxOfferEnum } from '../models/PriceOverTheBoxOfferEnum';
import { OverTheBoxService } from '../models/OverTheBoxService';
import { OvertheboxConfigurationDnsNameserver } from '../models/OvertheboxConfigurationDnsNameserver';
import { OverTheBoxBackup } from '../models/OverTheBoxBackup';
import { OtbDeviceStatisticsPeriodEnum } from '../models/OtbDeviceStatisticsPeriodEnum';
import { OverTheBoxAvailableDeviceAction } from '../models/OverTheBoxAvailableDeviceAction';
import { OverTheBoxTask } from '../models/OverTheBoxTask';
import { OverTheBoxTaskStatusEnum } from '../models/OverTheBoxTaskStatusEnum';
import { OverTheBoxDevice } from '../models/OverTheBoxDevice';
import { OtbDeviceStatistics } from '../models/OtbDeviceStatistics';
import { OvertheboxConfigurationNetworkInterface } from '../models/OvertheboxConfigurationNetworkInterface';
import { OverTheBoxHardware } from '../models/OverTheBoxHardware';
import { OvertheboxConfigurationDnsLocalDomain } from '../models/OvertheboxConfigurationDnsLocalDomain';
import { OvertheboxConfigurationFirewallRedirect } from '../models/OvertheboxConfigurationFirewallRedirect';
import { OverTheBoxDeviceAction } from '../models/OverTheBoxDeviceAction';
import { ServicesService } from '../models/ServicesService';
import { OverTheBoxActionStatusEnum } from '../models/OverTheBoxActionStatusEnum';
import { OvertheboxConfigurationFirewallRule } from '../models/OvertheboxConfigurationFirewallRule';
import { OvertheboxConfigurationDhcpStaticLease } from '../models/OvertheboxConfigurationDhcpStaticLease';
import { OvertheboxConfigurationDhcpConfig } from '../models/OvertheboxConfigurationDhcpConfig';
import { OtbDeviceStatisticsTypeEnum } from '../models/OtbDeviceStatisticsTypeEnum';
import { OverTheBoxDeviceForRegistration } from '../models/OverTheBoxDeviceForRegistration';
import { OverTheBoxTemporaryLogsLink } from '../models/OverTheBoxTemporaryLogsLink';
import { OverTheBoxAvailableStatusEnum } from '../models/OverTheBoxAvailableStatusEnum';
import OVHBase from '../ovh';

class OverTheBoxHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/overTheBox');
  };

  /** List the available offers for the new call */
  getAvailableOffers = (): Promise<PriceOverTheBoxOfferEnum> => {
    return this.ovh.request('GET', '/overTheBox/availableOffers');
  };

  /** Get the list of devices connected from the same IP address */
  postDevices = (): Promise<OverTheBoxDeviceForRegistration> => {
    return this.ovh.request('POST', '/overTheBox/devices');
  };

  /** List available services */
  getHardware = (): Promise<string> => {
    return this.ovh.request('GET', '/overTheBox/hardware');
  };

  /** List hardware that can be linked to a service */
  getHardwareAvailable = (): Promise<string> => {
    return this.ovh.request('GET', '/overTheBox/hardware/available');
  };

  /** Get this object properties */
  getHardwareHardwareName = (hardwareName: string): Promise<OverTheBoxHardware> => {
    return this.ovh.request('GET', `/overTheBox/hardware/${hardwareName}`);
  };

  /** Resiliate a service */
  deleteServiceName = (serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}`);
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<OverTheBoxService> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: OverTheBoxService): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}`, body);
  };

  /** Change the value of autoMTU */
  putServiceNameAutoMTU = (
    serviceName: string,
    body: { mtuAuto: OverTheBoxAvailableStatusEnum }
  ): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}/autoMTU`, body);
  };

  /** List available release channels for this service */
  getServiceNameAvailableReleaseChannels = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/availableReleaseChannels`);
  };

  /** List of backups for this service */
  getServiceNameBackups = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/backups`);
  };

  /** Delete a backup */
  deleteServiceNameBackupsBackupId = (backupId: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/backups/${backupId}`);
  };

  /** Get this object properties */
  getServiceNameBackupsBackupId = (
    backupId: string,
    serviceName: string
  ): Promise<OverTheBoxBackup> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/backups/${backupId}`);
  };

  /** Cancel the resiliation of the Service */
  postServiceNameCancelResiliation = (serviceName: string): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/changeContact`, body);
  };

  /** Return the list of DHCP configurations */
  getServiceNameConfigurationDhcpConfig = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/config`);
  };

  /** Create a DHCP configuration */
  postServiceNameConfigurationDhcpConfig = (
    serviceName: string,
    body: OvertheboxConfigurationDhcpConfig
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/configuration/dhcp/config`, body);
  };

  /** Delete a DHCP configuration */
  deleteServiceNameConfigurationDhcpConfigId = (serviceName: string, id: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/configuration/dhcp/config/${id}`);
  };

  /** Return the specified DHCP configuration */
  getServiceNameConfigurationDhcpConfigId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDhcpConfig> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/config/${id}`);
  };

  /** Update a DHCP configuration */
  putServiceNameConfigurationDhcpConfigId = (
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
  getServiceNameConfigurationDhcpStaticLease = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDhcpStaticLease> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dhcp/staticLease`);
  };

  /** Create a DHCP static lease */
  postServiceNameConfigurationDhcpStaticLease = (
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
  deleteServiceNameConfigurationDhcpStaticLeaseId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease/${id}`
    );
  };

  /** Return the specified DHCP static lease */
  getServiceNameConfigurationDhcpStaticLeaseId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDhcpStaticLease> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/dhcp/staticLease/${id}`
    );
  };

  /** Update a DHCP static lease */
  putServiceNameConfigurationDhcpStaticLeaseId = (
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
  getServiceNameConfigurationDnsLocalDomain = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDnsLocalDomain> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/localDomain`);
  };

  /** Create a DNS local domain */
  postServiceNameConfigurationDnsLocalDomain = (
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
  deleteServiceNameConfigurationDnsLocalDomainId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dns/localDomain/${id}`
    );
  };

  /** Return the specified DNS local domain */
  getServiceNameConfigurationDnsLocalDomainId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDnsLocalDomain> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/dns/localDomain/${id}`
    );
  };

  /** Update a DNS local domain */
  putServiceNameConfigurationDnsLocalDomainId = (
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
  getServiceNameConfigurationDnsNameserver = (
    serviceName: string
  ): Promise<OvertheboxConfigurationDnsNameserver> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/nameserver`);
  };

  /** Create a DNS nameserver */
  postServiceNameConfigurationDnsNameserver = (
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
  deleteServiceNameConfigurationDnsNameserverId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/dns/nameserver/${id}`
    );
  };

  /** Get a DNS nameserver configuration */
  getServiceNameConfigurationDnsNameserverId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationDnsNameserver> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/dns/nameserver/${id}`);
  };

  /** Update a DNS nameserver configuration */
  putServiceNameConfigurationDnsNameserverId = (
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
  getServiceNameConfigurationFirewallRedirect = (
    serviceName: string
  ): Promise<OvertheboxConfigurationFirewallRedirect> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/redirect`);
  };

  /** Create a firewall redirect */
  postServiceNameConfigurationFirewallRedirect = (
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
  deleteServiceNameConfigurationFirewallRedirectId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/firewall/redirect/${id}`
    );
  };

  /** Get a firewall redirect */
  getServiceNameConfigurationFirewallRedirectId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationFirewallRedirect> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/firewall/redirect/${id}`
    );
  };

  /** Update a firewall redirect */
  putServiceNameConfigurationFirewallRedirectId = (
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
  getServiceNameConfigurationFirewallRule = (
    serviceName: string
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/rule`);
  };

  /** Create a firewall rule */
  postServiceNameConfigurationFirewallRule = (
    serviceName: string,
    body: OvertheboxConfigurationFirewallRule
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/configuration/firewall/rule`, body);
  };

  /** Delete a firewall rule */
  deleteServiceNameConfigurationFirewallRuleId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/firewall/rule/${id}`
    );
  };

  /** Get a firewall rule */
  getServiceNameConfigurationFirewallRuleId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationFirewallRule> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/firewall/rule/${id}`);
  };

  /** Update a firewall rule */
  putServiceNameConfigurationFirewallRuleId = (
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
  getServiceNameConfigurationNetworkInterface = (
    serviceName: string
  ): Promise<OvertheboxConfigurationNetworkInterface> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/configuration/network/interface`);
  };

  /** Create a network interface */
  postServiceNameConfigurationNetworkInterface = (
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
  deleteServiceNameConfigurationNetworkInterfaceId = (
    serviceName: string,
    id: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/configuration/network/interface/${id}`
    );
  };

  /** Get a network interface */
  getServiceNameConfigurationNetworkInterfaceId = (
    serviceName: string,
    id: string
  ): Promise<OvertheboxConfigurationNetworkInterface> => {
    return this.ovh.request(
      'GET',
      `/overTheBox/${serviceName}/configuration/network/interface/${id}`
    );
  };

  /** Update a network interface */
  putServiceNameConfigurationNetworkInterfaceId = (
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
  deleteServiceNameDevice = (serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/overTheBox/${serviceName}/device`);
  };

  /** Get this object properties */
  getServiceNameDevice = (serviceName: string): Promise<OverTheBoxDevice> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device`);
  };

  /** List of actions scheduled for this device */
  getServiceNameDeviceActions = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/actions`);
  };

  /** Create a device action on the device */
  postServiceNameDeviceActions = (
    serviceName: string,
    body: { name: string }
  ): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/actions`, body);
  };

  /** Get this object properties */
  getServiceNameDeviceActionsActionId = (
    actionId: string,
    serviceName: string
  ): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/actions/${actionId}`);
  };

  /** List the available device actions */
  getServiceNameDeviceAvailableActions = (
    serviceName: string
  ): Promise<OverTheBoxAvailableDeviceAction> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/device/availableActions`);
  };

  /** Create an action to generate a backup */
  postServiceNameDeviceBackup = (serviceName: string): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/backup`);
  };

  /** Generate a temporary url to retrieve device logs */
  postServiceNameDeviceLogs = (serviceName: string): Promise<OverTheBoxTemporaryLogsLink> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/logs`);
  };

  /** Create a group of actions to restore a given backup */
  postServiceNameDeviceRestoreBackup = (
    serviceName: string,
    body: { backupId: string }
  ): Promise<OverTheBoxDeviceAction> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/device/restoreBackup`, body);
  };

  /** Link a device to this service */
  postServiceNameLinkDevice = (serviceName: string, body: { deviceId: string }): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/linkDevice`, body);
  };

  /** Link an available hardware to this service */
  postServiceNameLinkHardware = (
    serviceName: string,
    body: { hardwareName: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/linkHardware`, body);
  };

  /** List all available offers one can migrate to */
  getServiceNameMigrationOffers = (
    serviceName: string
  ): Promise<OverTheBoxAvailableMigrationOffer> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/migration/offers`);
  };

  /** List of remote accesses for the service */
  getServiceNameRemoteAccesses = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/remoteAccesses`);
  };

  /** Create a new remote access for the service */
  postServiceNameRemoteAccesses = (
    serviceName: string,
    body: { allowedIp?: string; expirationDate?: Date; exposedPort: number; publicKey?: string }
  ): Promise<OverTheBoxRemoteAccess> => {
    return this.ovh.request('POST', `/overTheBox/${serviceName}/remoteAccesses`, body);
  };

  /** Delete a remote access */
  deleteServiceNameRemoteAccessesRemoteAccessId = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`
    );
  };

  /** Get this object properties */
  getServiceNameRemoteAccessesRemoteAccessId = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<OverTheBoxRemoteAccess> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`);
  };

  /** Authorize the remote access */
  postServiceNameRemoteAccessesRemoteAccessIdAuthorize = (
    remoteAccessId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}/authorize`
    );
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/overTheBox/${serviceName}/serviceInfos`, body);
  };

  /** Get statistics for an OTB device */
  getServiceNameStatistics = (serviceName: string): Promise<OtbDeviceStatistics> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/statistics`);
  };

  /** List of tasks scheduled for this service */
  getServiceNameTasks = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getServiceNameTasksTaskId = (serviceName: string, taskId: string): Promise<OverTheBoxTask> => {
    return this.ovh.request('GET', `/overTheBox/${serviceName}/tasks/${taskId}`);
  };
}

export default OverTheBoxHandler;
