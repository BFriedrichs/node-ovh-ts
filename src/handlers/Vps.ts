/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsModel } from '../models/VpsModel';
import { VpsTaskStateEnum } from '../models/VpsTaskStateEnum';
import { VpsSnapshot } from '../models/VpsSnapshot';
import { VpsVpsTimestampValue } from '../models/VpsVpsTimestampValue';
import { VpsTask } from '../models/VpsTask';
import { VpsDatacenter } from '../models/VpsDatacenter';
import { VpsImage } from '../models/VpsImage';
import { VpsMigrationVPS2016to2020 } from '../models/VpsMigrationVPS2016to2020';
import { SecondaryDnsSecondaryDNS } from '../models/SecondaryDnsSecondaryDNS';
import { VpsOption } from '../models/VpsOption';
import { VpsDisk } from '../models/VpsDisk';
import { VpsOrderRuleDatacenters } from '../models/VpsOrderRuleDatacenters';
import { VpsOrderRuleOSChoices } from '../models/VpsOrderRuleOSChoices';
import { VpsVPS } from '../models/VpsVPS';
import { VpsAutomatedBackup } from '../models/VpsAutomatedBackup';
import { VpsVeeam } from '../models/VpsVeeam';
import { VpsRestoreTypeEnum } from '../models/VpsRestoreTypeEnum';
import { VpsMigrationVPS2018to2020 } from '../models/VpsMigrationVPS2018to2020';
import { NichandleCountryEnum } from '../models/NichandleCountryEnum';
import { VpsVeeamRestorePoint } from '../models/VpsVeeamRestorePoint';
import { VpsAutomatedBackupAttached } from '../models/VpsAutomatedBackupAttached';
import { VpsRestoreStateEnum } from '../models/VpsRestoreStateEnum';
import { VpsIpGeolocationEnum } from '../models/VpsIpGeolocationEnum';
import { SecondaryDnsSecondaryDNSNameServer } from '../models/SecondaryDnsSecondaryDNSNameServer';
import { VpsVpsOptionEnum } from '../models/VpsVpsOptionEnum';
import { VpsTemplate } from '../models/VpsTemplate';
import { VpsSoftware } from '../models/VpsSoftware';
import { VpsIpServiceStatus } from '../models/VpsIpServiceStatus';
import { VpsVncProtocolEnum } from '../models/VpsVncProtocolEnum';
import { VpsVeeamRestoredBackup } from '../models/VpsVeeamRestoredBackup';
import { VpsVeeamExportTypeEnum } from '../models/VpsVeeamExportTypeEnum';
import { ServicesService } from '../models/ServicesService';
import { DedicatedServerBackupFtpAcl } from '../models/DedicatedServerBackupFtpAcl';
import { VpsVnc } from '../models/VpsVnc';
import { NichandleOvhSubsidiaryEnum } from '../models/NichandleOvhSubsidiaryEnum';
import { DedicatedServerTask } from '../models/DedicatedServerTask';
import { VpsVpsMonitoringStatistics } from '../models/VpsVpsMonitoringStatistics';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { VpsTaskTypeEnum } from '../models/VpsTaskTypeEnum';
import { VpsBackupFtp } from '../models/VpsBackupFtp';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { VpsDiskStatisticTypeEnum } from '../models/VpsDiskStatisticTypeEnum';
import { VpsVpsStatisticTypeEnum } from '../models/VpsVpsStatisticTypeEnum';
import { VpsVpsMonitoringPeriodEnum } from '../models/VpsVpsMonitoringPeriodEnum';
import { VpsIp } from '../models/VpsIp';
import OVHBase from '../ovh';

class VpsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/vps');
  };

  /** List all the datacenters for a specific country */
  listDatacenters = (): Promise<string[]> => {
    return this.ovh.request('GET', '/vps/datacenter');
  };

  /** List datacenters with priority and stock status */
  listOrderRuleDatacenters = (): Promise<VpsOrderRuleDatacenters> => {
    return this.ovh.request('GET', '/vps/order/rule/datacenter');
  };

  /** List OS choices with status */
  listOrderRuleOsChoices = (): Promise<VpsOrderRuleOSChoices> => {
    return this.ovh.request('GET', '/vps/order/rule/osChoices');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<VpsVPS> => {
    return this.ovh.request('GET', `/vps/${serviceName}`);
  };

  /** Alter this object properties */
  updateByServiceName = (serviceName: string, body: VpsVPS): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}`, body);
  };

  /** Return all active options for the virtual server */
  getActiveOptionsByServiceName = (serviceName: string): Promise<VpsVpsOptionEnum[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/activeOptions`);
  };

  /** Get this object properties */
  getAutomatedBackupByServiceName = (serviceName: string): Promise<VpsAutomatedBackup> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup`);
  };

  /** Backup attached to your VPS */
  getAutomatedBackupAttachedBackupByServiceName = (
    serviceName: string
  ): Promise<VpsAutomatedBackupAttached[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup/attachedBackup`);
  };

  /** Create a VPS.Task that will umount a restored backup on your VPS */
  createAutomatedBackupDetachBackupByServiceName = (
    serviceName: string,
    body: { restorePoint: Date }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/detachBackup`, body);
  };

  /** Change the scheduled time of your daily backup */
  updateAutomatedBackupRescheduleByServiceName = (
    serviceName: string,
    body: { schedule: Date }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/reschedule`, body);
  };

  /** Creates a VPS.Task that will restore the given restorePoint */
  createAutomatedBackupRestoreByServiceName = (
    serviceName: string,
    body: { changePassword?: boolean; restorePoint: Date; type: VpsRestoreTypeEnum }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/automatedBackup/restore`, body);
  };

  /** Get available Restore Points */
  getAutomatedBackupRestorePointsByServiceName = (serviceName: string): Promise<Date[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/automatedBackup/restorePoints`);
  };

  /** Return all models the virtual server can be upgraded to */
  getAvailableUpgradeByServiceName = (serviceName: string): Promise<VpsModel[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/availableUpgrade`);
  };

  /** Get this object properties */
  getBackupftpByServiceName = (serviceName: string): Promise<VpsBackupFtp> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp`);
  };

  /** List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP */
  listBackupftpAccessByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/access`);
  };

  /** Create a new Backup FTP ACL */
  createBackupftpAccessByServiceName = (
    serviceName: string,
    body: { cifs: boolean; ftp?: boolean; ipBlock: string; nfs: boolean }
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/backupftp/access`, body);
  };

  /** Revoke this ACL */
  deleteBackupftpAccessByServiceNameAndIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/backupftp/access/${ipBlock}`);
  };

  /** Get this object properties */
  getBackupftpAccessByServiceNameAndIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerBackupFtpAcl> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/access/${ipBlock}`);
  };

  /** Alter this object properties */
  updateBackupftpAccessByServiceNameAndIpBlock = (
    ipBlock: string,
    serviceName: string,
    body: DedicatedServerBackupFtpAcl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/backupftp/access/${ipBlock}`, body);
  };

  /** Get all IP blocks that can be used in the ACL */
  getBackupftpAuthorizableBlocksByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/backupftp/authorizableBlocks`);
  };

  /** Change your Backup FTP password */
  updateBackupftpPasswordByServiceName = (serviceName: string): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/backupftp/password`);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/vps/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/vps/${serviceName}/confirmTermination`, body);
  };

  /** Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot */
  createSnapshotByServiceName = (
    serviceName: string,
    body: { description?: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/createSnapshot`, body);
  };

  /** Get this object properties */
  getDatacenterByServiceName = (serviceName: string): Promise<VpsDatacenter> => {
    return this.ovh.request('GET', `/vps/${serviceName}/datacenter`);
  };

  /** Disks associated to this virtual server */
  getDisksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks`);
  };

  /** Get this object properties */
  getDisksByServiceNameAndId = (id: number, serviceName: string): Promise<VpsDisk> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}`);
  };

  /** Alter this object properties */
  updateDisksByServiceNameAndId = (
    id: number,
    serviceName: string,
    body: VpsDisk
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/disks/${id}`, body);
  };

  /** Return many statistics about the disk for a given period */
  getDisksMonitoringByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<VpsVpsTimestampValue> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}/monitoring`);
  };

  /** Return many statistics about the disk at that time */
  getDisksUseByServiceNameAndId = (id: number, serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/disks/${id}/use`);
  };

  /** Get this object properties */
  getDistributionByServiceName = (serviceName: string): Promise<VpsTemplate> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution`);
  };

  /** List available softwares for this template Id */
  listDistributionSoftwaresByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution/software`);
  };

  /** Get this object properties */
  getDistributionSoftwareByServiceNameAndSoftwareId = (
    serviceName: string,
    softwareId: number
  ): Promise<VpsSoftware> => {
    return this.ovh.request('GET', `/vps/${serviceName}/distribution/software/${softwareId}`);
  };

  /** Return the VPS console URL */
  postGetConsoleUrlByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/vps/${serviceName}/getConsoleUrl`);
  };

  /** Images available for this virtual server */
  getImagesAvailableByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/available`);
  };

  /** Get this object properties */
  getImagesAvailableByServiceNameAndId = (id: string, serviceName: string): Promise<VpsImage> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/available/${id}`);
  };

  /** Get this object properties */
  getImagesCurrentByServiceName = (serviceName: string): Promise<VpsImage> => {
    return this.ovh.request('GET', `/vps/${serviceName}/images/current`);
  };

  /** Get the countries you can select for your IPs geolocation */
  getIpCountryAvailableByServiceName = (serviceName: string): Promise<VpsIpGeolocationEnum[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ipCountryAvailable`);
  };

  /** Ips associated to this virtual server */
  getIpsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ips`);
  };

  /** Release a given Ip (Additional Ip) */
  deleteIpsByServiceNameAndIpAddress = (ipAddress: string, serviceName: string): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/ips/${ipAddress}`);
  };

  /** Get this object properties */
  getIpsByServiceNameAndIpAddress = (ipAddress: string, serviceName: string): Promise<VpsIp> => {
    return this.ovh.request('GET', `/vps/${serviceName}/ips/${ipAddress}`);
  };

  /** Alter this object properties */
  updateIpsByServiceNameAndIpAddress = (
    ipAddress: string,
    serviceName: string,
    body: VpsIp
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/ips/${ipAddress}`, body);
  };

  /** Get information on a possible migration of a VPS 2016 to VPS 2020 */
  getMigration2016ByServiceName = (serviceName: string): Promise<VpsMigrationVPS2016to2020> => {
    return this.ovh.request('GET', `/vps/${serviceName}/migration2016`);
  };

  /** Schedule the migration of a VPS 2016 to VPS 2020 */
  postMigration2016ByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/migration2016`);
  };

  /** Get information on a possible migration of a VPS 2016/2018 to VPS 2020 */
  getMigration2018ByServiceName = (serviceName: string): Promise<VpsMigrationVPS2018to2020> => {
    return this.ovh.request('GET', `/vps/${serviceName}/migration2018`);
  };

  /** Schedule the migration of a VPS 2016/2018 to VPS 2020 */
  postMigration2018ByServiceName = (
    serviceName: string,
    body: { newPlan: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/migration2018`, body);
  };

  /** Return all models for the range of the virtual server */
  getModelsByServiceName = (serviceName: string): Promise<VpsModel[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/models`);
  };

  /** Return many statistics about the virtual machine for a given period */
  getMonitoringByServiceName = (serviceName: string): Promise<VpsVpsTimestampValue> => {
    return this.ovh.request('GET', `/vps/${serviceName}/monitoring`);
  };

  /** Return the necessary informations to open a VNC connection to your VPS */
  postOpenConsoleAccessByServiceName = (
    serviceName: string,
    body: { protocol?: VpsVncProtocolEnum }
  ): Promise<VpsVnc> => {
    return this.ovh.request('POST', `/vps/${serviceName}/openConsoleAccess`, body);
  };

  /** List of VPS options */
  listOptionsByServiceName = (serviceName: string): Promise<VpsVpsOptionEnum[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/option`);
  };

  /** Release a given option */
  deleteOptionByServiceNameAndOption = (
    option: VpsVpsOptionEnum,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/option/${option}`);
  };

  /** Get this object properties */
  getOptionByServiceNameAndOption = (
    option: VpsVpsOptionEnum,
    serviceName: string
  ): Promise<VpsOption> => {
    return this.ovh.request('GET', `/vps/${serviceName}/option/${option}`);
  };

  /** Request a reboot of the machine */
  postRebootByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/reboot`);
  };

  /** Reinstall the virtual server */
  postRebuildByServiceName = (
    serviceName: string,
    body: { doNotSendPassword?: boolean; imageId: string; installRTM?: boolean; sshKey?: string }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/rebuild`, body);
  };

  /** Reinstall the virtual server */
  postReinstallByServiceName = (
    serviceName: string,
    body: {
      doNotSendPassword?: boolean;
      language?: string;
      softwareId?: number[];
      sshKey?: string[];
      templateId: number;
    }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/reinstall`, body);
  };

  /** List of secondary dns domain name */
  listSecondaryDnsDomainsByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains`);
  };

  /** add a domain on secondary dns */
  addSecondaryDnsDomainsByServiceName = (
    serviceName: string,
    body: { domain: string; ip?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/vps/${serviceName}/secondaryDnsDomains`, body);
  };

  /** remove this domain */
  deleteSecondaryDnsDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/secondaryDnsDomains/${domain}`);
  };

  /** Get this object properties */
  getSecondaryDnsDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNS> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains/${domain}`);
  };

  /** Alter this object properties */
  updateSecondaryDnsDomainsByServiceNameAndDomain = (
    domain: string,
    serviceName: string,
    body: SecondaryDnsSecondaryDNS
  ): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/secondaryDnsDomains/${domain}`, body);
  };

  /** domain name server informations */
  getSecondaryDnsDomainsDnsServerByServiceNameAndDomain = (
    domain: string,
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNSNameServer> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`);
  };

  /** Secondary nameServer available for your Server */
  getSecondaryDnsNameServerAvailableByServiceName = (
    serviceName: string
  ): Promise<SecondaryDnsSecondaryDNSNameServer> => {
    return this.ovh.request('GET', `/vps/${serviceName}/secondaryDnsNameServerAvailable`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/vps/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/serviceInfos`, body);
  };

  /** Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory. */
  postSetPasswordByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/setPassword`);
  };

  /** Creates a vps.Task that will delete the Snapshot */
  deleteSnapshotByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/snapshot`);
  };

  /** Get this object properties */
  getSnapshotByServiceName = (serviceName: string): Promise<VpsSnapshot> => {
    return this.ovh.request('GET', `/vps/${serviceName}/snapshot`);
  };

  /** Alter this object properties */
  updateSnapshotByServiceName = (serviceName: string, body: VpsSnapshot): Promise<void> => {
    return this.ovh.request('PUT', `/vps/${serviceName}/snapshot`, body);
  };

  /** Revert the Virtual Server to this snapshot */
  postSnapshotRevertByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/snapshot/revert`);
  };

  /** Request the machine to start */
  postStartByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/start`);
  };

  /** Return monitoring statistics about the virtual machine */
  getStatisticsByServiceName = (serviceName: string): Promise<VpsVpsMonitoringStatistics> => {
    return this.ovh.request('GET', `/vps/${serviceName}/statistics`);
  };

  /** Give the status of the services of the main IP */
  getStatusByServiceName = (serviceName: string): Promise<VpsIpServiceStatus> => {
    return this.ovh.request('GET', `/vps/${serviceName}/status`);
  };

  /** Request the machine to stop */
  postStopByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/stop`);
  };

  /** Tasks associated to this virtual server */
  getTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getTasksByServiceNameAndId = (id: number, serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('GET', `/vps/${serviceName}/tasks/${id}`);
  };

  /** Templates available for this virtual server */
  getTemplatesByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates`);
  };

  /** Get this object properties */
  getTemplatesByServiceNameAndId = (id: number, serviceName: string): Promise<VpsTemplate> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}`);
  };

  /** List available softwares for this template Id */
  listTemplatesSoftwaresByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}/software`);
  };

  /** Get this object properties */
  getTemplatesSoftwareByServiceNameAndIdAndSoftwareId = (
    id: number,
    serviceName: string,
    softwareId: number
  ): Promise<VpsSoftware> => {
    return this.ovh.request('GET', `/vps/${serviceName}/templates/${id}/software/${softwareId}`);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/vps/${serviceName}/terminate`);
  };

  /** Return many statistics about the virtual machine at that time */
  getUseByServiceName = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/vps/${serviceName}/use`);
  };

  /** Get this object properties */
  getVeeamByServiceName = (serviceName: string): Promise<VpsVeeam> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam`);
  };

  /** Veeam restore points for the VPS */
  getVeeamRestorePointsByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restorePoints`);
  };

  /** Get this object properties */
  getVeeamRestorePointsByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<VpsVeeamRestorePoint> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restorePoints/${id}`);
  };

  /** Creates a VPS.Task that will restore the given restorePoint */
  createVeeamRestorePointsRestoreByServiceNameAndId = (
    id: number,
    serviceName: string,
    body: { changePassword?: boolean; export?: VpsVeeamExportTypeEnum; full: boolean }
  ): Promise<VpsTask> => {
    return this.ovh.request('POST', `/vps/${serviceName}/veeam/restorePoints/${id}/restore`, body);
  };

  /** Creates a VPS.Task that will unmount the backup */
  deleteVeeamRestoredBackupByServiceName = (serviceName: string): Promise<VpsTask> => {
    return this.ovh.request('DELETE', `/vps/${serviceName}/veeam/restoredBackup`);
  };

  /** Get this object properties */
  getVeeamRestoredBackupByServiceName = (serviceName: string): Promise<VpsVeeamRestoredBackup> => {
    return this.ovh.request('GET', `/vps/${serviceName}/veeam/restoredBackup`);
  };
}

export { VpsHandler };
