/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseSqlserverSqlServer } from '../models/LicenseSqlserverSqlServer';
import { ServicesService } from '../models/ServicesService';
import { LicenseActionType } from '../models/LicenseActionType';
import { ServiceTerminationReasonEnum } from '../models/ServiceTerminationReasonEnum';
import { LicenseTask } from '../models/LicenseTask';
import { LicenseTaskStateEnum } from '../models/LicenseTaskStateEnum';
import { LicenseSqlServerOrderConfiguration } from '../models/LicenseSqlServerOrderConfiguration';
import { ServiceTerminationFutureUseEnum } from '../models/ServiceTerminationFutureUseEnum';
import OVHBase from '../ovh';

class LicenseSqlserverHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getSqlserver = (): Promise<string> => {
    return this.ovh.request('GET', '/license/sqlserver');
  };

  /** Get the orderable Sql Server versions */
  getSqlserverOrderableVersions = (): Promise<LicenseSqlServerOrderConfiguration> => {
    return this.ovh.request('GET', '/license/sqlserver/orderableVersions');
  };

  /** Get this object properties */
  getSqlserverServiceName = (serviceName: string): Promise<LicenseSqlserverSqlServer> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}`);
  };

  /** Confirm termination of your service */
  postSqlserverServiceNameConfirmTermination = (
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
  getSqlserverServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putSqlserverServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/license/sqlserver/${serviceName}/serviceInfos`, body);
  };

  /** Tasks linked to this license */
  getSqlserverServiceNameTasks = (serviceName: string): Promise<number> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/tasks`);
  };

  /** Get this object properties */
  getSqlserverServiceNameTasksTaskId = (
    serviceName: string,
    taskId: number
  ): Promise<LicenseTask> => {
    return this.ovh.request('GET', `/license/sqlserver/${serviceName}/tasks/${taskId}`);
  };

  /** Terminate your service */
  postSqlserverServiceNameTerminate = (serviceName: string): Promise<string> => {
    return this.ovh.request('POST', `/license/sqlserver/${serviceName}/terminate`);
  };
}

export default LicenseSqlserverHandler;
