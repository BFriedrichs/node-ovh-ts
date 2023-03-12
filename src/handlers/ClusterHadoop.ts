/* WARNING: This file is auto-generated . Do not edit manually. */

import { ClusterHadoopNodeBillingProfile } from '../models/ClusterHadoopNodeBillingProfile';
import { ClusterHadoopRole } from '../models/ClusterHadoopRole';
import { ClusterHadoopOrderInformations } from '../models/ClusterHadoopOrderInformations';
import { ClusterHadoopClusterConsumption } from '../models/ClusterHadoopClusterConsumption';
import { ClusterHadoopNetworkAcl } from '../models/ClusterHadoopNetworkAcl';
import { ClusterHadoopNodeConsumption } from '../models/ClusterHadoopNodeConsumption';
import { ClusterHadoopNodeProfileEnum } from '../models/ClusterHadoopNodeProfileEnum';
import { ClusterHadoopRoleTypeEnum } from '../models/ClusterHadoopRoleTypeEnum';
import { ClusterHadoopClusterServiceNameEnum } from '../models/ClusterHadoopClusterServiceNameEnum';
import { ClusterHadoopOperationStateEnum } from '../models/ClusterHadoopOperationStateEnum';
import { ClusterHadoopUser } from '../models/ClusterHadoopUser';
import { ServicesService } from '../models/ServicesService';
import { ClusterHadoopNode } from '../models/ClusterHadoopNode';
import { ClusterHadoopTask } from '../models/ClusterHadoopTask';
import { ClusterHadoopHadoop } from '../models/ClusterHadoopHadoop';
import OVHBase from '../ovh';

class ClusterHadoopHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listHadoop = (): Promise<string[]> => {
    return this.ovh.request('GET', '/cluster/hadoop');
  };

  /** Get informations about the order of one cluster */
  getHadoopOrderInformations = (): Promise<ClusterHadoopOrderInformations> => {
    return this.ovh.request('GET', '/cluster/hadoop/orderInformations');
  };

  /** Get the orderable node profiles and their characteristics */
  getHadoopOrderableNodeProfiles = (): Promise<ClusterHadoopNodeBillingProfile[]> => {
    return this.ovh.request('GET', '/cluster/hadoop/orderableNodeProfiles');
  };

  /** Get this object properties */
  getHadoopByServiceName = (serviceName: string): Promise<ClusterHadoopHadoop> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}`);
  };

  /** Get the current consumptions that you will billed for on the next bill */
  getHadoopConsumptionsByServiceName = (
    serviceName: string
  ): Promise<ClusterHadoopClusterConsumption> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/consumptions`);
  };

  /** Network ACL associated with this Hadoop Cluster */
  getHadoopNetworkAclByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/networkAcl`);
  };

  /** Add an ACL to your cluster */
  addHadoopNetworkAclByServiceName = (
    serviceName: string,
    body: { block?: string; description?: string }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/networkAcl`, body);
  };

  /** Remove this ACL */
  deleteHadoopNetworkAclByServiceNameAndBlock = (
    block: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/networkAcl/${block}`);
  };

  /** Get this object properties */
  getHadoopNetworkAclByServiceNameAndBlock = (
    block: string,
    serviceName: string
  ): Promise<ClusterHadoopNetworkAcl> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/networkAcl/${block}`);
  };

  /** Alter this object properties */
  updateHadoopNetworkAclByServiceNameAndBlock = (
    block: string,
    serviceName: string,
    body: ClusterHadoopNetworkAcl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/networkAcl/${block}`, body);
  };

  /** Nodes of the Cluster */
  getHadoopNodeByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node`);
  };

  /** Remove this Node from the Cluster */
  deleteHadoopNodeByServiceNameAndHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/node/${hostname}`);
  };

  /** Get this object properties */
  getHadoopNodeByServiceNameAndHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopNode> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}`);
  };

  /** Decommission the node and all the services on it */
  postHadoopNodeDecommissionByServiceNameAndHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/decommission`);
  };

  /** Recommission the node and all the services on it */
  postHadoopNodeRecommissionByServiceNameAndHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/recommission`);
  };

  /** Roles (ie set of Hadoop services) of the Node */
  getHadoopNodeRoleByServiceNameAndHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopRoleTypeEnum[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}/role`);
  };

  /** Add the Role to the Node */
  addHadoopNodeRoleByServiceNameAndHostname = (
    hostname: string,
    serviceName: string,
    body: { type: ClusterHadoopRoleTypeEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/role`, body);
  };

  /** Remove this Role from the Node */
  deleteHadoopNodeRoleByServiceNameAndHostnameAndType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request(
      'DELETE',
      `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`
    );
  };

  /** Get this object properties */
  getHadoopNodeRoleByServiceNameAndHostnameAndType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopRole> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`);
  };

  /** Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES) */
  postHadoopNodeRoleRestartByServiceNameAndHostnameAndType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request(
      'POST',
      `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/restart`
    );
  };

  /** Start the role on the node */
  postHadoopNodeRoleStartByServiceNameAndHostnameAndType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request(
      'POST',
      `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/start`
    );
  };

  /** Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES) */
  postHadoopNodeRoleStopByServiceNameAndHostnameAndType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request(
      'POST',
      `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/stop`
    );
  };

  /** Detailed description for each Node profile */
  getHadoopNodeBillingProfilesByServiceName = (
    serviceName: string
  ): Promise<ClusterHadoopNodeBillingProfile[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/nodeBillingProfiles`);
  };

  /** Get the current node consumptions that you will billed for on the next bill */
  getHadoopNodeConsumptionsByServiceName = (
    serviceName: string
  ): Promise<ClusterHadoopNodeConsumption[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/nodeConsumptions`);
  };

  /** Order a new node in the cluster */
  postHadoopOrderNewNodeHourlyByServiceName = (
    serviceName: string,
    body: { nodeProfile: string }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/orderNewNodeHourly`, body);
  };

  /** List of orderable Node profiles */
  listHadoopOrderableNodeProfilesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/orderableNodeProfiles`);
  };

  /** Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE) */
  postHadoopRestartByServiceName = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/restart`);
  };

  /** Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES) */
  postHadoopServiceRestartByServiceName = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/restart`, body);
  };

  /** Start a Cloudera Manager service */
  postHadoopServiceStartByServiceName = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/start`, body);
  };

  /** Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES) */
  postHadoopServiceStopByServiceName = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/stop`, body);
  };

  /** Get this object properties */
  getHadoopServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateHadoopServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/serviceInfos`, body);
  };

  /** Start the Cloudera Manager Hadoop Cluster */
  postHadoopStartByServiceName = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/start`);
  };

  /** Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE) */
  postHadoopStopByServiceName = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/stop`);
  };

  /** Tasks associated with this Hadoop Cluster */
  getHadoopTaskByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/task`);
  };

  /** Get this object properties */
  getHadoopTaskByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST */
  postHadoopTerminateByServiceName = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/terminate`);
  };

  /** Users associated with this Hadoop Cluster */
  getHadoopUserByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/user`);
  };

  /** Add an User to your cluster */
  addHadoopUserByServiceName = (
    serviceName: string,
    body: {
      clouderaManager: boolean;
      httpFrontend: boolean;
      hue: boolean;
      password: string;
      username: string;
    }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/user`, body);
  };

  /** Remove this User */
  deleteHadoopUserByServiceNameAndUsername = (
    serviceName: string,
    username: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/user/${username}`);
  };

  /** Get this object properties */
  getHadoopUserByServiceNameAndUsername = (
    serviceName: string,
    username: string
  ): Promise<ClusterHadoopUser> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/user/${username}`);
  };

  /** Alter this object properties */
  updateHadoopUserByServiceNameAndUsername = (
    serviceName: string,
    username: string,
    body: ClusterHadoopUser
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/user/${username}`, body);
  };

  /** Reset the password for a given Hadoop Cluster User */
  postHadoopUserResetPasswordByServiceNameAndUsername = (
    serviceName: string,
    username: string,
    body: { password: string }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request(
      'POST',
      `/cluster/hadoop/${serviceName}/user/${username}/resetPassword`,
      body
    );
  };
}

export { ClusterHadoopHandler };
