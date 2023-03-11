/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseDirectAdminOrderConfiguration } from '../models/LicenseDirectAdminOrderConfiguration';
import { LicenseDirectAdminOsEnum } from '../models/LicenseDirectAdminOsEnum';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseDirectadminDirectAdmin } from '../models/LicenseDirectadminDirectAdmin';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseDirectadminHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getDirectadmin = (): Promise<string> => {
    return this.ovh.request('GET', '/license/directadmin');
  };

  /** Get the orderable DirectAdmin versions */
  getDirectadminOrderableVersions = (): Promise<LicenseDirectAdminOrderConfiguration> => {
    return this.ovh.request('GET', '/license/directadmin/orderableVersions');
  };

  /** Get this object properties */
  getDirectadminServiceName = (serviceName: string): Promise<LicenseDirectadminDirectAdmin> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}`);
  };

  /** Alter this object properties */
  putDirectadminServiceName = (
    serviceName: string,
    body: LicenseDirectadminDirectAdmin
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/directadmin/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getDirectadminServiceNameAllowedDestinationIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getDirectadminServiceNameCanLicenseBeMovedTo = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postDirectadminServiceNameChangeIp = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/directadmin/${serviceName}/changeIp`, body);
  };

  /** Change the Operating System for a license */
  postDirectadminServiceNameChangeOs = (
    serviceName: string,
    body: { os: LicenseDirectAdminOsEnum }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/directadmin/${serviceName}/changeOs`, body);
  };

  /** Confirm termination of your service */
  postDirectadminServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/directadmin/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getDirectadminServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putDirectadminServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/directadmin/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getDirectadminServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getDirectadminServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/directadmin/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postDirectadminServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/directadmin/${serviceName}/terminate`);
  };
}

export default LicenseDirectadminHandler;
