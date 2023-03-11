/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import { ServicesService } from '../models/ServicesService';
import { DedicatedNasTaskTask } from '../models/DedicatedNasTaskTask';
import { DedicatedNasQuota } from '../models/DedicatedNasQuota';
import { DedicatedNasAccess } from '../models/DedicatedNasAccess';
import { DedicatedNasPartition } from '../models/DedicatedNasPartition';
import { DedicatedStorageTaskFunctionEnum } from '../models/DedicatedStorageTaskFunctionEnum';
import { DedicatedNasNas } from '../models/DedicatedNasNas';
import { DedicatedStorageProtocolEnum } from '../models/DedicatedStorageProtocolEnum';
import OVHBase from '../ovh';

class DedicatedNasHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getNas = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/nas');
  };

  /** Get this object properties */
  getNasServiceName = (serviceName: string): Promise<DedicatedNasNas> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}`);
  };

  /** Alter this object properties */
  putNasServiceName = (serviceName: string, body: DedicatedNasNas): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nas/${serviceName}`, body);
  };

  /** Get partition list */
  getNasServiceNamePartition = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/partition`);
  };

  /** Create a  new partition */
  postNasServiceNamePartition = (
    serviceName: string,
    body: { partitionName: string; protocol: DedicatedStorageProtocolEnum; size: number }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('POST', `/dedicated/nas/${serviceName}/partition`, body);
  };

  /** Delete this partition */
  deleteNasServiceNamePartitionPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nas/${serviceName}/partition/${partitionName}`);
  };

  /** Get this object properties */
  getNasServiceNamePartitionPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasPartition> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/partition/${partitionName}`);
  };

  /** Alter this object properties */
  putNasServiceNamePartitionPartitionName = (
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
  getNasServiceNamePartitionPartitionNameAccess = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/access`
    );
  };

  /** Add an Acl to this  partition */
  postNasServiceNamePartitionPartitionNameAccess = (
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
  deleteNasServiceNamePartitionPartitionNameAccessIp = (
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
  getNasServiceNamePartitionPartitionNameAccessIp = (
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
  getNasServiceNamePartitionPartitionNameAuthorizableIps = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/authorizableIps`
    );
  };

  /** Get quota for this partition */
  getNasServiceNamePartitionPartitionNameQuota = (
    partitionName: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`
    );
  };

  /** Set a new quota */
  postNasServiceNamePartitionPartitionNameQuota = (
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
  deleteNasServiceNamePartitionPartitionNameQuotaUid = (
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
  getNasServiceNamePartitionPartitionNameQuotaUid = (
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
  getNasServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putNasServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nas/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getNasServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/task`);
  };

  /** Get this object properties */
  getNasServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('GET', `/dedicated/nas/${serviceName}/task/${taskId}`);
  };
}

export default DedicatedNasHandler;
