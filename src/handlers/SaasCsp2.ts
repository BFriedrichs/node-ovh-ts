/* WARNING: This file is auto-generated . Do not edit manually. */

import { SaasCsp2SubscriptionChangeQuantityCreation } from '../models/SaasCsp2SubscriptionChangeQuantityCreation';
import { MsServicesLicensePeriodEnum } from '../models/MsServicesLicensePeriodEnum';
import { SaasCsp2OfficeLicence } from '../models/SaasCsp2OfficeLicence';
import { SaasCsp2OfficeTask } from '../models/SaasCsp2OfficeTask';
import { SaasCsp2OfficeSubscription } from '../models/SaasCsp2OfficeSubscription';
import { SaasCsp2SubscriptionCreation } from '../models/SaasCsp2SubscriptionCreation';
import { ServicesService } from '../models/ServicesService';
import { SaasCsp2OfficeTenant } from '../models/SaasCsp2OfficeTenant';
import { SaasCsp2Statistics } from '../models/SaasCsp2Statistics';
import { SaasCsp2BillingStatistics } from '../models/SaasCsp2BillingStatistics';
import { SaasCsp2SupportedServiceEnum } from '../models/SaasCsp2SupportedServiceEnum';
import { SaasCsp2SubscriptionOrderAddonCreation } from '../models/SaasCsp2SubscriptionOrderAddonCreation';
import OVHBase from '../ovh';

class SaasCsp2Handler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listCsp2 = (): Promise<string[]> => {
    return this.ovh.request('GET', '/saas/csp2');
  };

  /** Get this object properties */
  getCsp2ByServiceName = (serviceName: string): Promise<SaasCsp2OfficeTenant> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}`);
  };

  /** Alter this object properties */
  updateCsp2ByServiceName = (serviceName: string, body: SaasCsp2OfficeTenant): Promise<void> => {
    return this.ovh.request('PUT', `/saas/csp2/${serviceName}`, body);
  };

  /** Get the current billing period's usage peak for each subscription */
  getCsp2BillingPeriodPeaksByServiceName = (
    serviceName: string
  ): Promise<SaasCsp2BillingStatistics> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/billingPeriodPeaks`);
  };

  /** Changes the tenant administrator's password */
  updateCsp2AdministratorPasswordByServiceName = (
    serviceName: string,
    body: { newPassword: string }
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/changeAdministratorPassword`, body);
  };

  /** Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records */
  postCsp2ConfigureDomainByServiceName = (
    serviceName: string,
    body: { domain: string; supportedServices: SaasCsp2SupportedServiceEnum[] }
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/configureDomain`, body);
  };

  /** Licenses available for order */
  getCsp2OrderableLicensesByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/orderableLicenses`);
  };

  /** Get this object properties */
  getCsp2OrderableLicensesByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeLicence> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/orderableLicenses/${id}`);
  };

  /** Get this object properties */
  getCsp2ServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateCsp2ServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/saas/csp2/${serviceName}/serviceInfos`, body);
  };

  /** Subscriptions associated to this office tenant */
  getCsp2SubscriptionByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/subscription`);
  };

  /** Add a subscription to this tenant */
  addCsp2SubscriptionByServiceName = (
    serviceName: string,
    body: SaasCsp2SubscriptionCreation
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/subscription`, body);
  };

  /** Delete a subscription from this tenant */
  deleteCsp2SubscriptionByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('DELETE', `/saas/csp2/${serviceName}/subscription/${id}`);
  };

  /** Get this object properties */
  getCsp2SubscriptionByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeSubscription> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/subscription/${id}`);
  };

  /** Addon subscriptions associated to this office subscription */
  addCsp2SubscriptiononsSubscriptionIdsByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/saas/csp2/${serviceName}/subscription/${id}/addonsSubscriptionIds`
    );
  };

  /** Gives a list of licenses ids that can be ordered as an addon for this subscription */
  getCsp2SubscriptionAvailableAddonLicensesByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/saas/csp2/${serviceName}/subscription/${id}/availableAddonLicenses`
    );
  };

  /** Change the quantity of seats in the subscription */
  updateCsp2SubscriptionQuantityByServiceNameAndId = (
    serviceName: string,
    id: number,
    body: SaasCsp2SubscriptionChangeQuantityCreation
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request(
      'POST',
      `/saas/csp2/${serviceName}/subscription/${id}/changeQuantity`,
      body
    );
  };

  /** Creates a new subscription as an addon for this subscription */
  createCsp2SubscriptionOrderAddonByServiceNameAndId = (
    serviceName: string,
    id: number,
    body: SaasCsp2SubscriptionOrderAddonCreation
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request(
      'POST',
      `/saas/csp2/${serviceName}/subscription/${id}/orderAddon`,
      body
    );
  };

  /** Pending tasks of this tenant */
  getCsp2TaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/task`);
  };

  /** Get this object properties */
  getCsp2TaskByServiceNameAndId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/task/${id}`);
  };

  /** Get the usage statistics over the chosen period */
  getCsp2UsageStatisticsByServiceName = (serviceName: string): Promise<SaasCsp2Statistics[]> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/usageStatistics`);
  };
}

export { SaasCsp2Handler };
