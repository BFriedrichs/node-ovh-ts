/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCephAclGetResponse } from '../models/DedicatedCephAclGetResponse';
import { DedicatedCephCephfsListResponse } from '../models/DedicatedCephCephfsListResponse';
import { DedicatedCephAclListResponse } from '../models/DedicatedCephAclListResponse';
import { DedicatedCephTaskGetResponse } from '../models/DedicatedCephTaskGetResponse';
import { DedicatedCephUserListResponse } from '../models/DedicatedCephUserListResponse';
import { DedicatedCephPoolListResponse } from '../models/DedicatedCephPoolListResponse';
import { DedicatedCephClusterHealthResponse } from '../models/DedicatedCephClusterHealthResponse';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { DedicatedCephCephfsGetResponse } from '../models/DedicatedCephCephfsGetResponse';
import { DedicatedCephPoolGetResponse } from '../models/DedicatedCephPoolGetResponse';
import { DedicatedCephUserPoolPermListResponse } from '../models/DedicatedCephUserPoolPermListResponse';
import { DedicatedCephUserPoolPermSetAllPermissions } from '../models/DedicatedCephUserPoolPermSetAllPermissions';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { DedicatedCephUserGetResponse } from '../models/DedicatedCephUserGetResponse';
import { ServicesService } from '../models/ServicesService';
import { DedicatedCephClusterGetResponse } from '../models/DedicatedCephClusterGetResponse';
import { DedicatedCephTaskListResponse } from '../models/DedicatedCephTaskListResponse';
import { DedicatedCephClusterUpdateCrushTunablesEnum } from '../models/DedicatedCephClusterUpdateCrushTunablesEnum';
import OVHBase from '../ovh';

class DedicatedCephHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listCephs = (): Promise<string[]> => {
    return this.ovh.request('GET', '/dedicated/ceph');
  };

  /** Get cluster details */
  getCephByServiceName = (serviceName: string): Promise<DedicatedCephClusterGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}`);
  };

  /** Update cluster details */
  updateCephByServiceName = (
    serviceName: string,
    body: { crushTunables: DedicatedCephClusterUpdateCrushTunablesEnum; label: string }
  ): Promise<string> => {
    return this.ovh.request('PUT', `/dedicated/ceph/${serviceName}`, body);
  };

  /** Get list of all IP ACLs in a cluster */
  getCephAclByServiceName = (serviceName: string): Promise<DedicatedCephAclListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/acl`);
  };

  /** Create one or more new IP ACLs */
  createCephAclByServiceName = (
    serviceName: string,
    body: { aclList: string[] }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/acl`, body);
  };

  /** Delete single IP ACL */
  deleteCephAclByServiceNameAndAclId = (aclId: string, serviceName: string): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/acl/${aclId}`);
  };

  /** Get details about IP ACL */
  getCephAclByServiceNameAndAclId = (
    aclId: string,
    serviceName: string
  ): Promise<DedicatedCephAclGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/acl/${aclId}`);
  };

  /** List CephFS filestystems */
  listCephCephfsByServiceName = (
    serviceName: string
  ): Promise<DedicatedCephCephfsListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/cephfs`);
  };

  /** Purge CephFS filesystem */
  deleteCephCephfsByServiceNameAndFsName = (
    fsName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/cephfs/${fsName}`);
  };

  /** Get CephFS filestystem information */
  getCephCephfsByServiceNameAndFsName = (
    fsName: string,
    serviceName: string
  ): Promise<DedicatedCephCephfsGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/cephfs/${fsName}`);
  };

  /** Disable CephFS filesystem */
  disableCephCephfsByServiceNameAndFsName = (
    fsName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/cephfs/${fsName}/disable`);
  };

  /** Enable CephFS filesystem */
  enableCephCephfsByServiceNameAndFsName = (
    fsName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/cephfs/${fsName}/enable`);
  };

  /** Launch a contact change procedure */
  launchCephChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmCephTerminationByServiceName = (
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
  getCephHealthByServiceName = (
    serviceName: string
  ): Promise<DedicatedCephClusterHealthResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/health`);
  };

  /** Get list of all pools in a cluster */
  getCephPoolByServiceName = (serviceName: string): Promise<DedicatedCephPoolListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/pool`);
  };

  /** Create a new ceph pool */
  createCephPoolByServiceName = (
    serviceName: string,
    body: { poolName: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/pool`, body);
  };

  /** Delete a single ceph pool */
  deleteCephPoolByServiceNameAndPoolName = (
    poolName: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/pool/${poolName}`);
  };

  /** Get details about an existing ceph pool */
  getCephPoolByServiceNameAndPoolName = (
    poolName: string,
    serviceName: string
  ): Promise<DedicatedCephPoolGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/pool/${poolName}`);
  };

  /** Get this object properties */
  getCephServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateCephServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/dedicated/ceph/${serviceName}/serviceInfos`, body);
  };

  /** List tasks in progress */
  listCephTasksByServiceName = (serviceName: string): Promise<DedicatedCephTaskListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/task`);
  };

  /** Get task details */
  getCephTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: string
  ): Promise<DedicatedCephTaskGetResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service */
  postCephTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/terminate`);
  };

  /** Get list of all users in a cluster */
  getCephUserByServiceName = (serviceName: string): Promise<DedicatedCephUserListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user`);
  };

  /** Create a new ceph user */
  createCephUserByServiceName = (
    serviceName: string,
    body: { userName: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/user`, body);
  };

  /** Delete an existing single ceph user */
  deleteCephUserByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/dedicated/ceph/${serviceName}/user/${userName}`);
  };

  /** Get details about a ceph user */
  getCephUserByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<DedicatedCephUserGetResponse> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user/${userName}`);
  };

  /** List user-pool permissions */
  listCephUserPoolsByServiceNameAndUserName = (
    serviceName: string,
    userName: string
  ): Promise<DedicatedCephUserPoolPermListResponse[]> => {
    return this.ovh.request('GET', `/dedicated/ceph/${serviceName}/user/${userName}/pool`);
  };

  /** Create new user-pool permissions. All old permissions will be cleared */
  createCephUserPoolByServiceNameAndUserName = (
    serviceName: string,
    userName: string,
    body: { permissions?: DedicatedCephUserPoolPermSetAllPermissions[] }
  ): Promise<string> => {
    return this.ovh.request('POST', `/dedicated/ceph/${serviceName}/user/${userName}/pool`, body);
  };

  /** Update user-pool permission for single pool */
  updateCephUserPoolByServiceNameAndUserName = (
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
  deleteCephUserPoolByServiceNameAndUserNameAndPoolName = (
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

export { DedicatedCephHandler };
