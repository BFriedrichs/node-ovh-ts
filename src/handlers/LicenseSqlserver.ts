/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseSqlserverSqlServer } from '../models/LicenseSqlserverSqlServer';
import { ServicesService } from '../models/ServicesService';
import { LicenseActionType } from '../models/LicenseActionType';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseSqlServerOrderConfiguration } from '../models/LicenseSqlServerOrderConfiguration';
import OVHBase from '../ovh';

class LicenseSqlserverHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listSqlserver = (): Promise<string[]> => {
    return this.ovh.request('GET', '/license/sqlserver');
  };

  /** Get the orderable Sql Server versions */
  getSqlserverOrderableVersions = (): Promise<LicenseSqlServerOrderConfiguration[]> => {
    return this.ovh.request('GET', '/license/sqlserver/orderableVersions');
  };

  /** Get this object properties */
  getSqlserverByServiceName = (serviceName: string): Promise<LicenseSqlserverSqlServer> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}`);
  };

  /** Confirm termination of your service */
  confirmSqlserverTerminationByServiceName = (
    serviceName: string,
    body: {
      commentary?: string;
      futureUse?: ServiceTerminationFutureUseEnum;
      reason?: ServiceTerminationReasonEnum;
      token: string;
    }
  ): Promise<string> => {
    return this.ovh.request('POST', `/license/sqlserver/${serviceName}/confirmTermination`, body);
  };

  /** Get this object properties */
  getSqlserverServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateSqlserverServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/sqlserver/${serviceName}/serviceInfos`, body);
  };

  /** Tasks linked to this license */
  getSqlserverTasksByServiceName = (serviceName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getSqlserverTasksByServiceNameAndTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postSqlserverTerminateByServiceName = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/sqlserver/${serviceName}/terminate`);
  };
}

export { LicenseSqlserverHandler };
