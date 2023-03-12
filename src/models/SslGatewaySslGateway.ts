/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslGatewaySslConfigurationEnum } from './SslGatewaySslConfigurationEnum';
import { SslGatewayStateEnum } from './SslGatewayStateEnum';
import { SslGatewayOfferEnum } from './SslGatewayOfferEnum';

export type SslGatewaySslGateway = {
  allowedSource: string[] | null;
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
  zones: string[];
};
