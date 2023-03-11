/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerBackupFtpAcl } from '../models/DedicatedServerBackupFtpAcl';
import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import { ServicesService } from '../models/ServicesService';
import { DedicatedHousingHousing } from '../models/DedicatedHousingHousing';
import { DedicatedHousingTask } from '../models/DedicatedHousingTask';
import { DedicatedServerBackupFtp } from '../models/DedicatedServerBackupFtp';
import { DedicatedHousingTaskFunctionEnum } from '../models/DedicatedHousingTaskFunctionEnum';
import { DedicatedServerTask } from '../models/DedicatedServerTask';
import { DedicatedHousingApcOrderable } from '../models/DedicatedHousingApcOrderable';
import OVHBase from '../ovh';

class DedicatedHousingHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getHousing = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/housing');
  };

  /** Get this object properties */
  getHousingServiceName = (serviceName: string): Promise<DedicatedHousingHousing> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}`);
  };

  /** Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED */
  deleteHousingServiceNameFeaturesBackupFTP = (
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('DELETE', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** Get this object properties */
  getHousingServiceNameFeaturesBackupFTP = (
    serviceName: string
  ): Promise<DedicatedServerBackupFtp> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** Create a new Backup FTP space */
  postHousingServiceNameFeaturesBackupFTP = (serviceName: string): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP */
  getHousingServiceNameFeaturesBackupFTPAccess = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/features/backupFTP/access`);
  };

  /** Create a new Backup FTP ACL */
  postHousingServiceNameFeaturesBackupFTPAccess = (
    serviceName: string,
    body: { cifs: boolean; ftp?: boolean; ipBlock: string; nfs: boolean }
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/housing/${serviceName}/features/backupFTP/access`,
      body
    );
  };

  /** Revoke this ACL */
  deleteHousingServiceNameFeaturesBackupFTPAccessIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`
    );
  };

  /** Get this object properties */
  getHousingServiceNameFeaturesBackupFTPAccessIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerBackupFtpAcl> => {
    return this.ovh.request(
      'GET',
      `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`
    );
  };

  /** Alter this object properties */
  putHousingServiceNameFeaturesBackupFTPAccessIpBlock = (
    ipBlock: string,
    serviceName: string,
    body: DedicatedServerBackupFtpAcl
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`,
      body
    );
  };

  /** Get all IP blocks that can be used in the ACL */
  getHousingServiceNameFeaturesBackupFTPAuthorizableBlocks = (
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/housing/${serviceName}/features/backupFTP/authorizableBlocks`
    );
  };

  /** Change your Backup FTP password */
  postHousingServiceNameFeaturesBackupFTPPassword = (
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/housing/${serviceName}/features/backupFTP/password`
    );
  };

  /** Is an APC orderable for this housing bay */
  getHousingServiceNameOrderableAPC = (
    serviceName: string
  ): Promise<DedicatedHousingApcOrderable> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/orderable/APC`);
  };

  /** Get this object properties */
  getHousingServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putHousingServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/housing/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getHousingServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/task`);
  };

  /** Get this object properties */
  getHousingServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedHousingTask> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/task/${taskId}`);
  };

  /** this action stop the task progression if it's possible */
  postHousingServiceNameTaskTaskIdCancel = (serviceName: string, taskId: number): Promise<void> => {
    return this.ovh.request('POST', `/dedicated/housing/${serviceName}/task/${taskId}/cancel`);
  };
}

export default DedicatedHousingHandler;
