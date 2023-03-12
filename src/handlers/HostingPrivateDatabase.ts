/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseAvailableOrderCapacities } from '../models/HostingPrivateDatabaseAvailableOrderCapacities';
import { ServicesService } from '../models/ServicesService';
import { HostingPrivateDatabaseTaskFunctionEnum } from '../models/HostingPrivateDatabaseTaskFunctionEnum';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { HostingPrivateDatabaseAvailableVersionEnum } from '../models/HostingPrivateDatabaseAvailableVersionEnum';
import { HostingPrivateDatabaseTaskStatusEnum } from '../models/HostingPrivateDatabaseTaskStatusEnum';
import { HostingPrivateDatabaseConfiguration } from '../models/HostingPrivateDatabaseConfiguration';
import { HostingPrivateDatabaseDatabaseDump } from '../models/HostingPrivateDatabaseDatabaseDump';
import { HostingPrivateDatabaseDatabaseExtension } from '../models/HostingPrivateDatabaseDatabaseExtension';
import { HostingPrivateDatabaseUser } from '../models/HostingPrivateDatabaseUser';
import { HostingPrivateDatabaseTask } from '../models/HostingPrivateDatabaseTask';
import { HostingPrivateDatabaseWhitelist } from '../models/HostingPrivateDatabaseWhitelist';
import { HostingPrivateDatabaseService } from '../models/HostingPrivateDatabaseService';
import { HostingPrivateDatabaseGrantGrantEnum } from '../models/HostingPrivateDatabaseGrantGrantEnum';
import { HostingPrivateDatabaseGrant } from '../models/HostingPrivateDatabaseGrant';
import { HostingPrivateDatabaseDatabaseExtensionStatus } from '../models/HostingPrivateDatabaseDatabaseExtensionStatus';
import { HostingPrivateDatabaseOom } from '../models/HostingPrivateDatabaseOom';
import { HostingPrivateDatabaseCpuThrottle } from '../models/HostingPrivateDatabaseCpuThrottle';
import { HostingPrivateDatabaseDump } from '../models/HostingPrivateDatabaseDump';
import { HostingPrivateDatabaseOfferEnum } from '../models/HostingPrivateDatabaseOfferEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { HostingPrivateDatabaseTemporaryLogsLink } from '../models/HostingPrivateDatabaseTemporaryLogsLink';
import { HostingPrivateDatabaseDatabase } from '../models/HostingPrivateDatabaseDatabase';
import { HostingPrivateDatabaseWebhostingNetwork } from '../models/HostingPrivateDatabaseWebhostingNetwork';
import OVHBase from '../ovh';

class HostingPrivateDatabaseHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listPrivateDatabase = (): Promise<string[]> => {
    return this.ovh.request('GET', '/hosting/privateDatabase');
  };

  /** Get available order capacitie */
  getPrivateDatabaseAvailableOrderCapacities =
    (): Promise<HostingPrivateDatabaseAvailableOrderCapacities> => {
      return this.ovh.request('GET', '/hosting/privateDatabase/availableOrderCapacities');
    };

  /** Get this object properties */
  getPrivateDatabaseByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseService> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}`);
  };

  /** Alter this object properties */
  updatePrivateDatabaseByServiceName = (
    serviceName: string,
    body: HostingPrivateDatabaseService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}`, body);
  };

  /** Get the availables versions for this private database */
  getPrivateDatabaseAvailableVersionsByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseAvailableVersionEnum[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/availableVersions`);
  };

  /** Launch a contact change procedure */
  launchPrivateDatabaseChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/changeContact`, body);
  };

  /** Change your ftp admin password */
  updatePrivateDatabaseFtpPasswordByServiceName = (
    serviceName: string,
    body: { password: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/changeFtpPassword`,
      body
    );
  };

  /** Change the private database engine version */
  updatePrivateDatabaseVersionByServiceName = (
    serviceName: string,
    body: { version: HostingPrivateDatabaseAvailableVersionEnum }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/changeVersion`, body);
  };

  /** Get this object properties */
  getPrivateDatabaseConfigByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseConfiguration> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/config`);
  };

  /** Update the configuration */
  updatePrivateDatabaseConfigByServiceName = (
    serviceName: string,
    body: { parameters: string }
  ): Promise<HostingPrivateDatabaseConfiguration> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/config/update`, body);
  };

  /** Confirm termination of your service */
  confirmPrivateDatabaseTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/confirmTermination`,
      body
    );
  };

  /** List of privatesql CPU throttle */
  listPrivateDatabaseCpuThrottleByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseCpuThrottle[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/cpuThrottle`);
  };

  /** Databases linked to your private database service */
  getPrivateDatabaseDatabaseByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/database`);
  };

  /** Create a new database on your private database service */
  createPrivateDatabaseDatabaseByServiceName = (
    serviceName: string,
    body: { databaseName: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/database`, body);
  };

  /** Delete the database */
  deletePrivateDatabaseDatabaseByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'DELETE',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseDatabaseByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDatabase> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}`
    );
  };

  /** Dump available for your databases */
  getPrivateDatabaseDatabaseDumpByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump`
    );
  };

  /** Request the dump of this database ( an email will be send with a link available 30 days ) */
  postPrivateDatabaseDatabaseDumpByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string,
    body: { sendEmail?: boolean }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump`,
      body
    );
  };

  /** Delete dump before expiration date */
  deletePrivateDatabaseDatabaseDumpByServiceNameAndDatabaseNameAndId = (
    databaseName: string,
    id: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'DELETE',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseDatabaseDumpByServiceNameAndDatabaseNameAndId = (
    databaseName: string,
    id: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDatabaseDump> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`
    );
  };

  /** Request the restore from this dump */
  postPrivateDatabaseDatabaseDumpRestoreByServiceNameAndDatabaseNameAndId = (
    databaseName: string,
    id: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}/restore`
    );
  };

  /** Extensions linked to your database */
  getPrivateDatabaseDatabaseExtensionByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseDatabaseExtensionByServiceNameAndDatabaseNameAndExtensionName = (
    databaseName: string,
    extensionName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDatabaseExtension> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}`
    );
  };

  /** Disable an extension from a database */
  disablePrivateDatabaseDatabaseExtensionByServiceNameAndDatabaseNameAndExtensionName = (
    databaseName: string,
    extensionName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/disable`
    );
  };

  /** Enable an extension on a database */
  enablePrivateDatabaseDatabaseExtensionByServiceNameAndDatabaseNameAndExtensionName = (
    databaseName: string,
    extensionName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/enable`
    );
  };

  /** Request the import in this database */
  postPrivateDatabaseDatabaseImportByServiceNameAndDatabaseName = (
    databaseName: string,
    serviceName: string,
    body: { documentId: string; flushDatabase?: boolean; sendEmail?: boolean }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/import`,
      body
    );
  };

  /** Create a new database/user and grant it */
  createPrivateDatabaseDatabaseWizardByServiceName = (
    serviceName: string,
    body: {
      databaseName: string;
      grant: HostingPrivateDatabaseGrantGrantEnum;
      password: string;
      userName: string;
    }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/databaseWizard`, body);
  };

  /** Dumps available for your private database service */
  getPrivateDatabaseDumpByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/dump`);
  };

  /** Delete dump before expiration date */
  deletePrivateDatabaseDumpByServiceNameAndDumpId = (
    dumpId: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`);
  };

  /** Get this object properties */
  getPrivateDatabaseDumpByServiceNameAndDumpId = (
    dumpId: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDump> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`);
  };

  /** Request the restore from this dump */
  postPrivateDatabaseDumpRestoreByServiceNameAndDumpId = (
    dumpId: number,
    serviceName: string,
    body: { databaseName: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/dump/${dumpId}/restore`,
      body
    );
  };

  /** Generate a temporary url to retrieve instance logs */
  postPrivateDatabaseGenerateTemporaryLogsLinkByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTemporaryLogsLink> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/generateTemporaryLogsLink`
    );
  };

  /** List of privatesql OOM kill */
  listPrivateDatabaseOomByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseOom[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/oom`);
  };

  /** Refresh the quota of your private database */
  postPrivateDatabaseQuotaRefreshByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/quotaRefresh`);
  };

  /** Restart the private database */
  postPrivateDatabaseRestartByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/restart`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updatePrivateDatabaseServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}/serviceInfos`, body);
  };

  /** Start the private database */
  postPrivateDatabaseStartByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/start`);
  };

  /** Stop the private database */
  postPrivateDatabaseStopByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/stop`);
  };

  /** Tasks attached to your private database service */
  getPrivateDatabaseTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getPrivateDatabaseTasksByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/tasks/${id}`);
  };

  /** Terminate your service */
  postPrivateDatabaseTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/terminate`);
  };

  /** User allowed to connect on your databases */
  getPrivateDatabaseUserByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/user`);
  };

  /** Create a new user on your service */
  createPrivateDatabaseUserByServiceName = (
    serviceName: string,
    body: { password: string; userName: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/user`, body);
  };

  /** Delete a user */
  deletePrivateDatabaseUserByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/user/${userName}`);
  };

  /** Get this object properties */
  getPrivateDatabaseUserByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseUser> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/user/${userName}`);
  };

  /** Request a change password for a user */
  postPrivateDatabaseUserChangePasswordByServiceNameAndUserName = (
    serviceName: string,
    userName: string,
    body: { password: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/changePassword`,
      body
    );
  };

  /** User grant's on your databases */
  getPrivateDatabaseUserGrantByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`
    );
  };

  /** Add grant on a database */
  addPrivateDatabaseUserGrantByServiceNameAndUserName = (
    serviceName: string,
    userName: string,
    body: { databaseName: string; grant: HostingPrivateDatabaseGrantGrantEnum }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`,
      body
    );
  };

  /** Delete a grant on a database */
  deletePrivateDatabaseUserGrantByServiceNameAndUserNameAndDatabaseName = (
    databaseName: string,
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'DELETE',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseUserGrantByServiceNameAndUserNameAndDatabaseName = (
    databaseName: string,
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseGrant> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`
    );
  };

  /** Update user grant */
  updatePrivateDatabaseUserGrantByServiceNameAndUserNameAndDatabaseName = (
    databaseName: string,
    serviceName: string,
    userName: string,
    body: { grant: HostingPrivateDatabaseGrantGrantEnum }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}/update`,
      body
    );
  };

  /** Disable Webhosting network */
  disablePrivateDatabaseWebhostingNetworkByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** Get this object properties */
  getPrivateDatabaseWebhostingNetworkByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseWebhostingNetwork> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** Enable Webhosting network */
  enablePrivateDatabaseWebhostingNetworkByServiceName = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** List linked webs */
  listPrivateDatabaseWebsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/webs`);
  };

  /** Whitelist allowed on your privatesql */
  getPrivateDatabaseWhitelistByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/whitelist`);
  };

  /** Create a new IP whitelist */
  createPrivateDatabaseWhitelistByServiceName = (
    serviceName: string,
    body: { ip: string; name?: string; service?: boolean; sftp?: boolean }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/whitelist`, body);
  };

  /** Delete ain IP whitelist */
  deletePrivateDatabaseWhitelistByServiceNameAndIp = (
    ip: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`);
  };

  /** Get this object properties */
  getPrivateDatabaseWhitelistByServiceNameAndIp = (
    ip: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseWhitelist> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`);
  };

  /** Alter this object properties */
  updatePrivateDatabaseWhitelistByServiceNameAndIp = (
    ip: string,
    serviceName: string,
    body: HostingPrivateDatabaseWhitelist
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`, body);
  };
}

export { HostingPrivateDatabaseHandler };
