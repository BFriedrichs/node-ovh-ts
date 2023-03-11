/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsInputStatusEnum } from './DbaasLogsInputStatusEnum';

export type DbaasLogsInput = {
  allowedNetworks: string | null;
  createdAt: Date;
  description: string;
  engineId: string;
  exposedPort: string | null;
  hostname: string;
  inputId: string;
  isRestartRequired: boolean;
  nbInstance: number | null;
  publicAddress: string;
  sslCertificate: string;
  status: DbaasLogsInputStatusEnum;
  streamId: string;
  title: string;
  updatedAt: Date | null;
};
