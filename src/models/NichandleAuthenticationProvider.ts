/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleAuthenticationCertificate } from './NichandleAuthenticationCertificate';
import { NichandleAuthenticationProviderExtensions } from './NichandleAuthenticationProviderExtensions';

export type NichandleAuthenticationProvider = {
  creation: Date;
  extensions: NichandleAuthenticationProviderExtensions | null;
  groupAttributeName: string;
  idpSigningCertificates: NichandleAuthenticationCertificate[];
  lastUpdate: Date;
  ssoServiceUrl: string;
};
