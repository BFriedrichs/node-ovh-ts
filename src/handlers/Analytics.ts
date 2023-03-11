/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsClusterDestroy } from '../models/AnalyticsClusterDestroy';
import { ServicesService } from '../models/ServicesService';
import { AnalyticsCluster } from '../models/AnalyticsCluster';
import { AnalyticsPlatformCapability } from '../models/AnalyticsPlatformCapability';
import { AnalyticsClusterDeploy } from '../models/AnalyticsClusterDeploy';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { AnalyticsClusterDeployStatus } from '../models/AnalyticsClusterDeployStatus';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { AnalyticsClusterNode } from '../models/AnalyticsClusterNode';
import { AnalyticsClusterActivity } from '../models/AnalyticsClusterActivity';
import OVHBase from '../ovh';

class AnalyticsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Platform capabilities */
  getCapabilitiesPlatforms = (): Promise<AnalyticsPlatformCapability> => {
    return this.ovh.request('GET', '/analytics/capabilities/platforms');
  };

  /** List available services */
  getPlatforms = (): Promise<string> => {
    return this.ovh.request('GET', '/analytics/platforms');
  };

  /** Get details about a service */
  getPlatformsServiceName = (serviceName: string): Promise<AnalyticsCluster> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}`);
  };

  /** Get activity logs */
  getPlatformsServiceNameActivity = (serviceName: string): Promise<AnalyticsClusterActivity> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/activity`);
  };

  /** Launch a contact change procedure */
  postPlatformsServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  postPlatformsServiceNameConfirmTermination = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/confirmTermination`, body);
  };

  /** Deploy an Analytics Data Platform */
  postPlatformsServiceNameDeploy = (
    serviceName: string,
    body: AnalyticsClusterDeploy
  ): Promise<AnalyticsClusterDeploy> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/deploy`, body);
  };

  /** Destroy an Analytics Data Platform */
  postPlatformsServiceNameDestroy = (
    serviceName: string,
    body: AnalyticsClusterDestroy
  ): Promise<void> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/destroy`, body);
  };

  /** List available nodes */
  getPlatformsServiceNameNodes = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/nodes`);
  };

  /** Get details about nodes */
  getPlatformsServiceNameNodesNodeId = (
    nodeId: string,
    serviceName: string
  ): Promise<AnalyticsClusterNode> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/nodes/${nodeId}`);
  };

  /** Get this object properties */
  getPlatformsServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putPlatformsServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/analytics/platforms/${serviceName}/serviceInfos`, body);
  };

  /** Get cluster deployment status */
  getPlatformsServiceNameStatus = (serviceName: string): Promise<AnalyticsClusterDeployStatus> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/status`);
  };

  /** Terminate your service */
  postPlatformsServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/terminate`);
  };
}

export default AnalyticsHandler;
