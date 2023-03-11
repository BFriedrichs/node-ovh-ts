/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslCertificateStatusEnum } from './SslCertificateStatusEnum';
import { SslCertificateTypeEnum } from './SslCertificateTypeEnum';
import { SslCertificateAuthorityEnum } from './SslCertificateAuthorityEnum';

export type SslCertificate = {
  authority: SslCertificateAuthorityEnum;
  certificate: string | null;
  chain: string | null;
  commonName: string;
  csr: string;
  serviceName: string;
  status: SslCertificateStatusEnum;
  subjectAltName: string;
  type: SslCertificateTypeEnum;
  validityEnd: Date | null;
  validityStart: Date | null;
};
