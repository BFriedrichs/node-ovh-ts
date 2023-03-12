/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedStorageProtocolEnum } from '../models/DedicatedStorageProtocolEnum';
import { DedicatedNashaSnapshot } from '../models/DedicatedNashaSnapshot';
import { DedicatedNashaOptions } from '../models/DedicatedNashaOptions';
import { DedicatedNashaCustomSnap } from '../models/DedicatedNashaCustomSnap';
import { DedicatedStorageSnapshotEnum } from '../models/DedicatedStorageSnapshotEnum';
import { DedicatedNashaStorage } from '../models/DedicatedNashaStorage';
import { DedicatedNashaQuota } from '../models/DedicatedNashaQuota';
import { DedicatedStoragePartitionUsageTypeEnum } from '../models/DedicatedStoragePartitionUsageTypeEnum';
import { DedicatedNashaPartition } from '../models/DedicatedNashaPartition';
import { DedicatedStorageAclTypeEnum } from '../models/DedicatedStorageAclTypeEnum';
import { DedicatedStorageAtimeEnum } from '../models/DedicatedStorageAtimeEnum';
import { DedicatedNashaAccess } from '../models/DedicatedNashaAccess';
import { ServicesService } from '../models/ServicesService';
import { DedicatedStorageRecordSizeEnum } from '../models/DedicatedStorageRecordSizeEnum';
import { DedicatedNasTaskTask } from '../models/DedicatedNasTaskTask';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DedicatedStorageNasUsageTypeEnum } from '../models/DedicatedStorageNasUsageTypeEnum';
import { DedicatedStorageSyncEnum } from '../models/DedicatedStorageSyncEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DedicatedStorageTaskFunctionEnum } from '../models/DedicatedStorageTaskFunctionEnum';
import { DedicatedTaskStatusEnum } from '../models/DedicatedTaskStatusEnum';
import OVHBase from '../ovh';

class DedicatedNashaHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listNashas = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/nasha');
  };

  /** Get this object properties */
  getNashaByServiceName = (serviceName: string): Promise<DedicatedNashaStorage> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}`);
  };

  /** Alter this object properties */
  updateNashaByServiceName = (serviceName: string, body: DedicatedNashaStorage): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nasha/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchNashaChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmNashaTerminationByServiceName = (
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
  getNashaPartitionByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/partition`);
  };

  /** Create a new partition */
  createNashaPartitionByServiceName = (
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
  deleteNashaPartitionByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nasha/${serviceName}/partition/${partitionName}`);
  };

  /** Get this object properties */
  getNashaPartitionByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaPartition> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/partition/${partitionName}`);
  };

  /** Alter this object properties */
  updateNashaPartitionByServiceNameAndPartitionName = (
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
  getNashaPartitionAccessByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`
    );
  };

  /** Add a new ACL entry */
  addNashaPartitionAccessByServiceNameAndPartitionName = (
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
  deleteNashaPartitionAccessByServiceNameAndPartitionNameAndIp = (
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
  getNashaPartitionAccessByServiceNameAndPartitionNameAndIp = (
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
  getNashaPartitionAuthorizableBlocksByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableBlocks`
    );
  };

  /** Get all IPs that can be used in the ACL */
  getNashaPartitionAuthorizableIpsByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableIps`
    );
  };

  /** Get custom snapshots for this partition */
  getNashaPartitionCustomSnapshotByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`
    );
  };

  /** Create a new snapshot */
  createNashaPartitionCustomSnapshotByServiceNameAndPartitionName = (
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
  deleteNashaPartitionCustomSnapshotByServiceNameAndPartitionNameAndName = (
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
  getNashaPartitionCustomSnapshotByServiceNameAndPartitionNameAndName = (
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
  getNashaPartitionOptionsByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedNashaOptions> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`
    );
  };

  /** Setup options */
  postNashaPartitionOptionsByServiceNameAndPartitionName = (
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
  getNashaPartitionQuotaByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<number[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`
    );
  };

  /** Set a new quota */
  postNashaPartitionQuotaByServiceNameAndPartitionName = (
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
  deleteNashaPartitionQuotaByServiceNameAndPartitionNameAndUid = (
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
  getNashaPartitionQuotaByServiceNameAndPartitionNameAndUid = (
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
  getNashaPartitionSnapshotByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<DedicatedStorageSnapshotEnum[]> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`
    );
  };

  /** Schedule a new snapshot type */
  postNashaPartitionSnapshotByServiceNameAndPartitionName = (
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
  deleteNashaPartitionSnapshotByServiceNameAndPartitionNameAndSnapshotType = (
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
  getNashaPartitionSnapshotByServiceNameAndPartitionNameAndSnapshotType = (
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
  getNashaPartitionUseByServiceNameAndPartitionName = (
    partitionName: string,
    serviceName: string
  ): Promise<number> => {
    return this.ovh.request(
      'GET',
      `/dedicated/nasha/${serviceName}/partition/${partitionName}/use`
    );
  };

  /** Get this object properties */
  getNashaServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateNashaServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/nasha/${serviceName}/serviceInfos`, body);
  };

  /** View task list */
  getNashaTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/task`);
  };

  /** Get this object properties */
  getNashaTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postNashaTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/nasha/${serviceName}/terminate`);
  };

  /** Return statistics about the nas */
  getNashaUseByServiceName = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/dedicated/nasha/${serviceName}/use`);
  };

  /** Delete the vrack container */
  deleteNashaVrackByServiceName = (serviceName: string): Promise<DedicatedNasTaskTask> => {
    return this.ovh.request('DELETE', `/dedicated/nasha/${serviceName}/vrack`);
  };
}

export { DedicatedNashaHandler };
