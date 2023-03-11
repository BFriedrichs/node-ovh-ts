/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseVirtuozzoOrderConfiguration } from '../models/LicenseVirtuozzoOrderConfiguration';
import { LicenseOption } from '../models/LicenseOption';
import { LicenseVirtuozzoVirtuozzo } from '../models/LicenseVirtuozzoVirtuozzo';
import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseVirtuozzoHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getVirtuozzo = (): Promise<string> => {
    return this.ovh.request('GET', '/license/virtuozzo');
  };

  /** Get the orderable Virtuozzo versions */
  getVirtuozzoOrderableVersions = (): Promise<LicenseVirtuozzoOrderConfiguration> => {
    return this.ovh.request('GET', '/license/virtuozzo/orderableVersions');
  };

  /** Get this object properties */
  getVirtuozzoServiceName = (serviceName: string): Promise<LicenseVirtuozzoVirtuozzo> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}`);
  };

  /** Alter this object properties */
  putVirtuozzoServiceName = (
    serviceName: string,
    body: LicenseVirtuozzoVirtuozzo
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/virtuozzo/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getVirtuozzoServiceNameAllowedDestinationIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getVirtuozzoServiceNameCanLicenseBeMovedTo = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postVirtuozzoServiceNameChangeIp = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/virtuozzo/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  postVirtuozzoServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/virtuozzo/${serviceName}/confirmTermination`, body);
  };

  /** Options linked to this license */
  getVirtuozzoServiceNameOption = (serviceName: string): Promise<LicenseOptionLabel> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/option`);
  };

  /** release this Option */
  deleteVirtuozzoServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/virtuozzo/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getVirtuozzoServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getVirtuozzoServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putVirtuozzoServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/virtuozzo/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getVirtuozzoServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getVirtuozzoServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postVirtuozzoServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/virtuozzo/${serviceName}/terminate`);
  };
}

export default LicenseVirtuozzoHandler;
