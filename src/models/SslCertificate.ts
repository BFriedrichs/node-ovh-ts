/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslCertificateTypeEnum } from './SslCertificateTypeEnum';
import { SslCertificateAuthorityEnum } from './SslCertificateAuthorityEnum';
import { SslCertificateStatusEnum } from './SslCertificateStatusEnum';

export type SslCertificate = {
  authority: SslCertificateAuthorityEnum;
  certificate: string | null;
  chain: string | null;
  commonName: string;
  csr: string;
  serviceName: string;
  status: SslCertificateStatusEnum;
  subjectAltName: string[];
  type: SslCertificateTypeEnum;
  validityEnd: Date | null;
  validityStart: Date | null;
};
