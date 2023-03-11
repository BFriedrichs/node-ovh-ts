/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsMigrationVPS2018to2020 } from '../models/VpsMigrationVPS2018to2020';
import { VpsVpsTimestampValue } from '../models/VpsVpsTimestampValue';
import { VpsDatacenter } from '../models/VpsDatacenter';
import { VpsOrderRuleOSChoices } from '../models/VpsOrderRuleOSChoices';
import { VpsTaskTypeEnum } from '../models/VpsTaskTypeEnum';
import { VpsVeeamExportTypeEnum } from '../models/VpsVeeamExportTypeEnum';
import { VpsAutomatedBackup } from '../models/VpsAutomatedBackup';
import { VpsIp } from '../models/VpsIp';
import { VpsVpsOptionEnum } from '../models/VpsVpsOptionEnum';
import { VpsMigrationVPS2016to2020 } from '../models/VpsMigrationVPS2016to2020';
import { VpsVncProtocolEnum } from '../models/VpsVncProtocolEnum';
import { SecondaryDnsSecondaryDNS } from '../models/SecondaryDnsSecondaryDNS';
import { SecondaryDnsSecondaryDNSNameServer } from '../models/SecondaryDnsSecondaryDNSNameServer';
import { VpsBackupFtp } from '../models/VpsBackupFtp';
import { VpsVnc } from '../models/VpsVnc';
import { VpsVpsMonitoringStatistics } from '../models/VpsVpsMonitoringStatistics';
import { VpsDiskStatisticTypeEnum } from '../models/VpsDiskStatisticTypeEnum';
import { VpsImage } from '../models/VpsImage';
import { VpsRestoreStateEnum } from '../models/VpsRestoreStateEnum';
import { DedicatedServerTask } from '../models/DedicatedServerTask';
import { VpsTaskStateEnum } from '../models/VpsTaskStateEnum';
import { NichandleCountryEnum } from '../models/NichandleCountryEnum';
import { VpsVPS } from '../models/VpsVPS';
import { ServicesService } from '../models/ServicesService';
import { VpsModel } from '../models/VpsModel';
import { VpsIpServiceStatus } from '../models/VpsIpServiceStatus';
import { VpsIpGeolocationEnum } from '../models/VpsIpGeolocationEnum';
import { NichandleOvhSubsidiaryEnum } from '../models/NichandleOvhSubsidiaryEnum';
import { VpsVeeam } from '../models/VpsVeeam';
import { VpsVeeamRestorePoint } from '../models/VpsVeeamRestorePoint';
import { VpsTask } from '../models/VpsTask';
import { VpsDisk } from '../models/VpsDisk';
import { VpsOrderRuleDatacenters } from '../models/VpsOrderRuleDatacenters';
import { VpsAutomatedBackupAttached } from '../models/VpsAutomatedBackupAttached';
import { DedicatedServerBackupFtpAcl } from '../models/DedicatedServerBackupFtpAcl';
import { VpsVpsMonitoringPeriodEnum } from '../models/VpsVpsMonitoringPeriodEnum';
import { VpsOption } from '../models/VpsOption';
import { VpsRestoreTypeEnum } from '../models/VpsRestoreTypeEnum';
import { VpsTemplate } from '../models/VpsTemplate';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { VpsSnapshot } from '../models/VpsSnapshot';
import { VpsVpsStatisticTypeEnum } from '../models/VpsVpsStatisticTypeEnum';
import { VpsSoftware } from '../models/VpsSoftware';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { VpsVeeamRestoredBackup } from '../models/VpsVeeamRestoredBackup';
import OVHBase from '../ovh';

class VpsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/vps');
  };

  /** List all the datacenters for a specific country */
  getDatacenter = (): Promise<string> => {
    return this.ovh.request('GET', '/vps/datacenter');
  };

  /** List datacenters with priority and stock status */
  getOrderRuleDatacenter = (): Promise<VpsOrderRuleDatacenters> => {
    return this.ovh.request('GET', '/vps/order/rule/datacenter');
  };

  /** List OS choices with status */
  getOrderRuleOsChoices = (): Promise<VpsOrderRuleOSChoices> => {
    return this.ovh.request('GET', '/vps/order/rule/osChoices');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<VpsVPS> => {
    return this.ovh.request('GET', `/vps/${serviceName}`);
  };

  /** Alter this object properties */
  putServiceName = (serviceName: string, body: VpsVPS): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}`, body);
  };

  /** Return all active options for the virtual server */
  getServiceNameActiveOptions = (serviceName: string): Promise<VpsVpsOptionEnum> => {
    return this.ovh.request('GET', `/vps/${serviceName}/activeOptions`);
  };

  /** Get this object properties */
  getServiceNameAutomatedBackup = (serviceName: string): Promise<VpsAutomatedBackup> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup`);
  };

  /** Backup attached to your VPS */
  getServiceNameAutomatedBackupAttachedBackup = (
    serviceName: string
  ): Promise<VpsAutomatedBackupAttached> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup/attachedBackup`);
  };

  /** Create a VPS.Task that will umount a restored backup on your VPS */
  postServiceNameAutomatedBackupDetachBackup = (
    serviceName: string,
    body: { restorePoint: Date }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/detachBackup`, body);
  };

  /** Change the scheduled time of your daily backup */
  postServiceNameAutomatedBackupReschedule = (
    serviceName: string,
    body: { schedule: Date }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/reschedule`, body);
  };

  /** Creates a VPS.Task that will restore the given restorePoint */
  postServiceNameAutomatedBackupRestore = (
    serviceName: string,
    body: { changePassword?: boolean; restorePoint: Date; type: VpsRestoreTypeEnum }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/restore`, body);
  };

  /** Get available Restore Points */
  getServiceNameAutomatedBackupRestorePoints = (serviceName: string): Promise<Date> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup/restorePoints`);
  };

  /** Return all models the virtual server can be upgraded to */
  getServiceNameAvailableUpgrade = (serviceName: string): Promise<VpsModel> => {
    return this.ovh.request('GET', `/vps/${serviceName}/availableUpgrade`);
  };

  /** Get this object properties */
  getServiceNameBackupftp = (serviceName: string): Promise<VpsBackupFtp> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp`);
  };

  /** List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP */
  getServiceNameBackupftpAccess = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/access`);
  };

  /** Create a new Backup FTP ACL */
  postServiceNameBackupftpAccess = (
    serviceName: string,
    body: { cifs: boolean; ftp?: boolean; ipBlock: string; nfs: boolean }
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/backupftp/access`, body);
  };

  /** Revoke this ACL */
  deleteServiceNameBackupftpAccessIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/backupftp/access/${ipBlock}`);
  };

  /** Get this object properties */
  getServiceNameBackupftpAccessIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerBackupFtpAcl> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/access/${ipBlock}`);
  };

  /** Alter this object properties */
  putServiceNameBackupftpAccessIpBlock = (
    ipBlock: string,
    serviceName: string,
    body: DedicatedServerBackupFtpAcl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/backupftp/access/${ipBlock}`, body);
  };

  /** Get all IP blocks that can be used in the ACL */
  getServiceNameBackupftpAuthorizableBlocks = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/authorizableBlocks`);
  };

  /** Change your Backup FTP password */
  postServiceNameBackupftpPassword = (serviceName: string): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/backupftp/password`);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/vps/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/vps/${serviceName}/confirmTermination`, body);
  };

  /** Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot */
  postServiceNameCreateSnapshot = (
    serviceName: string,
    body: { description?: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/createSnapshot`, body);
  };

  /** Get this object properties */
  getServiceNameDatacenter = (serviceName: string): Promise<VpsDatacenter> => {
    return this.ovh.request('GET', `/vps/${serviceName}/datacenter`);
  };

  /** Disks associated to this virtual server */
  getServiceNameDisks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks`);
  };

  /** Get this object properties */
  getServiceNameDisksId = (id: number, serviceName: string): Promise<VpsDisk> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}`);
  };

  /** Alter this object properties */
  putServiceNameDisksId = (id: number, serviceName: string, body: VpsDisk): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/disks/${id}`, body);
  };

  /** Return many statistics about the disk for a given period */
  getServiceNameDisksIdMonitoring = (
    id: number,
    serviceName: string
  ): Promise<VpsVpsTimestampValue> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}/monitoring`);
  };

  /** Return many statistics about the disk at that time */
  getServiceNameDisksIdUse = (id: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}/use`);
  };

  /** Get this object properties */
  getServiceNameDistribution = (serviceName: string): Promise<VpsTemplate> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution`);
  };

  /** List available softwares for this template Id */
  getServiceNameDistributionSoftware = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution/software`);
  };

  /** Get this object properties */
  getServiceNameDistributionSoftwareSoftwareId = (
    serviceName: string,
    softwareId: number
  ): Promise<VpsSoftware> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution/software/${softwareId}`);
  };

  /** Return the VPS console URL */
  postServiceNameGetConsoleUrl = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/vps/${serviceName}/getConsoleUrl`);
  };

  /** Images available for this virtual server */
  getServiceNameImagesAvailable = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/available`);
  };

  /** Get this object properties */
  getServiceNameImagesAvailableId = (id: string, serviceName: string): Promise<VpsImage> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/available/${id}`);
  };

  /** Get this object properties */
  getServiceNameImagesCurrent = (serviceName: string): Promise<VpsImage> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/current`);
  };

  /** Get the countries you can select for your IPs geolocation */
  getServiceNameIpCountryAvailable = (serviceName: string): Promise<VpsIpGeolocationEnum> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ipCountryAvailable`);
  };

  /** Ips associated to this virtual server */
  getServiceNameIps = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ips`);
  };

  /** Release a given Ip (Additional Ip) */
  deleteServiceNameIpsIpAddress = (ipAddress: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/ips/${ipAddress}`);
  };

  /** Get this object properties */
  getServiceNameIpsIpAddress = (ipAddress: string, serviceName: string): Promise<VpsIp> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ips/${ipAddress}`);
  };

  /** Alter this object properties */
  putServiceNameIpsIpAddress = (
    ipAddress: string,
    serviceName: string,
    body: VpsIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/ips/${ipAddress}`, body);
  };

  /** Get information on a possible migration of a VPS 2016 to VPS 2020 */
  getServiceNameMigration2016 = (serviceName: string): Promise<VpsMigrationVPS2016to2020> => {
    return this.ovh.request('GET', `/vps/${serviceName}/migration2016`);
  };

  /** Schedule the migration of a VPS 2016 to VPS 2020 */
  postServiceNameMigration2016 = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/migration2016`);
  };

  /** Get information on a possible migration of a VPS 2016/2018 to VPS 2020 */
  getServiceNameMigration2018 = (serviceName: string): Promise<VpsMigrationVPS2018to2020> => {
    return this.ovh.request('GET', `/vps/${serviceName}/migration2018`);
  };

  /** Schedule the migration of a VPS 2016/2018 to VPS 2020 */
  postServiceNameMigration2018 = (
    serviceName: string,
    body: { newPlan: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/migration2018`, body);
  };

  /** Return all models for the range of the virtual server */
  getServiceNameModels = (serviceName: string): Promise<VpsModel> => {
    return this.ovh.request('GET', `/vps/${serviceName}/models`);
  };

  /** Return many statistics about the virtual machine for a given period */
  getServiceNameMonitoring = (serviceName: string): Promise<VpsVpsTimestampValue> => {
    return this.ovh.request('GET', `/vps/${serviceName}/monitoring`);
  };

  /** Return the necessary informations to open a VNC connection to your VPS */
  postServiceNameOpenConsoleAccess = (
    serviceName: string,
    body: { protocol?: VpsVncProtocolEnum }
  ): Promise<VpsVnc> => {
    return this.ovh.request('POST', `/vps/${serviceName}/openConsoleAccess`, body);
  };

  /** List of VPS options */
  getServiceNameOption = (serviceName: string): Promise<VpsVpsOptionEnum> => {
    return this.ovh.request('GET', `/vps/${serviceName}/option`);
  };

  /** Release a given option */
  deleteServiceNameOptionOption = (
    option: VpsVpsOptionEnum,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/option/${option}`);
  };

  /** Get this object properties */
  getServiceNameOptionOption = (
    option: VpsVpsOptionEnum,
    serviceName: string
  ): Promise<VpsOption> => {
    return this.ovh.request('GET', `/vps/${serviceName}/option/${option}`);
  };

  /** Request a reboot of the machine */
  postServiceNameReboot = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/reboot`);
  };

  /** Reinstall the virtual server */
  postServiceNameRebuild = (
    serviceName: string,
    body: { doNotSendPassword?: boolean; imageId: string; installRTM?: boolean; sshKey?: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/rebuild`, body);
  };

  /** Reinstall the virtual server */
  postServiceNameReinstall = (
    serviceName: string,
    body: {
      doNotSendPassword?: boolean;
      language?: string;
      softwareId?: number;
      sshKey?: string;
      templateId: number;
    }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/reinstall`, body);
  };

  /** List of secondary dns domain name */
  getServiceNameSecondaryDnsDomains = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains`);
  };

  /** add a domain on secondary dns */
  postServiceNameSecondaryDnsDomains = (
    serviceName: string,
    body: { domain: string; ip?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/vps/${serviceName}/secondaryDnsDomains`, body);
  };

  /** remove this domain */
  deleteServiceNameSecondaryDnsDomainsDomain = (
    domain: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/secondaryDnsDomains/${domain}`);
  };

  /** Get this object properties */
  getServiceNameSecondaryDnsDomainsDomain = (
    domain: string,
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNS> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains/${domain}`);
  };

  /** Alter this object properties */
  putServiceNameSecondaryDnsDomainsDomain = (
    domain: string,
    serviceName: string,
    body: SecondaryDnsSecondaryDNS
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/secondaryDnsDomains/${domain}`, body);
  };

  /** domain name server informations */
  getServiceNameSecondaryDnsDomainsDomainDnsServer = (
    domain: string,
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNSNameServer> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`);
  };

  /** Secondary nameServer available for your Server */
  getServiceNameSecondaryDnsNameServerAvailable = (
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNSNameServer> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsNameServerAvailable`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/vps/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/serviceInfos`, body);
  };

  /** Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory. */
  postServiceNameSetPassword = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/setPassword`);
  };

  /** Creates a vps.Task that will delete the Snapshot */
  deleteServiceNameSnapshot = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/snapshot`);
  };

  /** Get this object properties */
  getServiceNameSnapshot = (serviceName: string): Promise<VpsSnapshot> => {
    return this.ovh.request('GET', `/vps/${serviceName}/snapshot`);
  };

  /** Alter this object properties */
  putServiceNameSnapshot = (serviceName: string, body: VpsSnapshot): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/snapshot`, body);
  };

  /** Revert the Virtual Server to this snapshot */
  postServiceNameSnapshotRevert = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/snapshot/revert`);
  };

  /** Request the machine to start */
  postServiceNameStart = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/start`);
  };

  /** Return monitoring statistics about the virtual machine */
  getServiceNameStatistics = (serviceName: string): Promise<VpsVpsMonitoringStatistics> => {
    return this.ovh.request('GET', `/vps/${serviceName}/statistics`);
  };

  /** Give the status of the services of the main IP */
  getServiceNameStatus = (serviceName: string): Promise<VpsIpServiceStatus> => {
    return this.ovh.request('GET', `/vps/${serviceName}/status`);
  };

  /** Request the machine to stop */
  postServiceNameStop = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/stop`);
  };

  /** Tasks associated to this virtual server */
  getServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getServiceNameTasksId = (id: number, serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('GET', `/vps/${serviceName}/tasks/${id}`);
  };

  /** Templates available for this virtual server */
  getServiceNameTemplates = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates`);
  };

  /** Get this object properties */
  getServiceNameTemplatesId = (id: number, serviceName: string): Promise<VpsTemplate> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}`);
  };

  /** List available softwares for this template Id */
  getServiceNameTemplatesIdSoftware = (id: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}/software`);
  };

  /** Get this object properties */
  getServiceNameTemplatesIdSoftwareSoftwareId = (
    id: number,
    serviceName: string,
    softwareId: number
  ): Promise<VpsSoftware> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}/software/${softwareId}`);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/vps/${serviceName}/terminate`);
  };

  /** Return many statistics about the virtual machine at that time */
  getServiceNameUse = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/use`);
  };

  /** Get this object properties */
  getServiceNameVeeam = (serviceName: string): Promise<VpsVeeam> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam`);
  };

  /** Veeam restore points for the VPS */
  getServiceNameVeeamRestorePoints = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restorePoints`);
  };

  /** Get this object properties */
  getServiceNameVeeamRestorePointsId = (
    id: number,
    serviceName: string
  ): Promise<VpsVeeamRestorePoint> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restorePoints/${id}`);
  };

  /** Creates a VPS.Task that will restore the given restorePoint */
  postServiceNameVeeamRestorePointsIdRestore = (
    id: number,
    serviceName: string,
    body: { changePassword?: boolean; export?: VpsVeeamExportTypeEnum; full: boolean }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/veeam/restorePoints/${id}/restore`, body);
  };

  /** Creates a VPS.Task that will unmount the backup */
  deleteServiceNameVeeamRestoredBackup = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/veeam/restoredBackup`);
  };

  /** Get this object properties */
  getServiceNameVeeamRestoredBackup = (serviceName: string): Promise<VpsVeeamRestoredBackup> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restoredBackup`);
  };
}

export default VpsHandler;
