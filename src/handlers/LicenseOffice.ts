/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseOfficeOfficeTenant } from '../models/LicenseOfficeOfficeTenant';
import { LicenseOfficeStatistics } from '../models/LicenseOfficeStatistics';
import { LicenseOfficeOfficeUser } from '../models/LicenseOfficeOfficeUser';
import { CoreTypesCountryEnum } from '../models/CoreTypesCountryEnum';
import { ServicesService } from '../models/ServicesService';
import { LicenseOfficeLicenceEnum } from '../models/LicenseOfficeLicenceEnum';
import { LicenseOfficeOfficeTask } from '../models/LicenseOfficeOfficeTask';
import { LicenseOfficeOfficeDomain } from '../models/LicenseOfficeOfficeDomain';
import OVHBase from '../ovh';

class LicenseOfficeHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listOffice = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/office');
  };

  /** Get this object properties */
  getOfficeByServiceName = (serviceName: string): Promise<LicenseOfficeOfficeTenant> => {
    return this.ovh.request('GET', `/license/office/${serviceName}`);
  };

  /** Alter this object properties */
  updateOfficeByServiceName = (
    serviceName: string,
    body: LicenseOfficeOfficeTenant
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/office/${serviceName}`, body);
  };

  /** Domain associated to this office tenant */
  getOfficeDomainByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/domain`);
  };

  /** Get this object properties */
  getOfficeDomainByServiceNameAndDomainName = (
    domainName: string,
    serviceName: string
  ): Promise<LicenseOfficeOfficeDomain> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/domain/${domainName}`);
  };

  /** Tasks associated to this office tenant */
  getOfficePendingTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/pendingTask`);
  };

  /** Get this object properties */
  getOfficePendingTaskByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/pendingTask/${id}`);
  };

  /** Get this object properties */
  getOfficeServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateOfficeServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/office/${serviceName}/serviceInfos`, body);
  };

  /** Shows the subscriptions' usage statistics for the given time period */
  getOfficeUsageStatisticsByServiceName = (
    serviceName: string
  ): Promise<LicenseOfficeStatistics[]> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/usageStatistics`);
  };

  /** Accounts associated to this office tenant */
  getOfficeUserByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/user`);
  };

  /** Create new office user */
  createOfficeUserByServiceName = (
    serviceName: string,
    body: {
      domain: string;
      firstName?: string;
      lastName?: string;
      licence: LicenseOfficeLicenceEnum;
      login: string;
      usageLocation?: CoreTypesCountryEnum;
    }
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('POST', `/license/office/${serviceName}/user`, body);
  };

  /** Delete existing office user */
  deleteOfficeUserByServiceNameAndActivationEmail = (
    activationEmail: string,
    serviceName: string
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request('DELETE', `/license/office/${serviceName}/user/${activationEmail}`);
  };

  /** Get this object properties */
  getOfficeUserByServiceNameAndActivationEmail = (
    activationEmail: string,
    serviceName: string
  ): Promise<LicenseOfficeOfficeUser> => {
    return this.ovh.request('GET', `/license/office/${serviceName}/user/${activationEmail}`);
  };

  /** Alter this object properties */
  updateOfficeUserByServiceNameAndActivationEmail = (
    activationEmail: string,
    serviceName: string,
    body: LicenseOfficeOfficeUser
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/office/${serviceName}/user/${activationEmail}`, body);
  };

  /** Change or reset  user's password */
  updateOfficeUserPasswordByServiceNameAndActivationEmail = (
    activationEmail: string,
    serviceName: string,
    body: { notifyEmail?: string; password?: string; shouldSendMail: boolean }
  ): Promise<LicenseOfficeOfficeTask> => {
    return this.ovh.request(
      'POST',
      `/license/office/${serviceName}/user/${activationEmail}/changePassword`,
      body
    );
  };
}

export { LicenseOfficeHandler };
