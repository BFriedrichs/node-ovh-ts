/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseOption } from '../models/LicenseOption';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseVirtuozzoVirtuozzo } from '../models/LicenseVirtuozzoVirtuozzo';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseVirtuozzoOrderConfiguration } from '../models/LicenseVirtuozzoOrderConfiguration';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import OVHBase from '../ovh';

class LicenseVirtuozzoHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listVirtuozzo = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/virtuozzo');
  };

  /** Get the orderable Virtuozzo versions */
  getVirtuozzoOrderableVersions = (): Promise<LicenseVirtuozzoOrderConfiguration[]> => {
    return this.ovh.request('GET', '/license/virtuozzo/orderableVersions');
  };

  /** Get this object properties */
  getVirtuozzoByServiceName = (serviceName: string): Promise<LicenseVirtuozzoVirtuozzo> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}`);
  };

  /** Alter this object properties */
  updateVirtuozzoByServiceName = (
    serviceName: string,
    body: LicenseVirtuozzoVirtuozzo
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/virtuozzo/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getVirtuozzoAllowedDestinationIpByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getVirtuozzoCanLicenseBeMovedToByServiceName = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postVirtuozzoChangeIpByServiceName = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/virtuozzo/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  confirmVirtuozzoTerminationByServiceName = (
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
  getVirtuozzoOptionByServiceName = (serviceName: string): Promise<LicenseOptionLabel[]> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/option`);
  };

  /** release this Option */
  deleteVirtuozzoOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/virtuozzo/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getVirtuozzoOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getVirtuozzoServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateVirtuozzoServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/virtuozzo/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getVirtuozzoTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getVirtuozzoTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/virtuozzo/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postVirtuozzoTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/virtuozzo/${serviceName}/terminate`);
  };
}

export { LicenseVirtuozzoHandler };
