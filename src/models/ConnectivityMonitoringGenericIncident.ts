/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityMonitoringGenericIncidentStatusEnum } from './ConnectivityMonitoringGenericIncidentStatusEnum';
import { ConnectivityOperatorEnum } from './ConnectivityOperatorEnum';

export type ConnectivityMonitoringGenericIncident = {
  comment?: string | null;
  creationDate?: Date;
  departments?: string[];
  endDate?: Date | null;
  id?: number;
  national?: boolean;
  nra?: string[];
  operators?: ConnectivityOperatorEnum[];
  status?: ConnectivityMonitoringGenericIncidentStatusEnum;
  taskId?: number | null;
  taskReference?: string | null;
};
