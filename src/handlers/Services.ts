/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesBillingPricing } from '../models/ServicesBillingPricing';
import { ServicesBillingEngagementEngagement } from '../models/ServicesBillingEngagementEngagement';
import { ServicesExpandedService } from '../models/ServicesExpandedService';
import { ServicesFormDescription } from '../models/ServicesFormDescription';
import { ServicesOperationDetachExecutionRequest } from '../models/ServicesOperationDetachExecutionRequest';
import { ServicesOperationOrder } from '../models/ServicesOperationOrder';
import { ServicesConsumptionSummary } from '../models/ServicesConsumptionSummary';
import { ServicesFormResponse } from '../models/ServicesFormResponse';
import { ServicesExpandedTechnicalDetails } from '../models/ServicesExpandedTechnicalDetails';
import { ServicesBillingEngagementEngagementRequestCreation } from '../models/ServicesBillingEngagementEngagementRequestCreation';
import { ServicesOperationExecutionRequest } from '../models/ServicesOperationExecutionRequest';
import { ServicesBillingEngagementEngagementRequest } from '../models/ServicesBillingEngagementEngagementRequest';
import { ServicesOperationDetachOptionsDefinition } from '../models/ServicesOperationDetachOptionsDefinition';
import { ServicesConsumptionElement } from '../models/ServicesConsumptionElement';
import { ServicesBillingEngagementUpdateEndRuleRequest } from '../models/ServicesBillingEngagementUpdateEndRuleRequest';
import { ServicesBillingEngagementEngagementFlushOrder } from '../models/ServicesBillingEngagementEngagementFlushOrder';
import { ServicesUpdateService } from '../models/ServicesUpdateService';
import { ServicesBillingEngagementEngagementFlushRequest } from '../models/ServicesBillingEngagementEngagementFlushRequest';
import { ServicesFormForm } from '../models/ServicesFormForm';
import { OrderCartGenericProductDefinition } from '../models/OrderCartGenericProductDefinition';
import OVHBase from '../ovh';

class ServicesHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<number[]> => {
    return this.ovh.request('GET', '/services');
  };

  /** Get details about a service */
  getByServiceId = (serviceId: number): Promise<ServicesExpandedService> => {
    return this.ovh.request('GET', `/services/${serviceId}`);
  };

  /** Update service information */
  updateByServiceId = (serviceId: number, body: ServicesUpdateService): Promise<void> => {
    return this.ovh.request('PUT', `/services/${serviceId}`, body);
  };

  /** Get engagement details */
  getBillingEngagementByServiceId = (
    serviceId: number
  ): Promise<ServicesBillingEngagementEngagement> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement`);
  };

  /** List all available engagements a given service can subscribe to */
  listBillingEngagementAvailablesByServiceId = (
    serviceId: number
  ): Promise<ServicesBillingPricing[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement/available`);
  };

  /** Change your Engagement end rules */
  updateBillingEngagementEndRuleByServiceId = (
    serviceId: number,
    body: ServicesBillingEngagementUpdateEndRuleRequest
  ): Promise<void> => {
    return this.ovh.request('PUT', `/services/${serviceId}/billing/engagement/endRule`, body);
  };

  /** Flush the engagement of this service */
  postBillingEngagementFlushByServiceId = (
    serviceId: number,
    body: ServicesBillingEngagementEngagementFlushRequest
  ): Promise<ServicesBillingEngagementEngagementFlushOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/billing/engagement/flush`, body);
  };

  /** Delete the ongoing Engagement request on this Service */
  deleteBillingEngagementRequestByServiceId = (serviceId: number): Promise<void> => {
    return this.ovh.request('DELETE', `/services/${serviceId}/billing/engagement/request`);
  };

  /** Get the ongoing Engagement request on this Service */
  getBillingEngagementRequestByServiceId = (
    serviceId: number
  ): Promise<ServicesBillingEngagementEngagementRequest> => {
    return this.ovh.request('GET', `/services/${serviceId}/billing/engagement/request`);
  };

  /** Request an Engagement on this Service */
  postBillingEngagementRequestByServiceId = (
    serviceId: number,
    body: ServicesBillingEngagementEngagementRequestCreation
  ): Promise<ServicesBillingEngagementEngagementRequest> => {
    return this.ovh.request('POST', `/services/${serviceId}/billing/engagement/request`, body);
  };

  /** Get a summary of the ongoing consumption of your service */
  getConsumptionByServiceId = (serviceId: number): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption`);
  };

  /** Get each resource consumed by your service */
  getConsumptionElementByServiceId = (serviceId: number): Promise<ServicesConsumptionElement[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/element`);
  };

  /** Get a summary of the forecasted consumption of your service */
  getConsumptionForecastByServiceId = (serviceId: number): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/forecast`);
  };

  /** Get each resource forecasted consumption of your service */
  getConsumptionForecastElementByServiceId = (
    serviceId: number
  ): Promise<ServicesConsumptionElement[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/forecast/element`);
  };

  /** List consumption history of your service */
  listConsumptionHistorysByServiceId = (serviceId: number): Promise<number[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history`);
  };

  /** Get a summary of the past consumption of your service */
  getConsumptionHistoryByServiceIdAndId = (
    id: number,
    serviceId: number
  ): Promise<ServicesConsumptionSummary> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history/${id}`);
  };

  /** Get each resource consumed for the given history */
  getConsumptionHistoryElementByServiceIdAndId = (
    id: number,
    serviceId: number
  ): Promise<ServicesConsumptionElement[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/consumption/history/${id}/element`);
  };

  /** List offers this option can be converted to */
  listDetachsByServiceId = (serviceId: number): Promise<OrderCartGenericProductDefinition[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach`);
  };

  /** View an offer this option can be converted to */
  getDetachByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number
  ): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach/${planCode}`);
  };

  /** Perform the migration to a standalone offer. May require you to pay an Order */
  postDetachExecuteByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationDetachExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/detach/${planCode}/execute`, body);
  };

  /** View all offers compatible for the detachment for the given option offer */
  getDetachOptionsByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number
  ): Promise<ServicesOperationDetachOptionsDefinition[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/detach/${planCode}/options`);
  };

  /** Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service */
  postDetachSimulateByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationDetachExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/detach/${planCode}/simulate`, body);
  };

  /** List available forms for service */
  listFormsByServiceId = (serviceId: number): Promise<ServicesFormDescription[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/form`);
  };

  /** Get specified form description for service */
  getFormByServiceIdAndFormName = (
    formName: string,
    serviceId: number
  ): Promise<ServicesFormDescription> => {
    return this.ovh.request('GET', `/services/${serviceId}/form/${formName}`);
  };

  /** Post answers to the form for your service */
  postFormAnswerByServiceIdAndFormName = (
    formName: string,
    serviceId: number,
    body: ServicesFormForm
  ): Promise<ServicesFormResponse> => {
    return this.ovh.request('POST', `/services/${serviceId}/form/${formName}/answer`, body);
  };

  /** Get options of a service */
  getOptionsByServiceId = (serviceId: number): Promise<ServicesExpandedService[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/options`);
  };

  /** Get possible renew periods of a service */
  getRenewPeriodCapacitiesByServiceId = (serviceId: number): Promise<number[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/renewPeriodCapacities`);
  };

  /** View the technical details of the service */
  getTechnicalDetailsByServiceId = (
    serviceId: number
  ): Promise<ServicesExpandedTechnicalDetails> => {
    return this.ovh.request('GET', `/services/${serviceId}/technicalDetails`);
  };

  /** List offers this option can be converted to */
  listUpgradesByServiceId = (serviceId: number): Promise<OrderCartGenericProductDefinition[]> => {
    return this.ovh.request('GET', `/services/${serviceId}/upgrade`);
  };

  /** View an offer this option can be converted to */
  getUpgradeByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number
  ): Promise<OrderCartGenericProductDefinition> => {
    return this.ovh.request('GET', `/services/${serviceId}/upgrade/${planCode}`);
  };

  /** Perform the migration to another offer. May require you to pay an Order */
  postUpgradeExecuteByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/upgrade/${planCode}/execute`, body);
  };

  /** Simulate the conversion to another offer. It won't generate any Order or issue any changes to your Service */
  postUpgradeSimulateByServiceIdAndPlanCode = (
    planCode: string,
    serviceId: number,
    body: ServicesOperationExecutionRequest
  ): Promise<ServicesOperationOrder> => {
    return this.ovh.request('POST', `/services/${serviceId}/upgrade/${planCode}/simulate`, body);
  };
}

export { ServicesHandler };
