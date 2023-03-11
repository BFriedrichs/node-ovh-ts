/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCephUserGetResponse } from '../models/DedicatedCephUserGetResponse';
import { ServicesService } from '../models/ServicesService';
import { DedicatedCephAclGetResponse } from '../models/DedicatedCephAclGetResponse';
import { DedicatedCephCephfsListResponse } from '../models/DedicatedCephCephfsListResponse';
import { DedicatedCephCephfsGetResponse } from '../models/DedicatedCephCephfsGetResponse';
import { DedicatedCephPoolListResponse } from '../models/DedicatedCephPoolListResponse';
import { DedicatedCephUserListResponse } from '../models/DedicatedCephUserListResponse';
import { DedicatedCephUserPoolPermSetAllPermissions } from '../models/DedicatedCephUserPoolPermSetAllPermissions';
import { DedicatedCephClusterUpdateCrushTunablesEnum } from '../models/DedicatedCephClusterUpdateCrushTunablesEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DedicatedCephClusterHealthResponse } from '../models/DedicatedCephClusterHealthResponse';
import { DedicatedCephTaskListResponse } from '../models/DedicatedCephTaskListResponse';
import { DedicatedCephUserPoolPermListResponse } from '../models/DedicatedCephUserPoolPermListResponse';
import { DedicatedCephClusterGetResponse } from '../models/DedicatedCephClusterGetResponse';
import { DedicatedCephTaskGetResponse } from '../models/DedicatedCephTaskGetResponse';
import { DedicatedCephPoolGetResponse } from '../models/DedicatedCephPoolGetResponse';
import { DedicatedCephAclListResponse } from '../models/DedicatedCephAclListResponse';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class DedicatedCephHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getCeph = (): Promise<string> => {
    return this.ovh.request('GET', '/dedicated/ceph');
  };

  /** Get cluster details */
  getCephServiceName = (serviceName: string): Promise<DedicatedCephClusterGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}`);
  };

  /** Update cluster details */
  putCephServiceName = (
    serviceName: string,
    body: { crushTunables: DedicatedCephClusterUpdateCrushTunablesEnum; label: string }
  ): Promise<string> => {
    return this.ovh.request('PUT', `/dedicated/ceph/${serviceName}`, body);
  };

  /** Get list of all IP ACLs in a cluster */
  getCephServiceNameAcl = (serviceName: string): Promise<DedicatedCephAclListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/acl`);
  };

  /** Create one or more new IP ACLs */
  postCephServiceNameAcl = (serviceName: string, body: { aclList: string }): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/acl`, body);
  };

  /** Delete single IP ACL */
  deleteCephServiceNameAclAclId = (aclId: string, serviceName: string): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/acl/${aclId}`);
  };

  /** Get details about IP ACL */
  getCephServiceNameAclAclId = (
    aclId: string,
    serviceName: string
  ): Promise<DedicatedCephAclGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/acl/${aclId}`);
  };

  /** List CephFS filestystems */
  getCephServiceNameCephfs = (serviceName: string): Promise<DedicatedCephCephfsListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/cephfs`);
  };

  /** Purge CephFS filesystem */
  deleteCephServiceNameCephfsFsName = (fsName: string, serviceName: string): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/cephfs/${fsName}`);
  };

  /** Get CephFS filestystem information */
  getCephServiceNameCephfsFsName = (
    fsName: string,
    serviceName: string
  ): Promise<DedicatedCephCephfsGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/cephfs/${fsName}`);
  };

  /** Disable CephFS filesystem */
  postCephServiceNameCephfsFsNameDisable = (
    fsName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/cephfs/${fsName}/disable`);
  };

  /** Enable CephFS filesystem */
  postCephServiceNameCephfsFsNameEnable = (
    fsName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/cephfs/${fsName}/enable`);
  };

  /** Launch a contact change procedure */
  postCephServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postCephServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/confirmTermination`, body);
  };

  /** Get cluster health */
  getCephServiceNameHealth = (serviceName: string): Promise<DedicatedCephClusterHealthResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/health`);
  };

  /** Get list of all pools in a cluster */
  getCephServiceNamePool = (serviceName: string): Promise<DedicatedCephPoolListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/pool`);
  };

  /** Create a new ceph pool */
  postCephServiceNamePool = (serviceName: string, body: { poolName: string }): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/pool`, body);
  };

  /** Delete a single ceph pool */
  deleteCephServiceNamePoolPoolName = (poolName: string, serviceName: string): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/pool/${poolName}`);
  };

  /** Get details about an existing ceph pool */
  getCephServiceNamePoolPoolName = (
    poolName: string,
    serviceName: string
  ): Promise<DedicatedCephPoolGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/pool/${poolName}`);
  };

  /** Get this object properties */
  getCephServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putCephServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/ceph/${serviceName}/serviceInfos`, body);
  };

  /** List tasks in progress */
  getCephServiceNameTask = (serviceName: string): Promise<DedicatedCephTaskListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/task`);
  };

  /** Get task details */
  getCephServiceNameTaskTaskId = (
    serviceName: string,
    taskId: string
  ): Promise<DedicatedCephTaskGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postCephServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/terminate`);
  };

  /** Get list of all users in a cluster */
  getCephServiceNameUser = (serviceName: string): Promise<DedicatedCephUserListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user`);
  };

  /** Create a new ceph user */
  postCephServiceNameUser = (serviceName: string, body: { userName: string }): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/user`, body);
  };

  /** Delete an existing single ceph user */
  deleteCephServiceNameUserUserName = (serviceName: string, userName: string): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/user/${userName}`);
  };

  /** Get details about a ceph user */
  getCephServiceNameUserUserName = (
    serviceName: string,
    userName: string
  ): Promise<DedicatedCephUserGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user/${userName}`);
  };

  /** List user-pool permissions */
  getCephServiceNameUserUserNamePool = (
    serviceName: string,
    userName: string
  ): Promise<DedicatedCephUserPoolPermListResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user/${userName}/pool`);
  };

  /** Create new user-pool permissions. All old permissions will be cleared */
  postCephServiceNameUserUserNamePool = (
    serviceName: string,
    userName: string,
    body: { permissions?: DedicatedCephUserPoolPermSetAllPermissions }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/user/${userName}/pool`, body);
  };

  /** Update user-pool permission for single pool */
  putCephServiceNameUserUserNamePool = (
    serviceName: string,
    userName: string,
    body: {
      classRead: boolean;
      classWrite: boolean;
      execute: boolean;
      poolName: string;
      read: boolean;
      write: boolean;
    }
  ): Promise<string> => {
    return this.ovh.request('PUT', `/dedicated/ceph/${serviceName}/user/${userName}/pool`, body);
  };

  /** Clear user-pool permission for single pool */
  deleteCephServiceNameUserUserNamePoolPoolName = (
    poolName: string,
    serviceName: string,
    userName: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/dedicated/ceph/${serviceName}/user/${userName}/pool/${poolName}`
    );
  };
}

export default DedicatedCephHandler;
