/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { LicenseRedhatRedHat } from '../models/LicenseRedhatRedHat';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseTask } from '../models/LicenseTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseActionType } from '../models/LicenseActionType';
import OVHBase from '../ovh';

class LicenseRedhatHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listRedhat = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/redhat');
  };

  /** Get this object properties */
  getRedhatByServiceName = (serviceName: string): Promise<LicenseRedhatRedHat> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}`);
  };

  /** Alter this object properties */
  updateRedhatByServiceName = (serviceName: string, body: LicenseRedhatRedHat): Promise<void> => {
    return this.ovh.request('PUT', `/license/redhat/${serviceName}`, body);
  };

  /** Confirm termination of your service */
  confirmRedhatTerminationByServiceName = (
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
  getRedhatServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateRedhatServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/redhat/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getRedhatTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getRedhatTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/redhat/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postRedhatTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/redhat/${serviceName}/terminate`);
  };
}

export { LicenseRedhatHandler };
