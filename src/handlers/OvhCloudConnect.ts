/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectInterfaceMetricsTypeEnum } from '../models/OvhcloudconnectInterfaceMetricsTypeEnum';
import { OvhcloudconnectUpdate } from '../models/OvhcloudconnectUpdate';
import { OvhcloudconnectTo } from '../models/OvhcloudconnectTo';
import { OvhcloudconnectDatacenterExtraConfig } from '../models/OvhcloudconnectDatacenterExtraConfig';
import { OvhcloudconnectPopConfig } from '../models/OvhcloudconnectPopConfig';
import { OvhcloudconnectService } from '../models/OvhcloudconnectService';
import { OvhcloudconnectKey } from '../models/OvhcloudconnectKey';
import { ServicesService } from '../models/ServicesService';
import { OvhcloudconnectInterface } from '../models/OvhcloudconnectInterface';
import { OvhcloudconnectDatacenter } from '../models/OvhcloudconnectDatacenter';
import { OvhcloudconnectDiagnosticConfiguration } from '../models/OvhcloudconnectDiagnosticConfiguration';
import { OvhcloudconnectInterfaceMetricsPeriodEnum } from '../models/OvhcloudconnectInterfaceMetricsPeriodEnum';
import { OvhcloudconnectSendKeyAnswer } from '../models/OvhcloudconnectSendKeyAnswer';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { OvhcloudconnectTask } from '../models/OvhcloudconnectTask';
import { OvhcloudconnectMetrics } from '../models/OvhcloudconnectMetrics';
import { OvhcloudconnectDatacenterConfig } from '../models/OvhcloudconnectDatacenterConfig';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { OvhcloudconnectDiagnostic } from '../models/OvhcloudconnectDiagnostic';
import OVHBase from '../ovh';

class OvhCloudConnectHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  lists = (): Promise<string[]> => {
    return this.ovh.request('GET', '/ovhCloudConnect');
  };

  /** Get service */
  getByServiceName = (serviceName: string): Promise<OvhcloudconnectService> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}`);
  };

  /** Modify service */
  putByServiceName = (serviceName: string, body: OvhcloudconnectUpdate): Promise<void> => {
    return this.ovh.request('PUT', `/ovhCloudConnect/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/changeContact`, body);
  };

  /** Get Pop Configuration linked to of a OVHcloud Connect Service */
  getConfigPopByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/config/pop`);
  };

  /** Create a Pop Configuration */
  createConfigPopByServiceName = (
    serviceName: string,
    body: OvhcloudconnectPopConfig
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/config/pop`, body);
  };

  /** Delete a Pop Configuration */
  deleteConfigPopByServiceNameAndPopId = (
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('DELETE', `/ovhCloudConnect/${serviceName}/config/pop/${popId}`);
  };

  /** Get Pop Configuration of a OVHcloud Connect Service */
  getConfigPopByServiceNameAndPopId = (
    popId: number,
    serviceName: string
  ): Promise<OvhcloudconnectPopConfig> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/config/pop/${popId}`);
  };

  /** Get Datacenter Configuration linked to of a OVHcloud Connect Service */
  getConfigPopDatacenterByServiceNameAndPopId = (
    popId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter`
    );
  };

  /** Create a Datacenter Configuration */
  createConfigPopDatacenterByServiceNameAndPopId = (
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
  deleteConfigPopDatacenterByServiceNameAndPopIdAndDatacenterId = (
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
  getConfigPopDatacenterByServiceNameAndPopIdAndDatacenterId = (
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
  getConfigPopDatacenterExtraByServiceNameAndPopIdAndDatacenterId = (
    datacenterId: number,
    popId: number,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/ovhCloudConnect/${serviceName}/config/pop/${popId}/datacenter/${datacenterId}/extra`
    );
  };

  /** Create a Datacenter Extra Configuration */
  createConfigPopDatacenterExtraByServiceNameAndPopIdAndDatacenterId = (
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
  deleteConfigPopDatacenterExtraByServiceNameAndPopIdAndDatacenterIdAndExtraId = (
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
  getConfigPopDatacenterExtraByServiceNameAndPopIdAndDatacenterIdAndExtraId = (
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
  confirmTerminationByServiceName = (
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
  listDatacentersByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/datacenter`);
  };

  /** Get Datacenter */
  getDatacenterByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectDatacenter> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/datacenter/${id}`);
  };

  /** Get Diagnostics linked to a OVHcloud Connect Service */
  getDiagnosticByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/diagnostic`);
  };

  /** Create a Diagnostic linked to a OVHcloud Connect Service */
  createDiagnosticByServiceName = (
    serviceName: string,
    body: OvhcloudconnectDiagnosticConfiguration
  ): Promise<OvhcloudconnectDiagnostic> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/diagnostic`, body);
  };

  /** Get Diagnostic linked to a OVHcloud Connect Service */
  getDiagnosticByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectDiagnostic> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/diagnostic/${id}`);
  };

  /** List interfaces linked to the Service */
  listInterfacesByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface`);
  };

  /** Get the Interface information */
  getInterfaceByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectInterface> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface/${id}`);
  };

  /** Lock the port */
  postInterfaceLockByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/interface/${id}/lock`);
  };

  /** Statistics for an OCC interface for a given type */
  getInterfaceStatisticsByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectMetrics[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/interface/${id}/statistics`);
  };

  /** Unlock the port */
  postInterfaceUnlockByServiceNameAndId = (
    id: number,
    serviceName: string
  ): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/interface/${id}/unlock`);
  };

  /** Generate a loa for a service */
  postLoaByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/loa`);
  };

  /** Get this object properties */
  getServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateServiceInfosByServiceName = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/ovhCloudConnect/${serviceName}/serviceInfos`, body);
  };

  /** Get Keys linked to a OVHcloud Connect Service */
  getServiceKeyByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceKey`);
  };

  /** Get Key linked to a OVHcloud Connect Service */
  getServiceKeyByServiceNameAndServiceKeyId = (
    serviceKeyId: number,
    serviceName: string
  ): Promise<OvhcloudconnectKey> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/serviceKey/${serviceKeyId}`);
  };

  /** Regenerate Service Key linked to a OVHcloud Connect Service */
  postServiceKeyRegenerateByServiceNameAndServiceKeyId = (
    serviceKeyId: number,
    serviceName: string
  ): Promise<OvhcloudconnectKey> => {
    return this.ovh.request(
      'POST',
      `/ovhCloudConnect/${serviceName}/serviceKey/${serviceKeyId}/regenerate`
    );
  };

  /** Send key value to customer */
  sendServiceKeyByServiceNameAndServiceKeyId = (
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
  getTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/task`);
  };

  /** Get Tasks linked to a OVHcloud Connect Service */
  getTaskByServiceNameAndId = (id: number, serviceName: string): Promise<OvhcloudconnectTask> => {
    return this.ovh.request('GET', `/ovhCloudConnect/${serviceName}/task/${id}`);
  };

  /** Terminate your service */
  postTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/ovhCloudConnect/${serviceName}/terminate`);
  };
}

export { OvhCloudConnectHandler };
