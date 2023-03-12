/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectCertificateServerAlternativeName } from './CloudProjectCertificateServerAlternativeName';
import { CloudProjectCertificateStatusEnum } from './CloudProjectCertificateStatusEnum';
import { CloudProjectCertificateKindEnum } from './CloudProjectCertificateKindEnum';

export type CloudProjectCertificate = {
  expireAt?: Date;
  fingerprint?: string;
  id?: string;
  issuer?: string;
  kind?: CloudProjectCertificateKindEnum;
  name?: string;
  serialNumber?: string;
  serverAlternativeNames?: CloudProjectCertificateServerAlternativeName[];
  status?: CloudProjectCertificateStatusEnum;
  subject?: string;
  validAt?: Date;
  version?: number;
};
