/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeOfficeTenant } from '../models/LicenseOfficeOfficeTenant';
import { LicenseOfficeStatistics } from '../models/LicenseOfficeStatistics';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseOfficePrepaidOfficeUser } from '../models/LicenseOfficePrepaidOfficeUser';
import { LicenseOfficeOfficeTask } from '../models/LicenseOfficeOfficeTask';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { ServicesService } from '../models/ServicesService';
import OVHBase from '../ovh';

class LicenseOfficePrepaidHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listOfficePrepaids = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/officePrepaid');
  };

  /** Get this object properties */
  getOfficePrepaidByServiceName = (
    serviceName: string
  ): Promise<LicenseOfficePrepaidOfficeUser> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}`);
  };

  /** Alter this object properties */
  updateOfficePrepaidByServiceName = (
    serviceName: string,
    body: LicenseOfficePrepaidOfficeUser
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/officePrepaid/${serviceName}`, body);
  };

  /** Change or reset  user's password */
  updateOfficePrepaidPasswordByServiceName = (
    serviceName: string,
    body: { notifyEmail?: string; password?: string; shouldSendMail: boolean }
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('POST', `/license/officePrepaid/${serviceName}/changePassword`, body);
  };

  /** Confirm termination of your service */
  confirmOfficePrepaidTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/license/officePrepaid/${serviceName}/confirmTermination`,
      body
    );
  };

  /** Retrieve the parent tenant of this office user */
  getOfficePrepaidParentTenantByServiceName = (
    serviceName: string
  ): Promise<LicenseOfficeOfficeTenant> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}/parentTenant`);
  };

  /** Modify the parent tenant of this office user */
  putOfficePrepaidParentTenantByServiceName = (
    serviceName: string,
    body: { displayName?: string }
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/officePrepaid/${serviceName}/parentTenant`, body);
  };

  /** Get this object properties */
  getOfficePrepaidServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateOfficePrepaidServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/officePrepaid/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated to this user's tenant */
  getOfficePrepaidTenantPendingTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}/tenantPendingTask`);
  };

  /** Get this object properties */
  getOfficePrepaidTenantPendingTaskByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}/tenantPendingTask/${id}`);
  };

  /** Shows the subscriptions' usage statistics for the given time period */
  getOfficePrepaidTenantUsageStatisticsByServiceName = (
    serviceName: string
  ): Promise<LicenseOfficeStatistics[]> => {
    return this.ovh.request('GET', `/license/officePrepaid/${serviceName}/tenantUsageStatistics`);
  };

  /** Terminate your service */
  postOfficePrepaidTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/officePrepaid/${serviceName}/terminate`);
  };

  /** Unconfigure the office user */
  postOfficePrepaidUnconfigureByServiceName = (
    serviceName: string
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('POST', `/license/officePrepaid/${serviceName}/unconfigure`);
  };
}

export { LicenseOfficePrepaidHandler };
