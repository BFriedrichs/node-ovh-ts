/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { LicenseCloudLinuxCloudLinux } from '../models/LicenseCloudLinuxCloudLinux';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseCloudLinuxOrderConfiguration } from '../models/LicenseCloudLinuxOrderConfiguration';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseCloudLinuxHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getCloudLinux = (): Promise<string> => {
    return this.ovh.request('GET', '/license/cloudLinux');
  };

  /** Get the orderable CloudLinux versions */
  getCloudLinuxOrderableVersions = (): Promise<LicenseCloudLinuxOrderConfiguration> => {
    return this.ovh.request('GET', '/license/cloudLinux/orderableVersions');
  };

  /** Get this object properties */
  getCloudLinuxServiceName = (serviceName: string): Promise<LicenseCloudLinuxCloudLinux> => {
    return this.ovh.request('GET', `/license/cloudLinux/${serviceName}`);
  };

  /** Confirm termination of your service */
  postCloudLinuxServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/cloudLinux/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getCloudLinuxServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/cloudLinux/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putCloudLinuxServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/cloudLinux/${serviceName}/serviceInfos`, body);
  };

  /** Tasks linked to this license */
  getCloudLinuxServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/cloudLinux/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getCloudLinuxServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/cloudLinux/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postCloudLinuxServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/cloudLinux/${serviceName}/terminate`);
  };
}

export default LicenseCloudLinuxHandler;
