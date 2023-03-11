/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseOption } from '../models/LicenseOption';
import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicensePleskOrderConfiguration } from '../models/LicensePleskOrderConfiguration';
import { LicenseTask } from '../models/LicenseTask';
import { LicensePleskPlesk } from '../models/LicensePleskPlesk';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicensePleskHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getPlesk = (): Promise<string> => {
    return this.ovh.request('GET', '/license/plesk');
  };

  /** Get the orderable Plesk versions and their associated compatibilities */
  getPleskOrderableVersions = (): Promise<LicensePleskOrderConfiguration> => {
    return this.ovh.request('GET', '/license/plesk/orderableVersions');
  };

  /** Get this object properties */
  getPleskServiceName = (serviceName: string): Promise<LicensePleskPlesk> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}`);
  };

  /** Alter this object properties */
  putPleskServiceName = (serviceName: string, body: LicensePleskPlesk): Promise<void> => {
    return this.ovh.request('PUT', `/license/plesk/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getPleskServiceNameAllowedDestinationIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getPleskServiceNameCanLicenseBeMovedTo = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postPleskServiceNameChangeIp = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/plesk/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  postPleskServiceNameConfirmTermination = (
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
  getPleskServiceNameOption = (serviceName: string): Promise<LicenseOptionLabel> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/option`);
  };

  /** release this Option */
  deletePleskServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/plesk/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getPleskServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getPleskServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putPleskServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/license/plesk/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getPleskServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getPleskServiceNameTasksTaskId = (serviceName: string, taskId: number): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/plesk/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postPleskServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/plesk/${serviceName}/terminate`);
  };
}

export default LicensePleskHandler;
