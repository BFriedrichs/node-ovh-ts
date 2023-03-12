/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamVeeamEnterpriseTask } from '../models/VeeamVeeamEnterpriseTask';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import { VeeamVeeamEnterpriseAccount } from '../models/VeeamVeeamEnterpriseAccount';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { VeeamEnterpriseTaskStateEnum } from '../models/VeeamEnterpriseTaskStateEnum';
import OVHBase from '../ovh';

class VeeamVeeamEnterpriseHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listVeeamEnterprise = (): Promise<string[]> => {
    return this.ovh.request('GET', '/veeam/veeamEnterprise');
  };

  /** Get this object properties */
  getVeeamEnterpriseByServiceName = (serviceName: string): Promise<VeeamVeeamEnterpriseAccount> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}`);
  };

  /** Confirm termination of your service */
  confirmVeeamEnterpriseTerminationByServiceName = (
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
      `/veeam/veeamEnterprise/${serviceName}/confirmTermination`,
      body
    );
  };

  /** Register Veeam Backup Server to Veeam Enterprise */
  postVeeamEnterpriseRegisterByServiceName = (
    serviceName: string,
    body: { ip: string; password: string; port: number; username: string }
  ): Promise<VeeamVeeamEnterpriseTask[]> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/register`, body);
  };

  /** Get this object properties */
  getVeeamEnterpriseServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateVeeamEnterpriseServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/veeam/veeamEnterprise/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with Veeam Enterprise */
  getVeeamEnterpriseTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/task`);
  };

  /** Get this object properties */
  getVeeamEnterpriseTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<VeeamVeeamEnterpriseTask> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postVeeamEnterpriseTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/terminate`);
  };

  /** Update Veeam enterprise configuration */
  updateVeeamEnterpriseByServiceName = (
    serviceName: string,
    body: { ip: string; password: string; port: number; username: string }
  ): Promise<VeeamVeeamEnterpriseTask[]> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/update`, body);
  };
}

export { VeeamVeeamEnterpriseHandler };
