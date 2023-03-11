/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityOperatorEnum } from './ConnectivityOperatorEnum';
import { ConnectivityMonitoringGenericIncidentStatusEnum } from './ConnectivityMonitoringGenericIncidentStatusEnum';

export type ConnectivityMonitoringGenericIncident = {
  comment: string | null;
  creationDate: Date;
  departments: string;
  endDate: Date | null;
  id: number;
  national: boolean;
  nra: string;
  operators: ConnectivityOperatorEnum;
  status: ConnectivityMonitoringGenericIncidentStatusEnum;
  taskId: number | null;
  taskReference: string | null;
};
