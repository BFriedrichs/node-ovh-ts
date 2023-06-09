/* WARNING: This file is auto-generated . Do not edit manually. */

import { AllDomHandler } from './handlers/AllDom';
import { AnalyticsHandler } from './handlers/Analytics';
import { AuthHandler } from './handlers/Auth';
import { CaasContainersHandler } from './handlers/CaasContainers';
import { CaasRegistryHandler } from './handlers/CaasRegistry';
import { CdnDedicatedHandler } from './handlers/CdnDedicated';
import { CloudHandler } from './handlers/Cloud';
import { ClusterHadoopHandler } from './handlers/ClusterHadoop';
import { ConnectivityHandler } from './handlers/Connectivity';
import { ContactHandler } from './handlers/Contact';
import { DbaasLogsHandler } from './handlers/DbaasLogs';
import { DedicatedCloudHandler } from './handlers/DedicatedCloud';
import { DedicatedAnthosHandler } from './handlers/DedicatedAnthos';
import { DedicatedCephHandler } from './handlers/DedicatedCeph';
import { DedicatedHousingHandler } from './handlers/DedicatedHousing';
import { DedicatedInstallationTemplateHandler } from './handlers/DedicatedInstallationTemplate';
import { DedicatedNasHandler } from './handlers/DedicatedNas';
import { DedicatedNashaHandler } from './handlers/DedicatedNasha';
import { DedicatedServerHandler } from './handlers/DedicatedServer';
import { DeskaasHandler } from './handlers/Deskaas';
import { DomainHandler } from './handlers/Domain';
import { EmailDomainHandler } from './handlers/EmailDomain';
import { EmailExchangeHandler } from './handlers/EmailExchange';
import { EmailMxplanHandler } from './handlers/EmailMxplan';
import { EmailProHandler } from './handlers/EmailPro';
import { FreefaxHandler } from './handlers/Freefax';
import { HorizonViewHandler } from './handlers/HorizonView';
import { HostingPrivateDatabaseHandler } from './handlers/HostingPrivateDatabase';
import { HostingWebHandler } from './handlers/HostingWeb';
import { IpHandler } from './handlers/Ip';
import { IpLoadbalancingHandler } from './handlers/IpLoadbalancing';
import { LicenseCloudLinuxHandler } from './handlers/LicenseCloudLinux';
import { LicenseCpanelHandler } from './handlers/LicenseCpanel';
import { LicenseDirectadminHandler } from './handlers/LicenseDirectadmin';
import { LicenseOfficeHandler } from './handlers/LicenseOffice';
import { LicenseOfficePrepaidHandler } from './handlers/LicenseOfficePrepaid';
import { LicensePleskHandler } from './handlers/LicensePlesk';
import { LicenseRedhatHandler } from './handlers/LicenseRedhat';
import { LicenseSqlserverHandler } from './handlers/LicenseSqlserver';
import { LicenseVirtuozzoHandler } from './handlers/LicenseVirtuozzo';
import { LicenseWindowsHandler } from './handlers/LicenseWindows';
import { LicenseWorklightHandler } from './handlers/LicenseWorklight';
import { MeHandler } from './handlers/Me';
import { MetricsHandler } from './handlers/Metrics';
import { MsServicesHandler } from './handlers/MsServices';
import { NewAccountHandler } from './handlers/NewAccount';
import { NutanixHandler } from './handlers/Nutanix';
import { OrderHandler } from './handlers/Order';
import { OverTheBoxHandler } from './handlers/OverTheBox';
import { OvhCloudConnectHandler } from './handlers/OvhCloudConnect';
import { PackSiptrunkHandler } from './handlers/PackSiptrunk';
import { PackXdslHandler } from './handlers/PackXdsl';
import { PartnerHandler } from './handlers/Partner';
import { PartnersHandler } from './handlers/Partners';
import { PriceHandler } from './handlers/Price';
import { SaasCsp2Handler } from './handlers/SaasCsp2';
import { SecretHandler } from './handlers/Secret';
import { ServiceHandler } from './handlers/Service';
import { ServicesHandler } from './handlers/Services';
import { SmsHandler } from './handlers/Sms';
import { SslHandler } from './handlers/Ssl';
import { SslGatewayHandler } from './handlers/SslGateway';
import { StackMisHandler } from './handlers/StackMis';
import { StartupHandler } from './handlers/Startup';
import { StorageHandler } from './handlers/Storage';
import { StoreHandler } from './handlers/Store';
import { SupplyMondialRelayHandler } from './handlers/SupplyMondialRelay';
import { SupportHandler } from './handlers/Support';
import { TelephonyHandler } from './handlers/Telephony';
import { VeeamCloudConnectHandler } from './handlers/VeeamCloudConnect';
import { VeeamVeeamEnterpriseHandler } from './handlers/VeeamVeeamEnterprise';
import { VipHandler } from './handlers/Vip';
import { VpsHandler } from './handlers/Vps';
import { VrackHandler } from './handlers/Vrack';
import { WebPaaSHandler } from './handlers/WebPaaS';
import { XdslHandler } from './handlers/Xdsl';
import OVHBase from './ovh';

export default class OVH extends OVHBase {
  public allDom = new AllDomHandler(this);
  public analytics = new AnalyticsHandler(this);
  public auth = new AuthHandler(this);
  public caasContainers = new CaasContainersHandler(this);
  public caasRegistry = new CaasRegistryHandler(this);
  public cdnDedicated = new CdnDedicatedHandler(this);
  public cloud = new CloudHandler(this);
  public clusterHadoop = new ClusterHadoopHandler(this);
  public connectivity = new ConnectivityHandler(this);
  public contact = new ContactHandler(this);
  public dbaasLogs = new DbaasLogsHandler(this);
  public dedicatedCloud = new DedicatedCloudHandler(this);
  public dedicatedAnthos = new DedicatedAnthosHandler(this);
  public dedicatedCeph = new DedicatedCephHandler(this);
  public dedicatedHousing = new DedicatedHousingHandler(this);
  public dedicatedInstallationTemplate = new DedicatedInstallationTemplateHandler(this);
  public dedicatedNas = new DedicatedNasHandler(this);
  public dedicatedNasha = new DedicatedNashaHandler(this);
  public dedicatedServer = new DedicatedServerHandler(this);
  public deskaas = new DeskaasHandler(this);
  public domain = new DomainHandler(this);
  public emailDomain = new EmailDomainHandler(this);
  public emailExchange = new EmailExchangeHandler(this);
  public emailMxplan = new EmailMxplanHandler(this);
  public emailPro = new EmailProHandler(this);
  public freefax = new FreefaxHandler(this);
  public horizonView = new HorizonViewHandler(this);
  public hostingPrivateDatabase = new HostingPrivateDatabaseHandler(this);
  public hostingWeb = new HostingWebHandler(this);
  public ip = new IpHandler(this);
  public ipLoadbalancing = new IpLoadbalancingHandler(this);
  public licenseCloudLinux = new LicenseCloudLinuxHandler(this);
  public licenseCpanel = new LicenseCpanelHandler(this);
  public licenseDirectadmin = new LicenseDirectadminHandler(this);
  public licenseOffice = new LicenseOfficeHandler(this);
  public licenseOfficePrepaid = new LicenseOfficePrepaidHandler(this);
  public licensePlesk = new LicensePleskHandler(this);
  public licenseRedhat = new LicenseRedhatHandler(this);
  public licenseSqlserver = new LicenseSqlserverHandler(this);
  public licenseVirtuozzo = new LicenseVirtuozzoHandler(this);
  public licenseWindows = new LicenseWindowsHandler(this);
  public licenseWorklight = new LicenseWorklightHandler(this);
  public me = new MeHandler(this);
  public metrics = new MetricsHandler(this);
  public msServices = new MsServicesHandler(this);
  public newAccount = new NewAccountHandler(this);
  public nutanix = new NutanixHandler(this);
  public order = new OrderHandler(this);
  public overTheBox = new OverTheBoxHandler(this);
  public ovhCloudConnect = new OvhCloudConnectHandler(this);
  public packSiptrunk = new PackSiptrunkHandler(this);
  public packXdsl = new PackXdslHandler(this);
  public partner = new PartnerHandler(this);
  public partners = new PartnersHandler(this);
  public price = new PriceHandler(this);
  public saasCsp2 = new SaasCsp2Handler(this);
  public secret = new SecretHandler(this);
  public service = new ServiceHandler(this);
  public services = new ServicesHandler(this);
  public sms = new SmsHandler(this);
  public ssl = new SslHandler(this);
  public sslGateway = new SslGatewayHandler(this);
  public stackMis = new StackMisHandler(this);
  public startup = new StartupHandler(this);
  public storage = new StorageHandler(this);
  public store = new StoreHandler(this);
  public supplyMondialRelay = new SupplyMondialRelayHandler(this);
  public support = new SupportHandler(this);
  public telephony = new TelephonyHandler(this);
  public veeamCloudConnect = new VeeamCloudConnectHandler(this);
  public veeamVeeamEnterprise = new VeeamVeeamEnterpriseHandler(this);
  public vip = new VipHandler(this);
  public vps = new VpsHandler(this);
  public vrack = new VrackHandler(this);
  public webPaaS = new WebPaaSHandler(this);
  public xdsl = new XdslHandler(this);
}

export { AllDomHandler };
export { AnalyticsHandler };
export { AuthHandler };
export { CaasContainersHandler };
export { CaasRegistryHandler };
export { CdnDedicatedHandler };
export { CloudHandler };
export { ClusterHadoopHandler };
export { ConnectivityHandler };
export { ContactHandler };
export { DbaasLogsHandler };
export { DedicatedCloudHandler };
export { DedicatedAnthosHandler };
export { DedicatedCephHandler };
export { DedicatedHousingHandler };
export { DedicatedInstallationTemplateHandler };
export { DedicatedNasHandler };
export { DedicatedNashaHandler };
export { DedicatedServerHandler };
export { DeskaasHandler };
export { DomainHandler };
export { EmailDomainHandler };
export { EmailExchangeHandler };
export { EmailMxplanHandler };
export { EmailProHandler };
export { FreefaxHandler };
export { HorizonViewHandler };
export { HostingPrivateDatabaseHandler };
export { HostingWebHandler };
export { IpHandler };
export { IpLoadbalancingHandler };
export { LicenseCloudLinuxHandler };
export { LicenseCpanelHandler };
export { LicenseDirectadminHandler };
export { LicenseOfficeHandler };
export { LicenseOfficePrepaidHandler };
export { LicensePleskHandler };
export { LicenseRedhatHandler };
export { LicenseSqlserverHandler };
export { LicenseVirtuozzoHandler };
export { LicenseWindowsHandler };
export { LicenseWorklightHandler };
export { MeHandler };
export { MetricsHandler };
export { MsServicesHandler };
export { NewAccountHandler };
export { NutanixHandler };
export { OrderHandler };
export { OverTheBoxHandler };
export { OvhCloudConnectHandler };
export { PackSiptrunkHandler };
export { PackXdslHandler };
export { PartnerHandler };
export { PartnersHandler };
export { PriceHandler };
export { SaasCsp2Handler };
export { SecretHandler };
export { ServiceHandler };
export { ServicesHandler };
export { SmsHandler };
export { SslHandler };
export { SslGatewayHandler };
export { StackMisHandler };
export { StartupHandler };
export { StorageHandler };
export { StoreHandler };
export { SupplyMondialRelayHandler };
export { SupportHandler };
export { TelephonyHandler };
export { VeeamCloudConnectHandler };
export { VeeamVeeamEnterpriseHandler };
export { VipHandler };
export { VpsHandler };
export { VrackHandler };
export { WebPaaSHandler };
export { XdslHandler };
export { OVHBase };
