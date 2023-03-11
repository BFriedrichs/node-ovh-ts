/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiToken } from '../models/MetricsApiToken';
import { ServicesService } from '../models/ServicesService';
import { MetricsApiService } from '../models/MetricsApiService';
import { MetricsUpdate } from '../models/MetricsUpdate';
import { MetricsApiConsumption } from '../models/MetricsApiConsumption';
import { MetricsQuotaUpdate } from '../models/MetricsQuotaUpdate';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { MetricsLookupTokenCreation } from '../models/MetricsLookupTokenCreation';
import { MetricsTokenUpdate } from '../models/MetricsTokenUpdate';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { MetricsTokenCreation } from '../models/MetricsTokenCreation';
import OVHBase from '../ovh';

class MetricsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/metrics');
  };

  /** Get service */
  getServiceName = (serviceName: string): Promise<MetricsApiService> => {
    return this.ovh.request('GET', `/metrics/${serviceName}`);
  };

  /** Modify service */
  putServiceName = (serviceName: string, body: MetricsUpdate): Promise<MetricsApiService> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/changeContact`, body);
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
    return this.ovh.request('POST', `/metrics/${serviceName}/confirmTermination`, body);
  };

  /** Get consumption for your service */
  getServiceNameConsumption = (serviceName: string): Promise<MetricsApiConsumption> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/consumption`);
  };

  /** Find TokenID for a specific token */
  postServiceNameLookupToken = (
    serviceName: string,
    body: MetricsLookupTokenCreation
  ): Promise<string> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/lookup/token`, body);
  };

  /** Set overquota */
  putServiceNameQuota = (serviceName: string, body: MetricsQuotaUpdate): Promise<string> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/quota`, body);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/serviceInfos`, body);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/terminate`);
  };

  /** Get list of tokens */
  getServiceNameToken = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/token`);
  };

  /** Create a token */
  postServiceNameToken = (
    serviceName: string,
    body: MetricsTokenCreation
  ): Promise<MetricsApiToken> => {
    return this.ovh.request('POST', `/metrics/${serviceName}/token`, body);
  };

  /** Revoke a token */
  deleteServiceNameTokenTokenId = (serviceName: string, tokenId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/metrics/${serviceName}/token/${tokenId}`);
  };

  /** Get a specific token */
  getServiceNameTokenTokenId = (serviceName: string, tokenId: string): Promise<MetricsApiToken> => {
    return this.ovh.request('GET', `/metrics/${serviceName}/token/${tokenId}`);
  };

  /** Modify a token */
  putServiceNameTokenTokenId = (
    serviceName: string,
    tokenId: string,
    body: MetricsTokenUpdate
  ): Promise<MetricsApiToken> => {
    return this.ovh.request('PUT', `/metrics/${serviceName}/token/${tokenId}`, body);
  };
}

export default MetricsHandler;
