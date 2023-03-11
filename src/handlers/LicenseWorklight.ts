/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseWorklightWorkLight } from '../models/LicenseWorklightWorkLight';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseWorkLightOrderConfiguration } from '../models/LicenseWorkLightOrderConfiguration';
import OVHBase from '../ovh';

class LicenseWorklightHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getWorklight = (): Promise<string> => {
    return this.ovh.request('GET', '/license/worklight');
  };

  /** Get the orderable WorkLight versions */
  getWorklightOrderableVersions = (): Promise<LicenseWorkLightOrderConfiguration> => {
    return this.ovh.request('GET', '/license/worklight/orderableVersions');
  };

  /** Get this object properties */
  getWorklightServiceName = (serviceName: string): Promise<LicenseWorklightWorkLight> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}`);
  };

  /** Alter this object properties */
  putWorklightServiceName = (
    serviceName: string,
    body: LicenseWorklightWorkLight
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/worklight/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getWorklightServiceNameAllowedDestinationIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getWorklightServiceNameCanLicenseBeMovedTo = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postWorklightServiceNameChangeIp = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/worklight/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  postWorklightServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/worklight/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getWorklightServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putWorklightServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/worklight/${serviceName}/serviceInfos`, body);
  };

  /** Tasks linked to this license */
  getWorklightServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getWorklightServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/worklight/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postWorklightServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/worklight/${serviceName}/terminate`);
  };
}

export default LicenseWorklightHandler;
