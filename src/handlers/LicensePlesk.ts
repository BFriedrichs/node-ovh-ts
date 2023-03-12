/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseOption } from '../models/LicenseOption';
import { LicensePleskOrderConfiguration } from '../models/LicensePleskOrderConfiguration';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicensePleskPlesk } from '../models/LicensePleskPlesk';
import { LicenseTask } from '../models/LicenseTask';
import { ServicesService } from '../models/ServicesService';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import OVHBase from '../ovh';

class LicensePleskHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listPlesk = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/plesk');
  };

  /** Get the orderable Plesk versions and their associated compatibilities */
  getPleskOrderableVersions = (): Promise<LicensePleskOrderConfiguration[]> => {
    return this.ovh.request('GET', '/license/plesk/orderableVersions');
  };

  /** Get this object properties */
  getPleskByServiceName = (serviceName: string): Promise<LicensePleskPlesk> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}`);
  };

  /** Alter this object properties */
  updatePleskByServiceName = (serviceName: string, body: LicensePleskPlesk): Promise<void> => {
    return this.ovh.request('PUT', `/license/plesk/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getPleskAllowedDestinationIpByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getPleskCanLicenseBeMovedToByServiceName = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postPleskChangeIpByServiceName = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/plesk/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  confirmPleskTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/plesk/${serviceName}/confirmTermination`, body);
  };

  /** options attached to this license */
  getPleskOptionByServiceName = (serviceName: string): Promise<LicenseOptionLabel[]> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/option`);
  };

  /** release this Option */
  deletePleskOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/plesk/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getPleskOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getPleskServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updatePleskServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/plesk/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getPleskTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getPleskTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postPleskTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/plesk/${serviceName}/terminate`);
  };
}

export { LicensePleskHandler };
