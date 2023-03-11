/* WARNING: This file is auto-generated . Do not edit manually. */

import { DeskaasPasswordPolicy } from '../models/DeskaasPasswordPolicy';
import { ServicesService } from '../models/ServicesService';
import { DeskaasTaskStateEnum } from '../models/DeskaasTaskStateEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DeskaasDeskaas } from '../models/DeskaasDeskaas';
import { DeskaasTask } from '../models/DeskaasTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DeskaasUser } from '../models/DeskaasUser';
import OVHBase from '../ovh';

class DeskaasHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/deskaas');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<DeskaasDeskaas> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}`);
  };

  /** Change the Virtual Desktop alias */
  postServiceNameChangeAlias = (
    serviceName: string,
    body: { alias: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/changeAlias`, body);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postServiceNameConfirmTermination = (
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
  postServiceNameConsole = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/console`);
  };

  /** Get the current password policy for your Desktop As A Service */
  getServiceNamePasswordPolicy = (serviceName: string): Promise<DeskaasPasswordPolicy> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/passwordPolicy`);
  };

  /** Reboot the Operating system of the Cloud Desktop. */
  postServiceNameReboot = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/reboot`);
  };

  /** Refresh the Operating system of the Desktop As A Service. All your personnal data are kept. */
  postServiceNameRefresh = (serviceName: string): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/refresh`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/deskaas/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated with this Desktop As A Service */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/task`);
  };

  /** Get this object properties */
  getServiceNameTaskTaskId = (serviceName: string, taskId: number): Promise<DeskaasTask> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/terminate`);
  };

  /** Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop */
  postServiceNameUpgrade = (
    serviceName: string,
    body: { newReference?: string; planCode?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/upgrade`, body);
  };

  /** Get this object properties */
  getServiceNameUser = (serviceName: string): Promise<DeskaasUser> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user`);
  };

  /** Change Desktop As A Service user password */
  postServiceNameUserChangePassword = (
    serviceName: string,
    body: { password?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/user/changePassword`, body);
  };

  /** Change Desktop As A Service user properties */
  postServiceNameUserChangeProperties = (
    serviceName: string,
    body: { email?: string }
  ): Promise<DeskaasTask> => {
    return this.ovh.request('POST', `/deskaas/${serviceName}/user/changeProperties`, body);
  };

  /** Tasks associated with this User */
  getServiceNameUserTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user/task`);
  };

  /** Get this object properties */
  getServiceNameUserTaskTaskId = (serviceName: string, taskId: number): Promise<DeskaasTask> => {
    return this.ovh.request('GET', `/deskaas/${serviceName}/user/task/${taskId}`);
  };
}

export default DeskaasHandler;
