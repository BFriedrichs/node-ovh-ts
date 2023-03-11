/* WARNING: This file is auto-generated . Do not edit manually. */

import { ClusterHadoopRoleTypeEnum } from '../models/ClusterHadoopRoleTypeEnum';
import { ClusterHadoopClusterServiceNameEnum } from '../models/ClusterHadoopClusterServiceNameEnum';
import { ClusterHadoopHadoop } from '../models/ClusterHadoopHadoop';
import { ServicesService } from '../models/ServicesService';
import { ClusterHadoopClusterConsumption } from '../models/ClusterHadoopClusterConsumption';
import { ClusterHadoopRole } from '../models/ClusterHadoopRole';
import { ClusterHadoopTask } from '../models/ClusterHadoopTask';
import { ClusterHadoopNetworkAcl } from '../models/ClusterHadoopNetworkAcl';
import { ClusterHadoopOperationStateEnum } from '../models/ClusterHadoopOperationStateEnum';
import { ClusterHadoopNode } from '../models/ClusterHadoopNode';
import { ClusterHadoopNodeProfileEnum } from '../models/ClusterHadoopNodeProfileEnum';
import { ClusterHadoopUser } from '../models/ClusterHadoopUser';
import { ClusterHadoopNodeConsumption } from '../models/ClusterHadoopNodeConsumption';
import { ClusterHadoopOrderInformations } from '../models/ClusterHadoopOrderInformations';
import { ClusterHadoopNodeBillingProfile } from '../models/ClusterHadoopNodeBillingProfile';
import OVHBase from '../ovh';

class ClusterHadoopHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getHadoop = (): Promise<string> => {
    return this.ovh.request('GET', '/cluster/hadoop');
  };

  /** Get informations about the order of one cluster */
  getHadoopOrderInformations = (): Promise<ClusterHadoopOrderInformations> => {
    return this.ovh.request('GET', '/cluster/hadoop/orderInformations');
  };

  /** Get the orderable node profiles and their characteristics */
  getHadoopOrderableNodeProfiles = (): Promise<ClusterHadoopNodeBillingProfile> => {
    return this.ovh.request('GET', '/cluster/hadoop/orderableNodeProfiles');
  };

  /** Get this object properties */
  getHadoopServiceName = (serviceName: string): Promise<ClusterHadoopHadoop> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}`);
  };

  /** Get the current consumptions that you will billed for on the next bill */
  getHadoopServiceNameConsumptions = (
    serviceName: string
  ): Promise<ClusterHadoopClusterConsumption> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/consumptions`);
  };

  /** Network ACL associated with this Hadoop Cluster */
  getHadoopServiceNameNetworkAcl = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/networkAcl`);
  };

  /** Add an ACL to your cluster */
  postHadoopServiceNameNetworkAcl = (
    serviceName: string,
    body: { block?: string; description?: string }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/networkAcl`, body);
  };

  /** Remove this ACL */
  deleteHadoopServiceNameNetworkAclBlock = (
    block: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/networkAcl/${block}`);
  };

  /** Get this object properties */
  getHadoopServiceNameNetworkAclBlock = (
    block: string,
    serviceName: string
  ): Promise<ClusterHadoopNetworkAcl> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/networkAcl/${block}`);
  };

  /** Alter this object properties */
  putHadoopServiceNameNetworkAclBlock = (
    block: string,
    serviceName: string,
    body: ClusterHadoopNetworkAcl
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/networkAcl/${block}`, body);
  };

  /** Nodes of the Cluster */
  getHadoopServiceNameNode = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node`);
  };

  /** Remove this Node from the Cluster */
  deleteHadoopServiceNameNodeHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/node/${hostname}`);
  };

  /** Get this object properties */
  getHadoopServiceNameNodeHostname = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopNode> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}`);
  };

  /** Decommission the node and all the services on it */
  postHadoopServiceNameNodeHostnameDecommission = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/decommission`);
  };

  /** Recommission the node and all the services on it */
  postHadoopServiceNameNodeHostnameRecommission = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/recommission`);
  };

  /** Roles (ie set of Hadoop services) of the Node */
  getHadoopServiceNameNodeHostnameRole = (
    hostname: string,
    serviceName: string
  ): Promise<ClusterHadoopRoleTypeEnum> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}/role`);
  };

  /** Add the Role to the Node */
  postHadoopServiceNameNodeHostnameRole = (
    hostname: string,
    serviceName: string,
    body: { type: ClusterHadoopRoleTypeEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/node/${hostname}/role`, body);
  };

  /** Remove this Role from the Node */
  deleteHadoopServiceNameNodeHostnameRoleType = (
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
  getHadoopServiceNameNodeHostnameRoleType = (
    hostname: string,
    serviceName: string,
    type: ClusterHadoopRoleTypeEnum
  ): Promise<ClusterHadoopRole> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`);
  };

  /** Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES) */
  postHadoopServiceNameNodeHostnameRoleTypeRestart = (
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
  postHadoopServiceNameNodeHostnameRoleTypeStart = (
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
  postHadoopServiceNameNodeHostnameRoleTypeStop = (
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
  getHadoopServiceNameNodeBillingProfiles = (
    serviceName: string
  ): Promise<ClusterHadoopNodeBillingProfile> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/nodeBillingProfiles`);
  };

  /** Get the current node consumptions that you will billed for on the next bill */
  getHadoopServiceNameNodeConsumptions = (
    serviceName: string
  ): Promise<ClusterHadoopNodeConsumption> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/nodeConsumptions`);
  };

  /** Order a new node in the cluster */
  postHadoopServiceNameOrderNewNodeHourly = (
    serviceName: string,
    body: { nodeProfile: string }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/orderNewNodeHourly`, body);
  };

  /** List of orderable Node profiles */
  getHadoopServiceNameOrderableNodeProfiles = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/orderableNodeProfiles`);
  };

  /** Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE) */
  postHadoopServiceNameRestart = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/restart`);
  };

  /** Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES) */
  postHadoopServiceNameServiceRestart = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/restart`, body);
  };

  /** Start a Cloudera Manager service */
  postHadoopServiceNameServiceStart = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/start`, body);
  };

  /** Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES) */
  postHadoopServiceNameServiceStop = (
    serviceName: string,
    body: { service: ClusterHadoopClusterServiceNameEnum }
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/service/stop`, body);
  };

  /** Get this object properties */
  getHadoopServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putHadoopServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/serviceInfos`, body);
  };

  /** Start the Cloudera Manager Hadoop Cluster */
  postHadoopServiceNameStart = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/start`);
  };

  /** Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE) */
  postHadoopServiceNameStop = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/stop`);
  };

  /** Tasks associated with this Hadoop Cluster */
  getHadoopServiceNameTask = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/task`);
  };

  /** Get this object properties */
  getHadoopServiceNameTaskTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/task/${taskId}`);
  };

  /** Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST */
  postHadoopServiceNameTerminate = (serviceName: string): Promise<ClusterHadoopTask> => {
    return this.ovh.request('POST', `/cluster/hadoop/${serviceName}/terminate`);
  };

  /** Users associated with this Hadoop Cluster */
  getHadoopServiceNameUser = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/user`);
  };

  /** Add an User to your cluster */
  postHadoopServiceNameUser = (
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
  deleteHadoopServiceNameUserUsername = (
    serviceName: string,
    username: string
  ): Promise<ClusterHadoopTask> => {
    return this.ovh.request('DELETE', `/cluster/hadoop/${serviceName}/user/${username}`);
  };

  /** Get this object properties */
  getHadoopServiceNameUserUsername = (
    serviceName: string,
    username: string
  ): Promise<ClusterHadoopUser> => {
    return this.ovh.request('GET', `/cluster/hadoop/${serviceName}/user/${username}`);
  };

  /** Alter this object properties */
  putHadoopServiceNameUserUsername = (
    serviceName: string,
    username: string,
    body: ClusterHadoopUser
  ): Promise<void> => {
    return this.ovh.request('PUT', `/cluster/hadoop/${serviceName}/user/${username}`, body);
  };

  /** Reset the password for a given Hadoop Cluster User */
  postHadoopServiceNameUserUsernameResetPassword = (
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

export default ClusterHadoopHandler;
