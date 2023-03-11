/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewayStateEnum } from './SslGatewayStateEnum';
import { SslGatewaySslConfigurationEnum } from './SslGatewaySslConfigurationEnum';
import { SslGatewayOfferEnum } from './SslGatewayOfferEnum';

export type SslGatewaySslGateway = {
  allowedSource: string | null;
  displayName: string | null;
  hsts: boolean;
  httpsRedirect: boolean;
  ipv4: string;
  ipv6: string | null;
  metricsToken: string | null;
  offer: SslGatewayOfferEnum;
  reverse: string | null;
  serverHttps: boolean;
  serviceName: string;
  sslConfiguration: SslGatewaySslConfigurationEnum | null;
  state: SslGatewayStateEnum;
  zones: string;
};
