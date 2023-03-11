/* WARNING: This file is auto-generated . Do not edit manually. */

import { MetricsApiLabel } from './MetricsApiLabel';
import { MetricsApiPermissionEnum } from './MetricsApiPermissionEnum';

export type MetricsApiToken = {
  access: string;
  createdAt: Date;
  description: string;
  expiryAt: Date;
  id: string;
  isRevoked: boolean;
  labels: MetricsApiLabel;
  permission: MetricsApiPermissionEnum;
};
