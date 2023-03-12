/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityMaintenanceInterventionTypeEnum } from './ConnectivityMaintenanceInterventionTypeEnum';
import { ConnectivityOperatorEnum } from './ConnectivityOperatorEnum';

export type ConnectivityMaintenanceWorkPlanned = {
  dateBegin?: Date;
  dateEnd?: Date;
  departments?: string[] | null;
  description?: string | null;
  duration?: number | null;
  fallback?: boolean | null;
  fallbackDateBegin?: Date | null;
  fallbackDateEnd?: Date | null;
  id?: number;
  impact?: string | null;
  interventionType?: ConnectivityMaintenanceInterventionTypeEnum;
  nras?: string[] | null;
  operator?: ConnectivityOperatorEnum;
  technology?: string;
  zone?: string | null;
};
