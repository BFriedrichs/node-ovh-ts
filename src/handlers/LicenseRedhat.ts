/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseActionType } from '../models/LicenseActionType';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseRedhatRedHat } from '../models/LicenseRedhatRedHat';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseRedhatHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getRedhat = (): Promise<string> => {
    return this.ovh.request('GET', '/license/redhat');
  };

  /** Get this object properties */
  getRedhatServiceName = (serviceName: string): Promise<LicenseRedhatRedHat> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}`);
  };

  /** Alter this object properties */
  putRedhatServiceName = (serviceName: string, body: LicenseRedhatRedHat): Promise<void> => {
    return this.ovh.request('PUT', `/license/redhat/${serviceName}`, body);
  };

  /** Confirm termination of your service */
  postRedhatServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/redhat/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getRedhatServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putRedhatServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/redhat/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getRedhatServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getRedhatServiceNameTasksTaskId = (serviceName: string, taskId: number): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postRedhatServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/redhat/${serviceName}/terminate`);
  };
}

export default LicenseRedhatHandler;
