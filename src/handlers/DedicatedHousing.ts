/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedHousingTaskFunctionEnum } from '../models/DedicatedHousingTaskFunctionEnum';
import { DedicatedServerBackupFtp } from '../models/DedicatedServerBackupFtp';
import { DedicatedHousingTask } from '../models/DedicatedHousingTask';
import { DedicatedHousingHousing } from '../models/DedicatedHousingHousing';
import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import { DedicatedHousingApcOrderable } from '../models/DedicatedHousingApcOrderable';
import { ServicesService } from '../models/ServicesService';
import { DedicatedServerBackupFtpAcl } from '../models/DedicatedServerBackupFtpAcl';
import { DedicatedServerTask } from '../models/DedicatedServerTask';
import OVHBase from '../ovh';

class DedicatedHousingHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listHousings = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/housing');
  };

  /** Get this object properties */
  getHousingByServiceName = (serviceName: string): Promise<DedicatedHousingHousing> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}`);
  };

  /** Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED */
  deleteHousingFeaturesBackupFTPByServiceName = (
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('DELETE', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** Get this object properties */
  getHousingFeaturesBackupFTPByServiceName = (
    serviceName: string
  ): Promise<DedicatedServerBackupFtp> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** Create a new Backup FTP space */
  createHousingFeaturesBackupFTPByServiceName = (
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request('POST', `/dedicated/housing/${serviceName}/features/backupFTP`);
  };

  /** List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP */
  listHousingFeaturesBackupFTPAccessByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/features/backupFTP/access`);
  };

  /** Create a new Backup FTP ACL */
  createHousingFeaturesBackupFTPAccessByServiceName = (
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
  deleteHousingFeaturesBackupFTPAccessByServiceNameAndIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`
    );
  };

  /** Get this object properties */
  getHousingFeaturesBackupFTPAccessByServiceNameAndIpBlock = (
    ipBlock: string,
    serviceName: string
  ): Promise<DedicatedServerBackupFtpAcl> => {
    return this.ovh.request(
      'GET',
      `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`
    );
  };

  /** Alter this object properties */
  updateHousingFeaturesBackupFTPAccessByServiceNameAndIpBlock = (
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
  getHousingFeaturesBackupFTPAuthorizableBlocksByServiceName = (
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/housing/${serviceName}/features/backupFTP/authorizableBlocks`
    );
  };

  /** Change your Backup FTP password */
  updateHousingFeaturesBackupFTPPasswordByServiceName = (
    serviceName: string
  ): Promise<DedicatedServerTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/housing/${serviceName}/features/backupFTP/password`
    );
  };

  /** Is an APC orderable for this housing bay */
  getHousingOrderableAPCByServiceName = (
    serviceName: string
  ): Promise<DedicatedHousingApcOrderable> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/orderable/APC`);
  };

  /** Get this object properties */
  getHousingServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateHousingServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/housing/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getHousingTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/task`);
  };

  /** Get this object properties */
  getHousingTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedHousingTask> => {
    return this.ovh.request('GET', `/dedicated/housing/${serviceName}/task/${taskId}`);
  };

  /** this action stop the task progression if it's possible */
  postHousingTaskCancelByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<void> => {
    return this.ovh.request('POST', `/dedicated/housing/${serviceName}/task/${taskId}/cancel`);
  };
}

export { DedicatedHousingHandler };
