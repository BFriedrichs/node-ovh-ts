/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppShareSnapshot } from '../models/StorageNetAppShareSnapshot';
import { ServicesService } from '../models/ServicesService';
import { StorageNetAppServiceUpdate } from '../models/StorageNetAppServiceUpdate';
import { StorageNetAppShareSnapshotReserve } from '../models/StorageNetAppShareSnapshotReserve';
import { StorageNetAppShareSnapshotReserveUpdate } from '../models/StorageNetAppShareSnapshotReserveUpdate';
import { StorageNetAppShareExtendOrShrink } from '../models/StorageNetAppShareExtendOrShrink';
import { StorageNetAppService } from '../models/StorageNetAppService';
import { StorageNetAppShareACLRule } from '../models/StorageNetAppShareACLRule';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { StorageNetAppShareSnapshotPolicyUpdate } from '../models/StorageNetAppShareSnapshotPolicyUpdate';
import { StorageNetAppShare } from '../models/StorageNetAppShare';
import { StorageNetAppShareSnapshotPolicy } from '../models/StorageNetAppShareSnapshotPolicy';
import { StorageNetAppSnapshotPolicyUpdate } from '../models/StorageNetAppSnapshotPolicyUpdate';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { StorageNetAppShareSnapshotUpdate } from '../models/StorageNetAppShareSnapshotUpdate';
import { StorageNetAppShareAccessPath } from '../models/StorageNetAppShareAccessPath';
import { StorageNetAppSnapshotPolicy } from '../models/StorageNetAppSnapshotPolicy';
import { StorageNetAppShareUpdate } from '../models/StorageNetAppShareUpdate';
import OVHBase from '../ovh';

class StorageHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getNetapp = (): Promise<StorageNetAppService> => {
    return this.ovh.request('GET', '/storage/netapp');
  };

  /** Get service details */
  getNetappServiceName = (serviceName: string): Promise<StorageNetAppService> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}`);
  };

  /** Update service */
  putNetappServiceName = (
    serviceName: string,
    body: StorageNetAppServiceUpdate
  ): Promise<StorageNetAppService> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  postNetappServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postNetappServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getNetappServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putNetappServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}/serviceInfos`, body);
  };

  /** List available shares */
  getNetappServiceNameShare = (serviceName: string): Promise<StorageNetAppShare> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share`);
  };

  /** Create a share */
  postNetappServiceNameShare = (
    serviceName: string,
    body: StorageNetAppShare
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share`, body);
  };

  /** Delete a share */
  deleteNetappServiceNameShareShareId = (serviceName: string, shareId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/storage/netapp/${serviceName}/share/${shareId}`);
  };

  /** Get share details */
  getNetappServiceNameShareShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}`);
  };

  /** Update a share */
  putNetappServiceNameShareShareId = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareUpdate
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}/share/${shareId}`, body);
  };

  /** List available access paths */
  getNetappServiceNameShareShareIdAccessPath = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareAccessPath> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/accessPath`);
  };

  /** Get access path details */
  getNetappServiceNameShareShareIdAccessPathAccessPathId = (
    accessPathId: string,
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareAccessPath> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/accessPath/${accessPathId}`
    );
  };

  /** List available ACLs */
  getNetappServiceNameShareShareIdAcl = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareACLRule> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/acl`);
  };

  /** Create an ACL */
  postNetappServiceNameShareShareIdAcl = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareACLRule
  ): Promise<StorageNetAppShareACLRule> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/acl`, body);
  };

  /** Delete an ACL */
  deleteNetappServiceNameShareShareIdAclAclRuleId = (
    aclRuleId: string,
    serviceName: string,
    shareId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/storage/netapp/${serviceName}/share/${shareId}/acl/${aclRuleId}`
    );
  };

  /** Get ACL details */
  getNetappServiceNameShareShareIdAclAclRuleId = (
    aclRuleId: string,
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareACLRule> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/acl/${aclRuleId}`
    );
  };

  /** Extend share size */
  postNetappServiceNameShareShareIdExtend = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareExtendOrShrink
  ): Promise<void> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/extend`, body);
  };

  /** Shrink share size */
  postNetappServiceNameShareShareIdShrink = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareExtendOrShrink
  ): Promise<void> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/shrink`, body);
  };

  /** List available snapshots */
  getNetappServiceNameShareShareIdSnapshot = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshot> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/snapshot`);
  };

  /** Create a snapshot */
  postNetappServiceNameShareShareIdSnapshot = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareSnapshot
  ): Promise<StorageNetAppShareSnapshot> => {
    return this.ovh.request(
      'POST',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshot`,
      body
    );
  };

  /** Delete a snapshot */
  deleteNetappServiceNameShareShareIdSnapshotSnapshotId = (
    serviceName: string,
    shareId: string,
    snapshotId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshot/${snapshotId}`
    );
  };

  /** Get snapshot details */
  getNetappServiceNameShareShareIdSnapshotSnapshotId = (
    serviceName: string,
    shareId: string,
    snapshotId: string
  ): Promise<StorageNetAppShareSnapshot> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshot/${snapshotId}`
    );
  };

  /** Update a snapshot */
  putNetappServiceNameShareShareIdSnapshotSnapshotId = (
    serviceName: string,
    shareId: string,
    snapshotId: string,
    body: StorageNetAppShareSnapshotUpdate
  ): Promise<StorageNetAppShareSnapshot> => {
    return this.ovh.request(
      'PUT',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshot/${snapshotId}`,
      body
    );
  };

  /** Hold an automatic share snapshot */
  postNetappServiceNameShareShareIdSnapshotSnapshotIdHold = (
    serviceName: string,
    shareId: string,
    snapshotId: string
  ): Promise<StorageNetAppShareSnapshot> => {
    return this.ovh.request(
      'POST',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshot/${snapshotId}/hold`
    );
  };

  /** Get snapshot policy used by a share */
  getNetappServiceNameShareShareIdSnapshotPolicy = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshotPolicy> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotPolicy`
    );
  };

  /** Update snapshot policy used by a share */
  putNetappServiceNameShareShareIdSnapshotPolicy = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareSnapshotPolicyUpdate
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotPolicy`,
      body
    );
  };

  /** Get snapshot reserve properties of a share */
  getNetappServiceNameShareShareIdSnapshotReserve = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshotReserve> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotReserve`
    );
  };

  /** Update snapshot reserve properties of a share */
  putNetappServiceNameShareShareIdSnapshotReserve = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareSnapshotReserveUpdate
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotReserve`,
      body
    );
  };

  /** Get a list of snapshot policies */
  getNetappServiceNameSnapshotPolicy = (
    serviceName: string
  ): Promise<StorageNetAppSnapshotPolicy> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/snapshotPolicy`);
  };

  /** Create a snapshot policy */
  postNetappServiceNameSnapshotPolicy = (
    serviceName: string,
    body: StorageNetAppSnapshotPolicy
  ): Promise<StorageNetAppSnapshotPolicy> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/snapshotPolicy`, body);
  };

  /** Delete a snapshot policy */
  deleteNetappServiceNameSnapshotPolicySnapshotPolicyId = (
    serviceName: string,
    snapshotPolicyId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/storage/netapp/${serviceName}/snapshotPolicy/${snapshotPolicyId}`
    );
  };

  /** Get snapshot policy details */
  getNetappServiceNameSnapshotPolicySnapshotPolicyId = (
    serviceName: string,
    snapshotPolicyId: string
  ): Promise<StorageNetAppSnapshotPolicy> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/snapshotPolicy/${snapshotPolicyId}`
    );
  };

  /** Update a snapshot policy */
  putNetappServiceNameSnapshotPolicySnapshotPolicyId = (
    serviceName: string,
    snapshotPolicyId: string,
    body: StorageNetAppSnapshotPolicyUpdate
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/storage/netapp/${serviceName}/snapshotPolicy/${snapshotPolicyId}`,
      body
    );
  };

  /** Terminate your service */
  postNetappServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/terminate`);
  };
}

export default StorageHandler;
