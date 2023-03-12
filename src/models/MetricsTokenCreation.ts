/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiPermissionEnum } from './MetricsApiPermissionEnum';
import { MetricsApiLabel } from './MetricsApiLabel';

export type MetricsTokenCreation = {
  description: string | null;
  labels: MetricsApiLabel[] | null;
  permission?: MetricsApiPermissionEnum;
};
