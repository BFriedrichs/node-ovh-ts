/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectService } from '../models/OvhcloudconnectService';
import { OvhcloudconnectInterface } from '../models/OvhcloudconnectInterface';
import { OvhcloudconnectDatacenterExtraConfig } from '../models/OvhcloudconnectDatacenterExtraConfig';
import { OvhcloudconnectDiagnosticConfiguration } from '../models/OvhcloudconnectDiagnosticConfiguration';
import { OvhcloudconnectUpdate } from '../models/OvhcloudconnectUpdate';
import { OvhcloudconnectTo } from '../models/OvhcloudconnectTo';
import { OvhcloudconnectInterfaceMetricsTypeEnum } from '../models/OvhcloudconnectInterfaceMetricsTypeEnum';
import { ServicesService } from '../models/ServicesService';
import { OvhcloudconnectPopConfig } from '../models/OvhcloudconnectPopConfig';
import { OvhcloudconnectMetrics } from '../models/OvhcloudconnectMetrics';
import { OvhcloudconnectSendKeyAnswer } from '../models/OvhcloudconnectSendKeyAnswer';
import { OvhcloudconnectKey } from '../models/OvhcloudconnectKey';
import { OvhcloudconnectDatacenterConfig } from '../models/OvhcloudconnectDatacenterConfig';
import { OvhcloudconnectTask } from '../models/OvhcloudconnectTask';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { OvhcloudconnectDatacenter } from '../models/OvhcloudconnectDatacenter';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { OvhcloudconnectDiagnostic } from '../models/OvhcloudconnectDiagnostic';
import { OvhcloudconnectInterfaceMetricsPeriodEnum } from '../models/OvhcloudconnectInterfaceMetricsPeriodEnum';
import OVHBase from '../ovh';

class OvhCloudConnectHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/ovhCloudConnect');
  };

  /** Get service */
  getServiceName = (serviceName: string): Promise<OvhcloudconnectService> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}`);
  };

  /** Modify service */
  putServiceName = (serviceName: string, body: OvhcloudconnectUpdate): Promise<void> => {
    return this.ovh.request('PUT', `/ovhCloudConnect/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/changeContact`, body);
  };

  /** Get Pop Configuration linked to of a OVHcloud Connect Service */
  getServiceNameConfigPop = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/config/pop`);
  };

  /** Create a Pop Configuration */
  postServiceNameConfigPop = (
    serviceName: string,
    body: OvhcloudconnectPopConfig
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/config/pop`, body);
  };

  /** Delete a Pop Configuration */
  deleteServiceNameConfigPopPopId = (
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('DELETE', `/ovhCloudConnect/${serviceName}/config/pop/${popId}`);
  };

  /** Get Pop Configuration of a OVHcloud Connect Service */
  getServiceNameConfigPopPopId = (
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectPopConfig> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/config/pop/${popId}`);
  };

  /** Get Datacenter Configuration linked to of a OVHcloud Connect Service */
  getServiceNameConfigPopPopIdDatacenter = (
    popId: number,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter`
    );
  };

  /** Create a Datacenter Configuration */
  postServiceNameConfigPopPopIdDatacenter = (
    popId: number,
    serviceName: string,
    body: OvhcloudconnectDatacenterConfig
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request(
      'POST',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter`,
      body
    );
  };

  /** Delete a Datacenter Configuration */
  deleteServiceNameConfigPopPopIdDatacenterDatacenterId = (
    datacenterId: number,
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request(
      'DELETE',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}`
    );
  };

  /** Get Datacenter Configuration of a OVHcloud Connect Service */
  getServiceNameConfigPopPopIdDatacenterDatacenterId = (
    datacenterId: number,
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectDatacenterConfig> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}`
    );
  };

  /** Get Datacenter Extra Configuration linked to of a OVHcloud Connect Service */
  getServiceNameConfigPopPopIdDatacenterDatacenterIdExtra = (
    datacenterId: number,
    popId: number,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}/extra`
    );
  };

  /** Create a Datacenter Extra Configuration */
  postServiceNameConfigPopPopIdDatacenterDatacenterIdExtra = (
    datacenterId: number,
    popId: number,
    serviceName: string,
    body: OvhcloudconnectDatacenterExtraConfig
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request(
      'POST',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}/extra`,
      body
    );
  };

  /** Delete a Datacenter Extra Configuration */
  deleteServiceNameConfigPopPopIdDatacenterDatacenterIdExtraExtraId = (
    datacenterId: number,
    extraId: number,
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request(
      'DELETE',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}/extra/${extraId}`
    );
  };

  /** Get Datacenter Extra Configuration of a OVHcloud Connect Service */
  getServiceNameConfigPopPopIdDatacenterDatacenterIdExtraExtraId = (
    datacenterId: number,
    extraId: number,
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectDatacenterExtraConfig> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}/extra/${extraId}`
    );
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
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/confirmTermination`, body);
  };

  /** List available Datacenter */
  getServiceNameDatacenter = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/datacenter`);
  };

  /** Get Datacenter */
  getServiceNameDatacenterId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectDatacenter> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/datacenter/${id}`);
  };

  /** Get Diagnostics linked to a OVHcloud Connect Service */
  getServiceNameDiagnostic = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/diagnostic`);
  };

  /** Create a Diagnostic linked to a OVHcloud Connect Service */
  postServiceNameDiagnostic = (
    serviceName: string,
    body: OvhcloudconnectDiagnosticConfiguration
  ): Promise<OvhcloudconnectDiagnostic> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/diagnostic`, body);
  };

  /** Get Diagnostic linked to a OVHcloud Connect Service */
  getServiceNameDiagnosticId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectDiagnostic> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/diagnostic/${id}`);
  };

  /** List interfaces linked to the Service */
  getServiceNameInterface = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface`);
  };

  /** Get the Interface information */
  getServiceNameInterfaceId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectInterface> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface/${id}`);
  };

  /** Lock the port */
  postServiceNameInterfaceIdLock = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/interface/${id}/lock`);
  };

  /** Statistics for an OCC interface for a given type */
  getServiceNameInterfaceIdStatistics = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectMetrics> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface/${id}/statistics`);
  };

  /** Unlock the port */
  postServiceNameInterfaceIdUnlock = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/interface/${id}/unlock`);
  };

  /** Generate a loa for a service */
  postServiceNameLoa = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/loa`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/ovhCloudConnect/${serviceName}/serviceInfos`, body);
  };

  /** Get Keys linked to a OVHcloud Connect Service */
  getServiceNameServiceKey = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceKey`);
  };

  /** Get Key linked to a OVHcloud Connect Service */
  getServiceNameServiceKeyServiceKeyId = (
    serviceKeyId: number,
    serviceName: string
  ): Promise<OvhcloudconnectKey> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceKey/${serviceKeyId}`);
  };

  /** Regenerate Service Key linked to a OVHcloud Connect Service */
  postServiceNameServiceKeyServiceKeyIdRegenerate = (
    serviceKeyId: number,
    serviceName: string
  ): Promise<OvhcloudconnectKey> => {
    return this.ovh.request(
      'POST',
      `/ovhCloudConnect/${serviceName}/serviceKey/${serviceKeyId}/regenerate`
    );
  };

  /** Send key value to customer */
  postServiceNameServiceKeyServiceKeyIdSend = (
    serviceKeyId: number,
    serviceName: string,
    body: OvhcloudconnectTo
  ): Promise<OvhcloudconnectSendKeyAnswer> => {
    return this.ovh.request(
      'POST',
      `/ovhCloudConnect/${serviceName}/serviceKey/${serviceKeyId}/send`,
      body
    );
  };

  /** Get Task linked to a OVHcloud Connect Service */
  getServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/task`);
  };

  /** Get Tasks linked to a OVHcloud Connect Service */
  getServiceNameTaskId = (id: number, serviceName: string): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/task/${id}`);
  };

  /** Terminate your service */
  postServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/terminate`);
  };
}

export default OvhCloudConnectHandler;
