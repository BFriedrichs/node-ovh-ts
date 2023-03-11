/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { LicenseWindowsOrderConfiguration } from '../models/LicenseWindowsOrderConfiguration';
import { ServicesService } from '../models/ServicesService';
import { LicenseWindowsSqlVersionEnum } from '../models/LicenseWindowsSqlVersionEnum';
import { LicenseOption } from '../models/LicenseOption';
import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseActionType } from '../models/LicenseActionType';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseWindowsWindows } from '../models/LicenseWindowsWindows';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseWindowsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getWindows = (): Promise<string> => {
    return this.ovh.request('GET', '/license/windows');
  };

  /** Get the orderable Windows versions */
  getWindowsOrderableVersions = (): Promise<LicenseWindowsOrderConfiguration> => {
    return this.ovh.request('GET', '/license/windows/orderableVersions');
  };

  /** Get this object properties */
  getWindowsServiceName = (serviceName: string): Promise<LicenseWindowsWindows> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}`);
  };

  /** Alter this object properties */
  putWindowsServiceName = (serviceName: string, body: LicenseWindowsWindows): Promise<void> => {
    return this.ovh.request('PUT', `/license/windows/${serviceName}`, body);
  };

  /** Confirm termination of your service */
  postWindowsServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/windows/${serviceName}/confirmTermination`, body);
  };

  /** options attached to this license */
  getWindowsServiceNameOption = (serviceName: string): Promise<LicenseOptionLabel> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/option`);
  };

  /** release this Option */
  deleteWindowsServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/windows/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getWindowsServiceNameOptionLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getWindowsServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putWindowsServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/windows/${serviceName}/serviceInfos`, body);
  };

  /** Link your own sql server license to this Windows license */
  postWindowsServiceNameSqlServer = (
    serviceName: string,
    body: { licenseId: string; version: LicenseWindowsSqlVersionEnum }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/windows/${serviceName}/sqlServer`, body);
  };

  /** tasks linked to this license */
  getWindowsServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getWindowsServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postWindowsServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/windows/${serviceName}/terminate`);
  };
}

export default LicenseWindowsHandler;
