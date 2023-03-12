/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiPermissionEnum } from './MetricsApiPermissionEnum';
import { MetricsApiLabel } from './MetricsApiLabel';

export type MetricsApiToken = {
  access: string;
  createdAt: Date;
  description: string;
  expiryAt: Date;
  id: string;
  isRevoked: boolean;
  labels: MetricsApiLabel[];
  permission: MetricsApiPermissionEnum;
};
