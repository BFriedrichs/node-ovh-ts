/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedNashaAccess } from '../models/DedicatedNashaAccess';
import { DedicatedNashaOptions } from '../models/DedicatedNashaOptions';
import { DedicatedStorageSyncEnum } from '../models/DedicatedStorageSyncEnum';
import { DedicatedStorageAtimeEnum } from '../models/DedicatedStorageAtimeEnum';
import { DedicatedNashaPartition } from '../models/DedicatedNashaPartition';
import { DedicatedStorageSnapshotEnum } from '../models/DedicatedStorageSnapshotEnum';
import { DedicatedStorageAclTypeEnum } from '../models/DedicatedStorageAclTypeEnum';
import { DedicatedNashaCustomSnap } from '../models/DedicatedNashaCustomSnap';
import { DedicatedStorageRecordSizeEnum } from '../models/DedicatedStorageRecordSizeEnum';
import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import { ServicesService } from '../models/ServicesService';
import { DedicatedStoragePartitionUsageTypeEnum } from '../models/DedicatedStoragePartitionUsageTypeEnum';
import { DedicatedNasTaskTask } from '../models/DedicatedNasTaskTask';
import { DedicatedNashaSnapshot } from '../models/DedicatedNashaSnapshot';
import { DedicatedStorageTaskFunctionEnum } from '../models/DedicatedStorageTaskFunctionEnum';
import { DedicatedStorageProtocolEnum } from '../models/DedicatedStorageProtocolEnum';
import { DedicatedNashaStorage } from '../models/DedicatedNashaStorage';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DedicatedStorageNasUsageTypeEnum } from '../models/DedicatedStorageNasUsageTypeEnum';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DedicatedNashaQuota } from '../models/DedicatedNashaQuota';
import OVHBase from '../ovh';

class DedicatedNashaHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getNasha = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/nasha');
  };

  /** Get this object properties */
  getNashaServiceName = (serviceName: string): Promise<DedicatedNashaStorage> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}`);
  };

  /** Alter this object properties */
  putNashaServiceName = (serviceName: string, body: DedicatedNashaStorage): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nasha/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postNashaServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postNashaServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/confirmTermination`, body);
  };

  /** Get partition list */
  getNashaServiceNamePartition = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/partition`);
  };

  /** Create a new partition */
  postNashaServiceNamePartition = (
    serviceName: string,
    body: {
      partitionDescription?: string;
      partitionName: string;
      protocol: DedicatedStorageProtocolEnum;
      size: number;
    }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/partition`, body);
  };

  /** Delete this partition */
  deleteNashaServiceNamePartitionPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nasha/${serviceName}/partition/${partitionName}`);
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaPartition> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/partition/${partitionName}`);
  };

  /** Alter this object properties */
  putNashaServiceNamePartitionPartitionName = (
    partitionName: string,
    serviceName: string,
    body: DedicatedNashaPartition
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}`,
      body
    );
  };

  /** get ACL for this partition */
  getNashaServiceNamePartitionPartitionNameAccess = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`
    );
  };

  /** Add a new ACL entry */
  postNashaServiceNamePartitionPartitionNameAccess = (
    partitionName: string,
    serviceName: string,
    body: { ip: string; type?: DedicatedStorageAclTypeEnum }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`,
      body
    );
  };

  /** Delete an ACL entry */
  deleteNashaServiceNamePartitionPartitionNameAccessIp = (
    ip: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`
    );
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionNameAccessIp = (
    ip: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaAccess> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`
    );
  };

  /** Get all RIPE/ARIN blocks that can be used in the ACL */
  getNashaServiceNamePartitionPartitionNameAuthorizableBlocks = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableBlocks`
    );
  };

  /** Get all IPs that can be used in the ACL */
  getNashaServiceNamePartitionPartitionNameAuthorizableIps = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableIps`
    );
  };

  /** Get custom snapshots for this partition */
  getNashaServiceNamePartitionPartitionNameCustomSnapshot = (
    partitionName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`
    );
  };

  /** Create a new snapshot */
  postNashaServiceNamePartitionPartitionNameCustomSnapshot = (
    partitionName: string,
    serviceName: string,
    body: { expiration?: string; name: string }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`,
      body
    );
  };

  /** Delete a given snapshot */
  deleteNashaServiceNamePartitionPartitionNameCustomSnapshotName = (
    name: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`
    );
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionNameCustomSnapshotName = (
    name: string,
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaCustomSnap> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`
    );
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionNameOptions = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaOptions> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`
    );
  };

  /** Setup options */
  postNashaServiceNamePartitionPartitionNameOptions = (
    partitionName: string,
    serviceName: string,
    body: {
      atime?: DedicatedStorageAtimeEnum;
      recordsize?: DedicatedStorageRecordSizeEnum;
      sync?: DedicatedStorageSyncEnum;
    }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`,
      body
    );
  };

  /** Get quota for this partition */
  getNashaServiceNamePartitionPartitionNameQuota = (
    partitionName: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`
    );
  };

  /** Set a new quota */
  postNashaServiceNamePartitionPartitionNameQuota = (
    partitionName: string,
    serviceName: string,
    body: { size: number; uid: number }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`,
      body
    );
  };

  /** Delete a given quota */
  deleteNashaServiceNamePartitionPartitionNameQuotaUid = (
    partitionName: string,
    serviceName: string,
    uid: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`
    );
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionNameQuotaUid = (
    partitionName: string,
    serviceName: string,
    uid: number
  ): Promise<DedicatedNashaQuota> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`
    );
  };

  /** Get scheduled snapshot types for this partition */
  getNashaServiceNamePartitionPartitionNameSnapshot = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedStorageSnapshotEnum> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`
    );
  };

  /** Schedule a new snapshot type */
  postNashaServiceNamePartitionPartitionNameSnapshot = (
    partitionName: string,
    serviceName: string,
    body: { snapshotType: DedicatedStorageSnapshotEnum }
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'POST',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`,
      body
    );
  };

  /** Delete a given snapshot */
  deleteNashaServiceNamePartitionPartitionNameSnapshotSnapshotType = (
    partitionName: string,
    serviceName: string,
    snapshotType: DedicatedStorageSnapshotEnum
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`
    );
  };

  /** Get this object properties */
  getNashaServiceNamePartitionPartitionNameSnapshotSnapshotType = (
    partitionName: string,
    serviceName: string,
    snapshotType: DedicatedStorageSnapshotEnum
  ): Promise<DedicatedNashaSnapshot> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`
    );
  };

  /** Return statistics about the partition */
  getNashaServiceNamePartitionPartitionNameUse = (
    partitionName: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/use`
    );
  };

  /** Get this object properties */
  getNashaServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putNashaServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nasha/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getNashaServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/task`);
  };

  /** Get this object properties */
  getNashaServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postNashaServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/terminate`);
  };

  /** Return statistics about the nas */
  getNashaServiceNameUse = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/use`);
  };

  /** Delete the vrack container */
  deleteNashaServiceNameVrack = (serviceName: string): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nasha/${serviceName}/vrack`);
  };
}

export default DedicatedNashaHandler;
