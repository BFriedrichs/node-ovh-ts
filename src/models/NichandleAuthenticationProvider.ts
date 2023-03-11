/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleAuthenticationProviderExtensions } from './NichandleAuthenticationProviderExtensions';
import { NichandleAuthenticationCertificate } from './NichandleAuthenticationCertificate';

export type NichandleAuthenticationProvider = {
  creation: Date;
  extensions: NichandleAuthenticationProviderExtensions | null;
  groupAttributeName: string;
  idpSigningCertificates: NichandleAuthenticationCertificate;
  lastUpdate: Date;
  ssoServiceUrl: string;
};
