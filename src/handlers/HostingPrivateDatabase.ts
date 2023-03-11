/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseOom } from '../models/HostingPrivateDatabaseOom';
import { HostingPrivateDatabaseDatabaseExtensionStatus } from '../models/HostingPrivateDatabaseDatabaseExtensionStatus';
import { HostingPrivateDatabaseGrantGrantEnum } from '../models/HostingPrivateDatabaseGrantGrantEnum';
import { HostingPrivateDatabaseWhitelist } from '../models/HostingPrivateDatabaseWhitelist';
import { HostingPrivateDatabaseService } from '../models/HostingPrivateDatabaseService';
import { HostingPrivateDatabaseDatabaseDump } from '../models/HostingPrivateDatabaseDatabaseDump';
import { HostingPrivateDatabaseUser } from '../models/HostingPrivateDatabaseUser';
import { HostingPrivateDatabaseTask } from '../models/HostingPrivateDatabaseTask';
import { HostingPrivateDatabaseDatabase } from '../models/HostingPrivateDatabaseDatabase';
import { HostingPrivateDatabaseTaskStatusEnum } from '../models/HostingPrivateDatabaseTaskStatusEnum';
import { HostingPrivateDatabaseAvailableVersionEnum } from '../models/HostingPrivateDatabaseAvailableVersionEnum';
import { ServicesService } from '../models/ServicesService';
import { HostingPrivateDatabaseAvailableOrderCapacities } from '../models/HostingPrivateDatabaseAvailableOrderCapacities';
import { HostingPrivateDatabaseDump } from '../models/HostingPrivateDatabaseDump';
import { HostingPrivateDatabaseTemporaryLogsLink } from '../models/HostingPrivateDatabaseTemporaryLogsLink';
import { HostingPrivateDatabaseDatabaseExtension } from '../models/HostingPrivateDatabaseDatabaseExtension';
import { HostingPrivateDatabaseTaskFunctionEnum } from '../models/HostingPrivateDatabaseTaskFunctionEnum';
import { HostingPrivateDatabaseCpuThrottle } from '../models/HostingPrivateDatabaseCpuThrottle';
import { HostingPrivateDatabaseWebhostingNetwork } from '../models/HostingPrivateDatabaseWebhostingNetwork';
import { HostingPrivateDatabaseGrant } from '../models/HostingPrivateDatabaseGrant';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { HostingPrivateDatabaseConfiguration } from '../models/HostingPrivateDatabaseConfiguration';
import { HostingPrivateDatabaseOfferEnum } from '../models/HostingPrivateDatabaseOfferEnum';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class HostingPrivateDatabaseHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getPrivateDatabase = (): Promise<string> => {
    return this.ovh.request('GET', '/hosting/privateDatabase');
  };

  /** Get available order capacitie */
  getPrivateDatabaseAvailableOrderCapacities =
    (): Promise<HostingPrivateDatabaseAvailableOrderCapacities> => {
      return this.ovh.request('GET', '/hosting/privateDatabase/availableOrderCapacities');
    };

  /** Get this object properties */
  getPrivateDatabaseServiceName = (serviceName: string): Promise<HostingPrivateDatabaseService> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}`);
  };

  /** Alter this object properties */
  putPrivateDatabaseServiceName = (
    serviceName: string,
    body: HostingPrivateDatabaseService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}`, body);
  };

  /** Get the availables versions for this private database */
  getPrivateDatabaseServiceNameAvailableVersions = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseAvailableVersionEnum> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/availableVersions`);
  };

  /** Launch a contact change procedure */
  postPrivateDatabaseServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/changeContact`, body);
  };

  /** Change your ftp admin password */
  postPrivateDatabaseServiceNameChangeFtpPassword = (
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
  postPrivateDatabaseServiceNameChangeVersion = (
    serviceName: string,
    body: { version: HostingPrivateDatabaseAvailableVersionEnum }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/changeVersion`, body);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameConfig = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseConfiguration> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/config`);
  };

  /** Update the configuration */
  postPrivateDatabaseServiceNameConfigUpdate = (
    serviceName: string,
    body: { parameters: string }
  ): Promise<HostingPrivateDatabaseConfiguration> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/config/update`, body);
  };

  /** Confirm termination of your service */
  postPrivateDatabaseServiceNameConfirmTermination = (
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
  getPrivateDatabaseServiceNameCpuThrottle = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseCpuThrottle> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/cpuThrottle`);
  };

  /** Databases linked to your private database service */
  getPrivateDatabaseServiceNameDatabase = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/database`);
  };

  /** Create a new database on your private database service */
  postPrivateDatabaseServiceNameDatabase = (
    serviceName: string,
    body: { databaseName: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/database`, body);
  };

  /** Delete the database */
  deletePrivateDatabaseServiceNameDatabaseDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request(
      'DELETE',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameDatabaseDatabaseName = (
    databaseName: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDatabase> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}`
    );
  };

  /** Dump available for your databases */
  getPrivateDatabaseServiceNameDatabaseDatabaseNameDump = (
    databaseName: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump`
    );
  };

  /** Request the dump of this database ( an email will be send with a link available 30 days ) */
  postPrivateDatabaseServiceNameDatabaseDatabaseNameDump = (
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
  deletePrivateDatabaseServiceNameDatabaseDatabaseNameDumpId = (
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
  getPrivateDatabaseServiceNameDatabaseDatabaseNameDumpId = (
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
  postPrivateDatabaseServiceNameDatabaseDatabaseNameDumpIdRestore = (
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
  getPrivateDatabaseServiceNameDatabaseDatabaseNameExtension = (
    databaseName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension`
    );
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameDatabaseDatabaseNameExtensionExtensionName = (
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
  postPrivateDatabaseServiceNameDatabaseDatabaseNameExtensionExtensionNameDisable = (
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
  postPrivateDatabaseServiceNameDatabaseDatabaseNameExtensionExtensionNameEnable = (
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
  postPrivateDatabaseServiceNameDatabaseDatabaseNameImport = (
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
  postPrivateDatabaseServiceNameDatabaseWizard = (
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
  getPrivateDatabaseServiceNameDump = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/dump`);
  };

  /** Delete dump before expiration date */
  deletePrivateDatabaseServiceNameDumpDumpId = (
    dumpId: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameDumpDumpId = (
    dumpId: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseDump> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`);
  };

  /** Request the restore from this dump */
  postPrivateDatabaseServiceNameDumpDumpIdRestore = (
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
  postPrivateDatabaseServiceNameGenerateTemporaryLogsLink = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTemporaryLogsLink> => {
    return this.ovh.request(
      'POST',
      `/hosting/privateDatabase/${serviceName}/generateTemporaryLogsLink`
    );
  };

  /** List of privatesql OOM kill */
  getPrivateDatabaseServiceNameOom = (serviceName: string): Promise<HostingPrivateDatabaseOom> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/oom`);
  };

  /** Refresh the quota of your private database */
  postPrivateDatabaseServiceNameQuotaRefresh = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/quotaRefresh`);
  };

  /** Restart the private database */
  postPrivateDatabaseServiceNameRestart = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/restart`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putPrivateDatabaseServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}/serviceInfos`, body);
  };

  /** Start the private database */
  postPrivateDatabaseServiceNameStart = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/start`);
  };

  /** Stop the private database */
  postPrivateDatabaseServiceNameStop = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/stop`);
  };

  /** Tasks attached to your private database service */
  getPrivateDatabaseServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameTasksId = (
    id: number,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/tasks/${id}`);
  };

  /** Terminate your service */
  postPrivateDatabaseServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/terminate`);
  };

  /** User allowed to connect on your databases */
  getPrivateDatabaseServiceNameUser = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/user`);
  };

  /** Create a new user on your service */
  postPrivateDatabaseServiceNameUser = (
    serviceName: string,
    body: { password: string; userName: string }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/user`, body);
  };

  /** Delete a user */
  deletePrivateDatabaseServiceNameUserUserName = (
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/user/${userName}`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameUserUserName = (
    serviceName: string,
    userName: string
  ): Promise<HostingPrivateDatabaseUser> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/user/${userName}`);
  };

  /** Request a change password for a user */
  postPrivateDatabaseServiceNameUserUserNameChangePassword = (
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
  getPrivateDatabaseServiceNameUserUserNameGrant = (
    serviceName: string,
    userName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`
    );
  };

  /** Add grant on a database */
  postPrivateDatabaseServiceNameUserUserNameGrant = (
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
  deletePrivateDatabaseServiceNameUserUserNameGrantDatabaseName = (
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
  getPrivateDatabaseServiceNameUserUserNameGrantDatabaseName = (
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
  postPrivateDatabaseServiceNameUserUserNameGrantDatabaseNameUpdate = (
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
  deletePrivateDatabaseServiceNameWebhostingNetwork = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameWebhostingNetwork = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseWebhostingNetwork> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** Enable Webhosting network */
  postPrivateDatabaseServiceNameWebhostingNetwork = (
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/webhostingNetwork`);
  };

  /** List linked webs */
  getPrivateDatabaseServiceNameWebs = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/webs`);
  };

  /** Whitelist allowed on your privatesql */
  getPrivateDatabaseServiceNameWhitelist = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/whitelist`);
  };

  /** Create a new IP whitelist */
  postPrivateDatabaseServiceNameWhitelist = (
    serviceName: string,
    body: { ip: string; name?: string; service?: boolean; sftp?: boolean }
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('POST', `/hosting/privateDatabase/${serviceName}/whitelist`, body);
  };

  /** Delete ain IP whitelist */
  deletePrivateDatabaseServiceNameWhitelistIp = (
    ip: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseTask> => {
    return this.ovh.request('DELETE', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`);
  };

  /** Get this object properties */
  getPrivateDatabaseServiceNameWhitelistIp = (
    ip: string,
    serviceName: string
  ): Promise<HostingPrivateDatabaseWhitelist> => {
    return this.ovh.request('GET', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`);
  };

  /** Alter this object properties */
  putPrivateDatabaseServiceNameWhitelistIp = (
    ip: string,
    serviceName: string,
    body: HostingPrivateDatabaseWhitelist
  ): Promise<void> => {
    return this.ovh.request('PUT', `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`, body);
  };
}

export default HostingPrivateDatabaseHandler;
