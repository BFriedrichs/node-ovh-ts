/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslCertificate } from '../models/SslCertificate';
import { ServicesService } from '../models/ServicesService';
import { SslOperation } from '../models/SslOperation';
import OVHBase from '../ovh';

class SslHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  get = (): Promise<string> => {
    return this.ovh.request('GET', '/ssl');
  };

  /** Get this object properties */
  getServiceName = (serviceName: string): Promise<SslCertificate> => {
    return this.ovh.request('GET', `/ssl/${serviceName}`);
  };

  /** Get this object properties */
  getServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/ssl/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putServiceNameServiceInfos = (serviceName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/ssl/${serviceName}/serviceInfos`, body);
  };

  /** Tasks associated to this ssl */
  getServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/ssl/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getServiceNameTasksTaskId = (serviceName: string, taskId: number): Promise<SslOperation> => {
    return this.ovh.request('GET', `/ssl/${serviceName}/tasks/${taskId}`);
  };
}

export default SslHandler;
