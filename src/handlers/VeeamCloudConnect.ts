/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { VeeamCloudConnectTask } from '../models/VeeamCloudConnectTask';
import { VeeamCloudConnectOfferCapabilities } from '../models/VeeamCloudConnectOfferCapabilities';
import { VeeamCloudConnectTaskStateEnum } from '../models/VeeamCloudConnectTaskStateEnum';
import { VeeamCloudConnectOffer } from '../models/VeeamCloudConnectOffer';
import { VeeamCloudConnectAccount } from '../models/VeeamCloudConnectAccount';
import { VeeamCloudConnectBackupRepository } from '../models/VeeamCloudConnectBackupRepository';
import OVHBase from '../ovh';

class VeeamCloudConnectHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/veeamCloudConnect');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<VeeamCloudConnectAccount> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}`);
  };

  /** Veeam Backup Repository linked to this Veeam Cloud Connect account */
  getServiceNameBackupRepository = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/backupRepository`);
  };

  /** Add a new Backup Repository to your professional account */
  postServiceNameBackupRepository = (serviceName: string): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request('POST', `/veeamCloudConnect/${serviceName}/backupRepository`);
  };

  /** Delete this backup Repository.  */
  deleteServiceNameBackupRepositoryInventoryName = (
    inventoryName: string,
    serviceName: string
  ): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request(
      'DELETE',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`
    );
  };

  /** Get this object properties */
  getServiceNameBackupRepositoryInventoryName = (
    inventoryName: string,
    serviceName: string
  ): Promise<VeeamCloudConnectBackupRepository> => {
    return this.ovh.request(
      'GET',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`
    );
  };

  /** Change your quota */
  postServiceNameBackupRepositoryInventoryNameUpgradeQuota = (
    inventoryName: string,
    serviceName: string,
    body: { newQuota: number }
  ): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request(
      'POST',
      `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}/upgradeQuota`,
      body
    );
  };

  /** Show capabilities of your current offer */
  getServiceNameCapabilities = (
    serviceName: string
  ): Promise<VeeamCloudConnectOfferCapabilities> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/capabilities`);
  };

  /** List the possible upgrades on your Veeam Cloud Connect account */
  getServiceNameOrderableUpgrade = (serviceName: string): Promise<VeeamCloudConnectOffer> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/orderableUpgrade`);
  };

  /** Reset your Cloud Tenant Password */
  postServiceNameResetPassword = (serviceName: string): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request('POST', `/veeamCloudConnect/${serviceName}/resetPassword`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/veeamCloudConnect/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with Cloud Tenant */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<VeeamCloudConnectTask> => {
    return this.ovh.request('GET', `/veeamCloudConnect/${serviceName}/task/${taskId}`);
  };
}

export default VeeamCloudConnectHandler;
