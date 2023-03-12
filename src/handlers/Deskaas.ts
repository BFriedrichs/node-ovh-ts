/* WARNING: This file is auto-generated . Do not edit manually. */

import { DeskaasDeskaas } from '../models/DeskaasDeskaas';
import { DeskaasUser } from '../models/DeskaasUser';
import { DeskaasTask } from '../models/DeskaasTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DeskaasTaskStateEnum } from '../models/DeskaasTaskStateEnum';
import { DeskaasPasswordPolicy } from '../models/DeskaasPasswordPolicy';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class DeskaasHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/deskaas');
  };

  /** Get this object properties */
  getByServiceName = (serviceName: string): Promise<DeskaasDeskaas> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}`);
  };

  /** Change the Virtual Desktop alias */
  updateAliasByServiceName = (
    serviceName: string,
    body: { alias: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/changeAlias`, body);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/confirmTermination`, body);
  };

  /** New console access */
  postConsoleByServiceName = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/console`);
  };

  /** Get the current password policy for your Desktop As A Service */
  getPasswordPolicyByServiceName = (serviceName: string): Promise<DeskaasPasswordPolicy> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/passwordPolicy`);
  };

  /** Reboot the Operating system of the Cloud Desktop. */
  postRebootByServiceName = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/reboot`);
  };

  /** Refresh the Operating system of the Desktop As A Service. All your personnal data are kept. */
  postRefreshByServiceName = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/refresh`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/deskaas/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with this Desktop As A Service */
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/task`);
  };

  /** Get this object properties */
  getTaskByServiceNameAndTaskId = (serviceName: string, taskId: number): Promise<DeskaasTask> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/terminate`);
  };

  /** Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop */
  postUpgradeByServiceName = (
    serviceName: string,
    body: { newReference?: string; planCode?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/upgrade`, body);
  };

  /** Get this object properties */
  getUserByServiceName = (serviceName: string): Promise<DeskaasUser> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user`);
  };

  /** Change Desktop As A Service user password */
  updateUserPasswordByServiceName = (
    serviceName: string,
    body: { password?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/user/changePassword`, body);
  };

  /** Change Desktop As A Service user properties */
  updateUserPropertiesByServiceName = (
    serviceName: string,
    body: { email?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/user/changeProperties`, body);
  };

  /** Tasks associated with this User */
  getUserTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user/task`);
  };

  /** Get this object properties */
  getUserTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DeskaasTask> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user/task/${taskId}`);
  };
}

export { DeskaasHandler };
