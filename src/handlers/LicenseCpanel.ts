/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseCpanelCpanel } from '../models/LicenseCpanelCpanel';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseChangeIpStatus } from '../models/LicenseChangeIpStatus';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseCpanelOrderConfiguration } from '../models/LicenseCpanelOrderConfiguration';
import OVHBase from '../ovh';

class LicenseCpanelHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getCpanel = (): Promise<string> => {
    return this.ovh.request('GET', '/license/cpanel');
  };

  /** Get the orderable CPanel versions */
  getCpanelOrderableVersions = (): Promise<LicenseCpanelOrderConfiguration> => {
    return this.ovh.request('GET', '/license/cpanel/orderableVersions');
  };

  /** Get this object properties */
  getCpanelServiceName = (serviceName: string): Promise<LicenseCpanelCpanel> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}`);
  };

  /** Alter this object properties */
  putCpanelServiceName = (serviceName: string, body: LicenseCpanelCpanel): Promise<void> => {
    return this.ovh.request('PUT', `/license/cpanel/${serviceName}`, body);
  };

  /** Returns an array of ips where the license can be moved to */
  getCpanelServiceNameAllowedDestinationIp = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}/allowedDestinationIp`);
  };

  /** Will tell if the ip can accept the license */
  getCpanelServiceNameCanLicenseBeMovedTo = (
    serviceName: string
  ): Promise<LicenseChangeIpStatus> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}/canLicenseBeMovedTo`);
  };

  /** Move this license to another Ip */
  postCpanelServiceNameChangeIp = (
    serviceName: string,
    body: { destinationIp: string }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/cpanel/${serviceName}/changeIp`, body);
  };

  /** Confirm termination of your service */
  postCpanelServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/cpanel/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getCpanelServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putCpanelServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/cpanel/${serviceName}/serviceInfos`, body);
  };

  /** tasks linked to this license */
  getCpanelServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getCpanelServiceNameTasksTaskId = (serviceName: string, taskId: number): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/cpanel/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postCpanelServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/cpanel/${serviceName}/terminate`);
  };
}

export default LicenseCpanelHandler;
