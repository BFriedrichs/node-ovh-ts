/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOptionLabel } from '../models/LicenseOptionLabel';
import { LicenseOption } from '../models/LicenseOption';
import { LicenseWindowsWindows } from '../models/LicenseWindowsWindows';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseWindowsOrderConfiguration } from '../models/LicenseWindowsOrderConfiguration';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { LicenseActionType } from '../models/LicenseActionType';
import { LicenseWindowsSqlVersionEnum } from '../models/LicenseWindowsSqlVersionEnum';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class LicenseWindowsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listWindows = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/windows');
  };

  /** Get the orderable Windows versions */
  getWindowsOrderableVersions = (): Promise<LicenseWindowsOrderConfiguration[]> => {
    return this.ovh.request('GET', '/license/windows/orderableVersions');
  };

  /** Get this object properties */
  getWindowsByServiceName = (serviceName: string): Promise<LicenseWindowsWindows> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}`);
  };

  /** Alter this object properties */
  updateWindowsByServiceName = (
    serviceName: string,
    body: LicenseWindowsWindows
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/windows/${serviceName}`, body);
  };

  /** Confirm termination of your service */
  confirmWindowsTerminationByServiceName = (
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
  getWindowsOptionByServiceName = (serviceName: string): Promise<LicenseOptionLabel[]> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/option`);
  };

  /** release this Option */
  deleteWindowsOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseTask> => {
    return this.ovh.request('DELETE', `/license/windows/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getWindowsOptionByServiceNameAndLabel = (
    label: LicenseOptionLabel,
    serviceName: string
  ): Promise<LicenseOption> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/option/${label}`);
  };

  /** Get this object properties */
  getWindowsServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateWindowsServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/windows/${serviceName}/serviceInfos`, body);
  };

  /** Link your own sql server license to this Windows license */
  postWindowsSqlServerByServiceName = (
    serviceName: string,
    body: { licenseId: string; version: LicenseWindowsSqlVersionEnum }
  ): Promise<LicenseTask> => {
    return this.ovh.request('POST', `/license/windows/${serviceName}/sqlServer`, body);
  };

  /** tasks linked to this license */
  getWindowsTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getWindowsTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/windows/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postWindowsTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/windows/${serviceName}/terminate`);
  };
}

export { LicenseWindowsHandler };
