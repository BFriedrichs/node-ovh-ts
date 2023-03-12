/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamCloudConnectTaskStateEnum } from '../models/VeeamCloudConnectTaskStateEnum';
import { VeeamCloudConnectBackupRepository } from '../models/VeeamCloudConnectBackupRepository';
import { VeeamCloudConnectOffer } from '../models/VeeamCloudConnectOffer';
import { VeeamCloudConnectAccount } from '../models/VeeamCloudConnectAccount';
import { ServicesService } from '../models/ServicesService';
import { VeeamCloudConnectOfferCapabilities } from '../models/VeeamCloudConnectOfferCapabilities';
import { VeeamCloudConnectTask } from '../models/VeeamCloudConnectTask';
import OVHBase from '../ovh';

class VeeamCloudConnectHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  list = (): Promise<string[]> => {
    return this.ovh.request('GET', '/veeamCloudConnect');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<VeeamCloudConnectAccount> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}`);
  };

  /** Veeam Backup Repository linked to this Veeam Cloud Connect account */
  getBackupRepositoryByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/backupRepository`);
  };

  /** Add a new Backup Repository to your professional account */
  addBackupRepositoryByServiceName = (serviceName: string): Promise<VeeamCloudConnectTask[]> => {
    return this.ovh.request('POST', `/veeamCloudConnect/${serviceName}/backupRepository`);
  };

  /** Delete this backup Repository.  */
  deleteBackupRepositoryByServiceNameAndInventoryName = (
    inventoryName: string,
    serviceName: string
  ): Promise<VeeamCloudConnectTask[]> => {
    return this.ovh.request(
      'DELETE',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`
    );
  };

  /** Get this object properties */
  getBackupRepositoryByServiceNameAndInventoryName = (
    inventoryName: string,
    serviceName: string
  ): Promise<VeeamCloudConnectBackupRepository> => {
    return this.ovh.request(
      'GET',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`
    );
  };

  /** Change your quota */
  updateBackupRepositoryUpgradeQuotaByServiceNameAndInventoryName = (
    inventoryName: string,
    serviceName: string,
    body: { newQuota: number }
  ): Promise<VeeamCloudConnectTask[]> => {
    return this.ovh.request(
      'POST',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}/upgradeQuota`,
      body
    );
  };

  /** Show capabilities of your current offer */
  getCapabilitiesByServiceName = (
    serviceName: string
  ): Promise<VeeamCloudConnectOfferCapabilities> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/capabilities`);
  };

  /** List the possible upgrades on your Veeam Cloud Connect account */
  listOrderableUpgradeByServiceName = (serviceName: string): Promise<VeeamCloudConnectOffer[]> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/orderableUpgrade`);
  };

  /** Reset your Cloud Tenant Password */
  postResetPasswordByServiceName = (serviceName: string): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request('POST', `/veeamCloudConnect/${serviceName}/resetPassword`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/veeamCloudConnect/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with Cloud Tenant */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/task/${taskId}`);
  };
}

export { VeeamCloudConnectHandler };
