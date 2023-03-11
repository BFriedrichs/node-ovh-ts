/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamVeeamEnterpriseTask } from '../models/VeeamVeeamEnterpriseTask';
import { ServicesService } from '../models/ServicesService';
import { VeeamVeeamEnterpriseAccount } from '../models/VeeamVeeamEnterpriseAccount';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { VeeamEnterpriseTaskStateEnum } from '../models/VeeamEnterpriseTaskStateEnum';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class VeeamVeeamEnterpriseHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getVeeamEnterprise = (): Promise<string> => {
    return this.ovh.request('GET', '/veeam/veeamEnterprise');
  };

  /** Get this object properties */
  getVeeamEnterpriseServiceName = (serviceName: string): Promise<VeeamVeeamEnterpriseAccount> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}`);
  };

  /** Confirm termination of your service */
  postVeeamEnterpriseServiceNameConfirmTermination = (
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
  postVeeamEnterpriseServiceNameRegister = (
    serviceName: string,
    body: { ip: string; password: string; port: number; username: string }
  ): Promise<VeeamVeeamEnterpriseTask> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/register`, body);
  };

  /** Get this object properties */
  getVeeamEnterpriseServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putVeeamEnterpriseServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/veeam/veeamEnterprise/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with Veeam Enterprise */
  getVeeamEnterpriseServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/task`);
  };

  /** Get this object properties */
  getVeeamEnterpriseServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<VeeamVeeamEnterpriseTask> => {
    return this.ovh.request('GET', `/veeam/veeamEnterprise/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postVeeamEnterpriseServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/terminate`);
  };

  /** Update Veeam enterprise configuration */
  postVeeamEnterpriseServiceNameUpdate = (
    serviceName: string,
    body: { ip: string; password: string; port: number; username: string }
  ): Promise<VeeamVeeamEnterpriseTask> => {
    return this.ovh.request('POST', `/veeam/veeamEnterprise/${serviceName}/update`, body);
  };
}

export default VeeamVeeamEnterpriseHandler;
