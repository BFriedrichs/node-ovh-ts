/* WARNING: This file is auto-generated . Do not edit manually. */

import { AnalyticsClusterDestroy } from '../models/AnalyticsClusterDestroy';
import { AnalyticsClusterNode } from '../models/AnalyticsClusterNode';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { AnalyticsClusterActivity } from '../models/AnalyticsClusterActivity';
import { ServicesService } from '../models/ServicesService';
import { AnalyticsClusterDeployStatus } from '../models/AnalyticsClusterDeployStatus';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { AnalyticsCluster } from '../models/AnalyticsCluster';
import { AnalyticsPlatformCapability } from '../models/AnalyticsPlatformCapability';
import { AnalyticsClusterDeploy } from '../models/AnalyticsClusterDeploy';
import OVHBase from '../ovh';

class AnalyticsHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Platform capabilities */
  getCapabilitiesPlatforms = (): Promise<AnalyticsPlatformCapability[]> => {
    return this.ovh.request('GET', '/analytics/capabilities/platforms');
  };

  /** List available services */
  listPlatforms = (): Promise<string[]> => {
    return this.ovh.request('GET', '/analytics/platforms');
  };

  /** Get details about a service */
  getPlatformsByServiceName = (serviceName: string): Promise<AnalyticsCluster> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}`);
  };

  /** Get activity logs */
  getPlatformsActivityByServiceName = (
    serviceName: string
  ): Promise<AnalyticsClusterActivity[]> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/activity`);
  };

  /** Launch a contact change procedure */
  launchPlatformsChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/changeContact`, body);
  };

  /** Confirm termination of your service */
  confirmPlatformsTerminationByServiceName = (
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
  postPlatformsDeployByServiceName = (
    serviceName: string,
    body: AnalyticsClusterDeploy
  ): Promise<AnalyticsClusterDeploy> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/deploy`, body);
  };

  /** Destroy an Analytics Data Platform */
  postPlatformsDestroyByServiceName = (
    serviceName: string,
    body: AnalyticsClusterDestroy
  ): Promise<void> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/destroy`, body);
  };

  /** List available nodes */
  listPlatformsNodesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/nodes`);
  };

  /** Get details about nodes */
  getPlatformsNodesByServiceNameAndNodeId = (
    nodeId: string,
    serviceName: string
  ): Promise<AnalyticsClusterNode> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/nodes/${nodeId}`);
  };

  /** Get this object properties */
  getPlatformsServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updatePlatformsServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/analytics/platforms/${serviceName}/serviceInfos`, body);
  };

  /** Get cluster deployment status */
  getPlatformsStatusByServiceName = (
    serviceName: string
  ): Promise<AnalyticsClusterDeployStatus[]> => {
    return this.ovh.request('GET', `/analytics/platforms/${serviceName}/status`);
  };

  /** Terminate your service */
  postPlatformsTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/analytics/platforms/${serviceName}/terminate`);
  };
}

export { AnalyticsHandler };
