/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectCertificateServerAlternativeName } from './CloudProjectCertificateServerAlternativeName';
import { CloudProjectCertificateKindEnum } from './CloudProjectCertificateKindEnum';
import { CloudProjectCertificateStatusEnum } from './CloudProjectCertificateStatusEnum';

export type CloudProjectCertificate = {
  expireAt: Date;
  fingerprint: string;
  id: string;
  issuer: string;
  kind: CloudProjectCertificateKindEnum;
  name: string;
  serialNumber: string;
  serverAlternativeNames: CloudProjectCertificateServerAlternativeName;
  status: CloudProjectCertificateStatusEnum;
  subject: string;
  validAt: Date;
  version: number;
};
