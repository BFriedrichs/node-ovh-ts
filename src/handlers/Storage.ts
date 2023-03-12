/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppShareUpdate } from '../models/StorageNetAppShareUpdate';
import { StorageNetAppShareSnapshotPolicyUpdate } from '../models/StorageNetAppShareSnapshotPolicyUpdate';
import { StorageNetAppShareSnapshotReserveUpdate } from '../models/StorageNetAppShareSnapshotReserveUpdate';
import { StorageNetAppShareSnapshotUpdate } from '../models/StorageNetAppShareSnapshotUpdate';
import { StorageNetAppShareSnapshotReserve } from '../models/StorageNetAppShareSnapshotReserve';
import { StorageNetAppShareAccessPath } from '../models/StorageNetAppShareAccessPath';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { StorageNetAppShareSnapshot } from '../models/StorageNetAppShareSnapshot';
import { StorageNetAppService } from '../models/StorageNetAppService';
import { StorageNetAppShareExtendOrShrink } from '../models/StorageNetAppShareExtendOrShrink';
import { ServicesService } from '../models/ServicesService';
import { StorageNetAppShareSnapshotPolicy } from '../models/StorageNetAppShareSnapshotPolicy';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { StorageNetAppSnapshotPolicyUpdate } from '../models/StorageNetAppSnapshotPolicyUpdate';
import { StorageNetAppShareACLRule } from '../models/StorageNetAppShareACLRule';
import { StorageNetAppShare } from '../models/StorageNetAppShare';
import { StorageNetAppSnapshotPolicy } from '../models/StorageNetAppSnapshotPolicy';
import { StorageNetAppServiceUpdate } from '../models/StorageNetAppServiceUpdate';
import OVHBase from '../ovh';

class StorageHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listNetapp = (): Promise<StorageNetAppService[]> => {
    return this.ovh.request('GET', '/storage/netapp');
  };

  /** Get service details */
  getNetappByServiceName = (serviceName: string): Promise<StorageNetAppService> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}`);
  };

  /** Update service */
  updateNetappByServiceName = (
    serviceName: string,
    body: StorageNetAppServiceUpdate
  ): Promise<StorageNetAppService> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}`, body);
  };

  /** Launch a contact change procedure */
  launchNetappChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmNetappTerminationByServiceName = (
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
  getNetappServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateNetappServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}/serviceInfos`, body);
  };

  /** List available shares */
  listNetappShareByServiceName = (serviceName: string): Promise<StorageNetAppShare[]> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share`);
  };

  /** Create a share */
  createNetappShareByServiceName = (
    serviceName: string,
    body: StorageNetAppShare
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share`, body);
  };

  /** Delete a share */
  deleteNetappShareByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/storage/netapp/${serviceName}/share/${shareId}`);
  };

  /** Get share details */
  getNetappShareByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}`);
  };

  /** Update a share */
  updateNetappShareByServiceNameAndShareId = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareUpdate
  ): Promise<StorageNetAppShare> => {
    return this.ovh.request('PUT', `/storage/netapp/${serviceName}/share/${shareId}`, body);
  };

  /** List available access paths */
  listNetappShareAccessPathByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareAccessPath[]> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/accessPath`);
  };

  /** Get access path details */
  getNetappShareAccessPathByServiceNameAndShareIdAndAccessPathId = (
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
  listNetappShareAclByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareACLRule[]> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/acl`);
  };

  /** Create an ACL */
  createNetappShareAclByServiceNameAndShareId = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareACLRule
  ): Promise<StorageNetAppShareACLRule> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/acl`, body);
  };

  /** Delete an ACL */
  deleteNetappShareAclByServiceNameAndShareIdAndAclRuleId = (
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
  getNetappShareAclByServiceNameAndShareIdAndAclRuleId = (
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
  postNetappShareExtendByServiceNameAndShareId = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareExtendOrShrink
  ): Promise<void> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/extend`, body);
  };

  /** Shrink share size */
  postNetappShareShrinkByServiceNameAndShareId = (
    serviceName: string,
    shareId: string,
    body: StorageNetAppShareExtendOrShrink
  ): Promise<void> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/share/${shareId}/shrink`, body);
  };

  /** List available snapshots */
  listNetappShareSnapshotByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshot[]> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/share/${shareId}/snapshot`);
  };

  /** Create a snapshot */
  createNetappShareSnapshotByServiceNameAndShareId = (
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
  deleteNetappShareSnapshotByServiceNameAndShareIdAndSnapshotId = (
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
  getNetappShareSnapshotByServiceNameAndShareIdAndSnapshotId = (
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
  updateNetappShareSnapshotByServiceNameAndShareIdAndSnapshotId = (
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
  postNetappShareSnapshotHoldByServiceNameAndShareIdAndSnapshotId = (
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
  getNetappShareSnapshotPolicyByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshotPolicy> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotPolicy`
    );
  };

  /** Update snapshot policy used by a share */
  updateNetappShareSnapshotPolicyByServiceNameAndShareId = (
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
  getNetappShareSnapshotReserveByServiceNameAndShareId = (
    serviceName: string,
    shareId: string
  ): Promise<StorageNetAppShareSnapshotReserve> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/share/${shareId}/snapshotReserve`
    );
  };

  /** Update snapshot reserve properties of a share */
  updateNetappShareSnapshotReserveByServiceNameAndShareId = (
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
  getNetappSnapshotPolicyByServiceName = (
    serviceName: string
  ): Promise<StorageNetAppSnapshotPolicy[]> => {
    return this.ovh.request('GET', `/storage/netapp/${serviceName}/snapshotPolicy`);
  };

  /** Create a snapshot policy */
  createNetappSnapshotPolicyByServiceName = (
    serviceName: string,
    body: StorageNetAppSnapshotPolicy
  ): Promise<StorageNetAppSnapshotPolicy> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/snapshotPolicy`, body);
  };

  /** Delete a snapshot policy */
  deleteNetappSnapshotPolicyByServiceNameAndSnapshotPolicyId = (
    serviceName: string,
    snapshotPolicyId: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/storage/netapp/${serviceName}/snapshotPolicy/${snapshotPolicyId}`
    );
  };

  /** Get snapshot policy details */
  getNetappSnapshotPolicyByServiceNameAndSnapshotPolicyId = (
    serviceName: string,
    snapshotPolicyId: string
  ): Promise<StorageNetAppSnapshotPolicy> => {
    return this.ovh.request(
      'GET',
      `/storage/netapp/${serviceName}/snapshotPolicy/${snapshotPolicyId}`
    );
  };

  /** Update a snapshot policy */
  updateNetappSnapshotPolicyByServiceNameAndSnapshotPolicyId = (
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
  postNetappTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/storage/netapp/${serviceName}/terminate`);
  };
}

export { StorageHandler };
