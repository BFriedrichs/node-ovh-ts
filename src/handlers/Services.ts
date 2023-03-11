/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesBillingPricing } from '../models/ServicesBillingPricing';
import { ServicesFormDescription } from '../models/ServicesFormDescription';
import { ServicesOperationExecutionRequest } from '../models/ServicesOperationExecutionRequest';
import { ServicesBillingEngagementEngagement } from '../models/ServicesBillingEngagementEngagement';
import { ServicesFormResponse } from '../models/ServicesFormResponse';
import { ServicesExpandedTechnicalDetails } from '../models/ServicesExpandedTechnicalDetails';
import { ServicesBillingEngagementUpdateEndRuleRequest } from '../models/ServicesBillingEngagementUpdateEndRuleRequest';
import { ServicesConsumptionSummary } from '../models/ServicesConsumptionSummary';
import { ServicesUpdateService } from '../models/ServicesUpdateService';
import { ServicesBillingEngagementEngagementRequestCreation } from '../models/ServicesBillingEngagementEngagementRequestCreation';
import { OrderCartGenericProductDefinition } from '../models/OrderCartGenericProductDefinition';
import { ServicesOperationDetachOptionsDefinition } from '../models/ServicesOperationDetachOptionsDefinition';
import { ServicesBillingEngagementEngagementFlushRequest } from '../models/ServicesBillingEngagementEngagementFlushRequest';
import { ServicesOperationOrder } from '../models/ServicesOperationOrder';
import { ServicesConsumptionElement } from '../models/ServicesConsumptionElement';
import { ServicesFormForm } from '../models/ServicesFormForm';
import { ServicesOperationDetachExecutionRequest } from '../models/ServicesOperationDetachExecutionRequest';
import { ServicesExpandedService } from '../models/ServicesExpandedService';
import { ServicesBillingEngagementEngagementRequest } from '../models/ServicesBillingEngagementEngagementRequest';
import { ServicesBillingEngagementEngagementFlushOrder } from '../models/ServicesBillingEngagementEngagementFlushOrder';
import OVHBase from '../ovh';

class ServicesHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<number> => {
    return this.ovh.request('GET', '/services');
  };

  /** Get details about a service */
  getServiceId = (serviceId: number): Promise<ServicesExpandedService> => {
    return this.ovh.request('GET', `/services/${serviceId}`);
  };

  /** Update service information */
  putServiceId = (serviceId: number, body: ServicesUpdateService): Promise<void> => {
    return this.ovh.request('PUT', `/services/${serviceId}`, body);
  };

  /** Get engagement details */
  getServiceIdBillingEngagement = (
    serviceId: number
  ): Promise<ServicesBillingEngagementEngagement> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement`);
  };

  /** List all available engagements a given service can subscribe to */
  getServiceIdBillingEngagementAvailable = (serviceId: number): Promise<ServicesBillingPricing> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement/available`);
  };

  /** Change your Engagement end rules */
  putServiceIdBillingEngagementEndRule = (
    serviceId: number,
    body: ServicesBillingEngagementUpdateEndRuleRequest
  ): Promise<void> => {
    return this.ovh.request('PUT', `/services/${serviceId}/billing/engagement/endRule`, body);
  };

  /** Flush the engagement of this service */
  postServiceIdBillingEngagementFlush = (
    serviceId: number,
    body: ServicesBillingEngagementEngagementFlushRequest
  ): Promise<ServicesBillingEngagementEngagementFlushOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/billing/engagement/flush`, body);
  };

  /** Delete the ongoing Engagement request on this Service */
  deleteServiceIdBillingEngagementRequest = (serviceId: number): Promise<void> => {
    return this.ovh.request('DELETE', `/services/${serviceId}/billing/engagement/request`);
  };

  /** Get the ongoing Engagement request on this Service */
  getServiceIdBillingEngagementRequest = (
    serviceId: number
  ): Promise<ServicesBillingEngagementEngagementRequest> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement/request`);
  };

  /** Request an Engagement on this Service */
  postServiceIdBillingEngagementRequest = (
    serviceId: number,
    body: ServicesBillingEngagementEngagementRequestCreation
  ): Promise<ServicesBillingEngagementEngagementRequest> => {
    return this.ovh.request('POST', `/services/${serviceId}/billing/engagement/request`, body);
  };

  /** Get a summary of the ongoing consumption of your service */
  getServiceIdConsumption = (serviceId: number): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption`);
  };

  /** Get each resource consumed by your service */
  getServiceIdConsumptionElement = (serviceId: number): Promise<ServicesConsumptionElement> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/element`);
  };

  /** Get a summary of the forecasted consumption of your service */
  getServiceIdConsumptionForecast = (serviceId: number): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/forecast`);
  };

  /** Get each resource forecasted consumption of your service */
  getServiceIdConsumptionForecastElement = (
    serviceId: number
  ): Promise<ServicesConsumptionElement> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/forecast/element`);
  };

  /** List consumption history of your service */
  getServiceIdConsumptionHistory = (serviceId: number): Promise<number> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history`);
  };

  /** Get a summary of the past consumption of your service */
  getServiceIdConsumptionHistoryId = (
    id: number,
    serviceId: number
  ): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history/${id}`);
  };

  /** Get each resource consumed for the given history */
  getServiceIdConsumptionHistoryIdElement = (
    id: number,
    serviceId: number
  ): Promise<ServicesConsumptionElement> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history/${id}/element`);
  };

  /** List offers this option can be converted to */
  getServiceIdDetach = (serviceId: number): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach`);
  };

  /** View an offer this option can be converted to */
  getServiceIdDetachPlanCode = (
    planCode: string,
    serviceId: number
  ): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach/${planCode}`);
  };

  /** Perform the migration to a standalone offer. May require you to pay an Order */
  postServiceIdDetachPlanCodeExecute = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationDetachExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/detach/${planCode}/execute`, body);
  };

  /** View all offers compatible for the detachment for the given option offer */
  getServiceIdDetachPlanCodeOptions = (
    planCode: string,
    serviceId: number
  ): Promise<ServicesOperationDetachOptionsDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach/${planCode}/options`);
  };

  /** Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service */
  postServiceIdDetachPlanCodeSimulate = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationDetachExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/detach/${planCode}/simulate`, body);
  };

  /** List available forms for service */
  getServiceIdForm = (serviceId: number): Promise<ServicesFormDescription> => {
    return this.ovh.request('GET', `/services/${serviceId}/form`);
  };

  /** Get specified form description for service */
  getServiceIdFormFormName = (
    formName: string,
    serviceId: number
  ): Promise<ServicesFormDescription> => {
    return this.ovh.request('GET', `/services/${serviceId}/form/${formName}`);
  };

  /** Post answers to the form for your service */
  postServiceIdFormFormNameAnswer = (
    formName: string,
    serviceId: number,
    body: ServicesFormForm
  ): Promise<ServicesFormResponse> => {
    return this.ovh.request('POST', `/services/${serviceId}/form/${formName}/answer`, body);
  };

  /** Get options of a service */
  getServiceIdOptions = (serviceId: number): Promise<ServicesExpandedService> => {
    return this.ovh.request('GET', `/services/${serviceId}/options`);
  };

  /** Get possible renew periods of a service */
  getServiceIdRenewPeriodCapacities = (serviceId: number): Promise<number> => {
    return this.ovh.request('GET', `/services/${serviceId}/renewPeriodCapacities`);
  };

  /** View the technical details of the service */
  getServiceIdTechnicalDetails = (serviceId: number): Promise<ServicesExpandedTechnicalDetails> => {
    return this.ovh.request('GET', `/services/${serviceId}/technicalDetails`);
  };

  /** List offers this option can be converted to */
  getServiceIdUpgrade = (serviceId: number): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/upgrade`);
  };

  /** View an offer this option can be converted to */
  getServiceIdUpgradePlanCode = (
    planCode: string,
    serviceId: number
  ): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/upgrade/${planCode}`);
  };

  /** Perform the migration to another offer. May require you to pay an Order */
  postServiceIdUpgradePlanCodeExecute = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/upgrade/${planCode}/execute`, body);
  };

  /** Simulate the conversion to another offer. It won't generate any Order or issue any changes to your Service */
  postServiceIdUpgradePlanCodeSimulate = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/upgrade/${planCode}/simulate`, body);
  };
}

export default ServicesHandler;
