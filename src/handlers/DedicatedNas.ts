/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedNasTaskTask } from '../models/DedicatedNasTaskTask';
import { DedicatedStorageProtocolEnum } from '../models/DedicatedStorageProtocolEnum';
import { DedicatedNasPartition } from '../models/DedicatedNasPartition';
import { DedicatedNasNas } from '../models/DedicatedNasNas';
import { DedicatedNasQuota } from '../models/DedicatedNasQuota';
import { DedicatedStorageTaskFunctionEnum } from '../models/DedicatedStorageTaskFunctionEnum';
import { DedicatedNasAccess } from '../models/DedicatedNasAccess';
import { ServicesService } from '../models/ServicesService';
import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import OVHBase from '../ovh';

class DedicatedNasHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listNas = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/nas');
  };

  /** Get this object properties */
  getNasByServiceName = (serviceName: string): Promise<DedicatedNasNas> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}`);
  };

  /** Alter this object properties */
  updateNasByServiceName = (serviceName: string, body: DedicatedNasNas): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nas/${serviceName}`, body);
  };

  /** Get partition list */
  getNasPartitionByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/partition`);
  };

  /** Create a  new partition */
  createNasPartitionByServiceName = (
    serviceName: string,
    body: { partitionName: string; protocol: DedicatedStorageProtocolEnum; size: number }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('POST', `/dedicated/nas/${serviceName}/partition`, body);
  };

  /** Delete this partition */
  deleteNasPartitionByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nas/${serviceName}/partition/${partitionName}`);
  };

  /** Get this object properties */
  getNasPartitionByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasPartition> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/partition/${partitionName}`);
  };

  /** Alter this object properties */
  updateNasPartitionByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string,
    body: DedicatedNasPartition
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/dedicated/nas/${serviceName}/partition/${partitionName}`,
      body
    );
  };

  /** get ACL for this partition */
  getNasPartitionAccessByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/access`
    );
  };

  /** Add an Acl to this  partition */
  addNasPartitionAccessByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string,
    body: { ip: string }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/access`,
      body
    );
  };

  /** Delete a given snapshot */
  deleteNasPartitionAccessByServiceNameAndPartitionNameAndIp = (
    ip: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`
    );
  };

  /** Get this object properties */
  getNasPartitionAccessByServiceNameAndPartitionNameAndIp = (
    ip: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasAccess> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`
    );
  };

  /** Get all IPs that can be used in the ACL */
  getNasPartitionAuthorizableIpsByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/authorizableIps`
    );
  };

  /** Get quota for this partition */
  getNasPartitionQuotaByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`
    );
  };

  /** Set a new quota */
  postNasPartitionQuotaByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string,
    body: { size: number; uid: number }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`,
      body
    );
  };

  /** Delete a given quota */
  deleteNasPartitionQuotaByServiceNameAndPartitionNameAndUid = (
    partitionName: string,
    serviceName: string,
    uid: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`
    );
  };

  /** Get this object properties */
  getNasPartitionQuotaByServiceNameAndPartitionNameAndUid = (
    partitionName: string,
    serviceName: string,
    uid: number
  ): Promise<DedicatedNasQuota> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`
    );
  };

  /** Get this object properties */
  getNasServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateNasServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nas/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getNasTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/task`);
  };

  /** Get this object properties */
  getNasTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/task/${taskId}`);
  };
}

export { DedicatedNasHandler };
