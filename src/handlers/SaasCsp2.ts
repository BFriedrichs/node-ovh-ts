/* WARNING: This file is auto-generated . Do not edit manually. */

import { SaasCsp2OfficeTenant } from '../models/SaasCsp2OfficeTenant';
import { SaasCsp2OfficeLicence } from '../models/SaasCsp2OfficeLicence';
import { ServicesService } from '../models/ServicesService';
import { SaasCsp2SubscriptionCreation } from '../models/SaasCsp2SubscriptionCreation';
import { SaasCsp2OfficeTask } from '../models/SaasCsp2OfficeTask';
import { SaasCsp2Statistics } from '../models/SaasCsp2Statistics';
import { SaasCsp2SubscriptionOrderAddonCreation } from '../models/SaasCsp2SubscriptionOrderAddonCreation';
import { MsServicesLicensePeriodEnum } from '../models/MsServicesLicensePeriodEnum';
import { SaasCsp2OfficeSubscription } from '../models/SaasCsp2OfficeSubscription';
import { SaasCsp2BillingStatistics } from '../models/SaasCsp2BillingStatistics';
import { SaasCsp2SubscriptionChangeQuantityCreation } from '../models/SaasCsp2SubscriptionChangeQuantityCreation';
import { SaasCsp2SupportedServiceEnum } from '../models/SaasCsp2SupportedServiceEnum';
import OVHBase from '../ovh';

class SaasCsp2Handler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getCsp2 = (): Promise<string> => {
    return this.ovh.request('GET', '/saas/csp2');
  };

  /** Get this object properties */
  getCsp2ServiceName = (serviceName: string): Promise<SaasCsp2OfficeTenant> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}`);
  };

  /** Alter this object properties */
  putCsp2ServiceName = (serviceName: string, body: SaasCsp2OfficeTenant): Promise<void> => {
    return this.ovh.request('PUT', `/saas/csp2/${serviceName}`, body);
  };

  /** Get the current billing period's usage peak for each subscription */
  getCsp2ServiceNameBillingPeriodPeaks = (
    serviceName: string
  ): Promise<SaasCsp2BillingStatistics> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/billingPeriodPeaks`);
  };

  /** Changes the tenant administrator's password */
  postCsp2ServiceNameChangeAdministratorPassword = (
    serviceName: string,
    body: { newPassword: string }
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/changeAdministratorPassword`, body);
  };

  /** Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records */
  postCsp2ServiceNameConfigureDomain = (
    serviceName: string,
    body: { domain: string; supportedServices: SaasCsp2SupportedServiceEnum }
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/configureDomain`, body);
  };

  /** Licenses available for order */
  getCsp2ServiceNameOrderableLicenses = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/orderableLicenses`);
  };

  /** Get this object properties */
  getCsp2ServiceNameOrderableLicensesId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeLicence> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/orderableLicenses/${id}`);
  };

  /** Get this object properties */
  getCsp2ServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putCsp2ServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/saas/csp2/${serviceName}/serviceInfos`, body);
  };

  /** Subscriptions associated to this office tenant */
  getCsp2ServiceNameSubscription = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/subscription`);
  };

  /** Add a subscription to this tenant */
  postCsp2ServiceNameSubscription = (
    serviceName: string,
    body: SaasCsp2SubscriptionCreation
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('POST', `/saas/csp2/${serviceName}/subscription`, body);
  };

  /** Delete a subscription from this tenant */
  deleteCsp2ServiceNameSubscriptionId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('DELETE', `/saas/csp2/${serviceName}/subscription/${id}`);
  };

  /** Get this object properties */
  getCsp2ServiceNameSubscriptionId = (
    serviceName: string,
    id: number
  ): Promise<SaasCsp2OfficeSubscription> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/subscription/${id}`);
  };

  /** Addon subscriptions associated to this office subscription */
  getCsp2ServiceNameSubscriptionIdAddonsSubscriptionIds = (
    serviceName: string,
    id: number
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/saas/csp2/${serviceName}/subscription/${id}/addonsSubscriptionIds`
    );
  };

  /** Gives a list of licenses ids that can be ordered as an addon for this subscription */
  getCsp2ServiceNameSubscriptionIdAvailableAddonLicenses = (
    serviceName: string,
    id: number
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/saas/csp2/${serviceName}/subscription/${id}/availableAddonLicenses`
    );
  };

  /** Change the quantity of seats in the subscription */
  postCsp2ServiceNameSubscriptionIdChangeQuantity = (
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
  postCsp2ServiceNameSubscriptionIdOrderAddon = (
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
  getCsp2ServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/task`);
  };

  /** Get this object properties */
  getCsp2ServiceNameTaskId = (serviceName: string, id: number): Promise<SaasCsp2OfficeTask> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/task/${id}`);
  };

  /** Get the usage statistics over the chosen period */
  getCsp2ServiceNameUsageStatistics = (serviceName: string): Promise<SaasCsp2Statistics> => {
    return this.ovh.request('GET', `/saas/csp2/${serviceName}/usageStatistics`);
  };
}

export default SaasCsp2Handler;
