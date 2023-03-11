/* WARNING: This file is auto-generated . Do not edit manually. */

import { PackXdslResiliationTerms } from '../models/PackXdslResiliationTerms';
import { PackXdslShippingAddressContextEnum } from '../models/PackXdslShippingAddressContextEnum';
import { PackXdslServiceInformation } from '../models/PackXdslServiceInformation';
import { PackXdslVoIPLineOrder } from '../models/PackXdslVoIPLineOrder';
import { PackXdslMigrationOfferServiceToDelete } from '../models/PackXdslMigrationOfferServiceToDelete';
import { PackXdslMigrationOfferServiceToKeep } from '../models/PackXdslMigrationOfferServiceToKeep';
import { PackXdslMigrationSubServicesDetailsToDelete } from '../models/PackXdslMigrationSubServicesDetailsToDelete';
import { PackXdslShippingAddress } from '../models/PackXdslShippingAddress';
import { PackXdslExchangeAccountService } from '../models/PackXdslExchangeAccountService';
import { PackXdslModemOptionEnum } from '../models/PackXdslModemOptionEnum';
import { PackXdslResiliationFollowUpDetail } from '../models/PackXdslResiliationFollowUpDetail';
import { PackXdslUnpackTerms } from '../models/PackXdslUnpackTerms';
import { XdslEligibilityBookMeetingSlot } from '../models/XdslEligibilityBookMeetingSlot';
import { PackXdslPackAdsl } from '../models/PackXdslPackAdsl';
import { PackXdslResiliationSurvey } from '../models/PackXdslResiliationSurvey';
import { ServicesService } from '../models/ServicesService';
import { PackXdslPromotionCodeCapabilities } from '../models/PackXdslPromotionCodeCapabilities';
import { PackXdslTask } from '../models/PackXdslTask';
import { PackXdslMigrationMigrationOfferResponse } from '../models/PackXdslMigrationMigrationOfferResponse';
import { PackXdslAddressMoveMoveOfferResponse } from '../models/PackXdslAddressMoveMoveOfferResponse';
import { PackXdslHostedEmailAccount } from '../models/PackXdslHostedEmailAccount';
import { PackXdslService } from '../models/PackXdslService';
import { PackXdslDomainActionEnum } from '../models/PackXdslDomainActionEnum';
import { PackXdslTaskStatusEnum } from '../models/PackXdslTaskStatusEnum';
import { PackXdslMigrationOfferOption } from '../models/PackXdslMigrationOfferOption';
import { PackXdslHostedEmailService } from '../models/PackXdslHostedEmailService';
import { PackXdslVoipLineService } from '../models/PackXdslVoipLineService';
import { PackXdslHostedEmailConfiguration } from '../models/PackXdslHostedEmailConfiguration';
import { PackXdslContactInfos } from '../models/PackXdslContactInfos';
import { PackXdslVoIPHardware } from '../models/PackXdslVoIPHardware';
import OVHBase from '../ovh';

class PackXdslHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getXdsl = (): Promise<string> => {
    return this.ovh.request('GET', '/pack/xdsl');
  };

  /** Get this object properties */
  getXdslPackName = (packName: string): Promise<PackXdslPackAdsl> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}`);
  };

  /** Alter this object properties */
  putXdslPackName = (packName: string, body: PackXdslPackAdsl): Promise<void> => {
    return this.ovh.request('PUT', `/pack/xdsl/${packName}`, body);
  };

  /** Move the access to another address */
  postXdslPackNameAddressMoveMoveOffer = (
    packName: string,
    body: {
      acceptContracts: boolean;
      building?: string;
      buildingReference?: string;
      contactPhone?: string;
      door?: string;
      eligibilityReference: string;
      engageMonths?: number;
      floor?: string;
      keepCurrentNumber: boolean;
      meeting?: XdslEligibilityBookMeetingSlot;
      modem?: PackXdslModemOptionEnum;
      mondialRelayId?: number;
      moveOutDate?: Date;
      nicShipping?: string;
      offerName: string;
      options?: PackXdslMigrationOfferOption;
      otp: boolean;
      otpReference?: string;
      productCode: string;
      residence?: string;
      stair?: string;
      subServicesToDelete?: PackXdslMigrationOfferServiceToDelete;
      subServicesToKeep?: PackXdslMigrationOfferServiceToKeep;
    }
  ): Promise<number> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/addressMove/moveOffer`, body);
  };

  /** Get the possibilities of address move offers available */
  postXdslPackNameAddressMoveOffers = (
    packName: string,
    body: { eligibilityReference: string }
  ): Promise<PackXdslAddressMoveMoveOfferResponse> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/addressMove/offers`, body);
  };

  /** Calculate services to delete with unpack terms for new offer and options */
  postXdslPackNameAddressMoveServicesToDeleteUnpackTerms = (
    packName: string,
    body: {
      eligibilityReference: string;
      offerName: string;
      options?: PackXdslMigrationOfferOption;
    }
  ): Promise<PackXdslMigrationSubServicesDetailsToDelete> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/addressMove/servicesToDeleteUnpackTerms`,
      body
    );
  };

  /** Check if the resiliation can be cancelled */
  getXdslPackNameCanCancelResiliation = (packName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/canCancelResiliation`);
  };

  /** Cancel the ongoing resiliation */
  postXdslPackNameCancelResiliation = (packName: string): Promise<void> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  postXdslPackNameChangeContact = (
    packName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/changeContact`, body);
  };

  /** Get contact infos about the owner */
  getXdslPackNameContactOwner = (packName: string): Promise<PackXdslContactInfos> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/contactOwner`);
  };

  /** Get the available tlds for domain order */
  getXdslPackNameDomainOptionsTlds = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/domain/options/tlds`);
  };

  /** Domain services */
  getXdslPackNameDomainServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/domain/services`);
  };

  /** Activate a domain service */
  postXdslPackNameDomainServices = (
    packName: string,
    body: { action: PackXdslDomainActionEnum; authInfo?: string; domain: string; tld: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/domain/services`, body);
  };

  /** List the available domains for the Email Pro service */
  getXdslPackNameEmailProOptionsDomains = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/options/domains`);
  };

  /** Check if the given email address is available for an Email Pro activation */
  getXdslPackNameEmailProOptionsIsEmailAvailable = (packName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/options/isEmailAvailable`);
  };

  /** List the Email Pro services */
  getXdslPackNameEmailProServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/services`);
  };

  /** Activate an Email Pro service */
  postXdslPackNameEmailProServices = (
    packName: string,
    body: { email: string; password: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/emailPro/services`, body);
  };

  /** Exchange 2013 services */
  getXdslPackNameExchangeAccountServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeAccount/services`);
  };

  /** Get this object properties */
  getXdslPackNameExchangeAccountServicesDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslExchangeAccountService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeAccount/services/${domain}`);
  };

  /** Get the available domains */
  getXdslPackNameExchangeIndividualOptionsDomains = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeIndividual/options/domains`);
  };

  /** Check if the email address is available for service creation */
  getXdslPackNameExchangeIndividualOptionsIsEmailAvailable = (
    packName: string
  ): Promise<boolean> => {
    return this.ovh.request(
      'GET',
      `/pack/xdsl/${packName}/exchangeIndividual/options/isEmailAvailable`
    );
  };

  /** Exchange 2013 organization services */
  getXdslPackNameExchangeOrganizationServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeOrganization/services`);
  };

  /** Get the hostedemail available domains */
  getXdslPackNameHostedEmailOptionsDomains = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/options/domains`);
  };

  /** Hosted email services */
  getXdslPackNameHostedEmailServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services`);
  };

  /** Activate an hosted email service */
  postXdslPackNameHostedEmailServices = (
    packName: string,
    body: { email: string; password: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/hostedEmail/services`, body);
  };

  /** Delete hosted email account */
  deleteXdslPackNameHostedEmailServicesDomain = (
    domain: string,
    packName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/pack/xdsl/${packName}/hostedEmail/services/${domain}`);
  };

  /** Get this object properties */
  getXdslPackNameHostedEmailServicesDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services/${domain}`);
  };

  /** Get hosted email account informations */
  getXdslPackNameHostedEmailServicesDomainAccount = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailAccount> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services/${domain}/account`);
  };

  /** Change hosted email account password */
  postXdslPackNameHostedEmailServicesDomainChangePassword = (
    domain: string,
    packName: string,
    body: { password: string }
  ): Promise<void> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/hostedEmail/services/${domain}/changePassword`,
      body
    );
  };

  /** Get hosted email configuration informations */
  getXdslPackNameHostedEmailServicesDomainConfiguration = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailConfiguration> => {
    return this.ovh.request(
      'GET',
      `/pack/xdsl/${packName}/hostedEmail/services/${domain}/configuration`
    );
  };

  /** Migrate to the selected offer */
  postXdslPackNameMigrationMigrate = (
    packName: string,
    body: {
      acceptContracts: boolean;
      buildingReference?: string;
      contactPhone?: string;
      engageMonths?: number;
      floor?: string;
      meeting?: XdslEligibilityBookMeetingSlot;
      modem?: PackXdslModemOptionEnum;
      mondialRelayId?: number;
      nicShipping?: string;
      offerName: string;
      options?: PackXdslMigrationOfferOption;
      otp?: boolean;
      otpReference?: string;
      productCode?: string;
      stair?: string;
      subServicesToDelete?: PackXdslMigrationOfferServiceToDelete;
      subServicesToKeep?: PackXdslMigrationOfferServiceToKeep;
    }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/migration/migrate`, body);
  };

  /** Get the possibilities of migration offers available */
  postXdslPackNameMigrationOffers = (
    packName: string,
    body: { buildingReference?: string }
  ): Promise<PackXdslMigrationMigrationOfferResponse> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/migration/offers`, body);
  };

  /** Calculate services to delete with unpack terms for an offer and options */
  postXdslPackNameMigrationServicesToDeleteUnpackTerms = (
    packName: string,
    body: { offerName: string; options?: PackXdslMigrationOfferOption }
  ): Promise<PackXdslMigrationSubServicesDetailsToDelete> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/migration/servicesToDeleteUnpackTerms`,
      body
    );
  };

  /** Get informations about the promotion code generation */
  getXdslPackNamePromotionCodeCapabilities = (
    packName: string
  ): Promise<PackXdslPromotionCodeCapabilities> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/promotionCode/capabilities`);
  };

  /** Creates a task to generate a new promotion code */
  postXdslPackNamePromotionCodeGenerate = (packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/promotionCode/generate`);
  };

  /** Resiliate the pack */
  postXdslPackNameResiliate = (
    packName: string,
    body: {
      resiliationDate?: Date;
      resiliationSurvey: PackXdslResiliationSurvey;
      servicesToKeep?: number;
    }
  ): Promise<PackXdslResiliationFollowUpDetail> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/resiliate`, body);
  };

  /** Get information about the ongoing resiliation */
  getXdslPackNameResiliationFollowUp = (
    packName: string
  ): Promise<PackXdslResiliationFollowUpDetail> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/resiliationFollowUp`);
  };

  /** Get resiliation terms */
  getXdslPackNameResiliationTerms = (packName: string): Promise<PackXdslResiliationTerms> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/resiliationTerms`);
  };

  /** Get this object properties */
  getXdslPackNameServiceInfos = (packName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/serviceInfos`);
  };

  /** Alter this object properties */
  putXdslPackNameServiceInfos = (packName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/pack/xdsl/${packName}/serviceInfos`, body);
  };

  /** Informations about the services included in the pack */
  getXdslPackNameServices = (packName: string): Promise<PackXdslServiceInformation> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/services`);
  };

  /** Allowed shipping addresses given a context */
  getXdslPackNameShippingAddresses = (packName: string): Promise<PackXdslShippingAddress> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/shippingAddresses`);
  };

  /** List services contained in the pack */
  getXdslPackNameSubServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices`);
  };

  /** Get this object properties */
  getXdslPackNameSubServicesDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices/${domain}`);
  };

  /** Give the condition to unpack service from pack */
  getXdslPackNameSubServicesDomainKeepServiceTerms = (
    domain: string,
    packName: string
  ): Promise<PackXdslUnpackTerms> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices/${domain}/keepServiceTerms`);
  };

  /** Tasks scheduled for this pack */
  getXdslPackNameTasks = (packName: string): Promise<number> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/tasks`);
  };

  /** Get this object properties */
  getXdslPackNameTasksId = (id: number, packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/tasks/${id}`);
  };

  /** VOIP billing accounts */
  getXdslPackNameVoipBillingAccountServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipBillingAccount/services`);
  };

  /** VOIP ecofax service */
  getXdslPackNameVoipEcofaxServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipEcofax/services`);
  };

  /** Activate a voicefax service */
  postXdslPackNameVoipEcofaxServices = (packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/voipEcofax/services`);
  };

  /** Create a new shippingId to be used for voipLine service creation */
  postXdslPackNameVoipLineOptionsCustomShippingAddress = (
    packName: string,
    body: {
      address: string;
      cityName: string;
      firstName: string;
      lastName: string;
      zipCode: string;
    }
  ): Promise<number> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/voipLine/options/customShippingAddress`,
      body
    );
  };

  /** Get available hardwares */
  getXdslPackNameVoipLineOptionsHardwares = (packName: string): Promise<PackXdslVoIPHardware> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/options/hardwares`);
  };

  /** Get available shipping addresses */
  getXdslPackNameVoipLineOptionsShippingAddresses = (
    packName: string
  ): Promise<PackXdslShippingAddress> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/options/shippingAddresses`);
  };

  /** VOIP line services */
  getXdslPackNameVoipLineServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/services`);
  };

  /** Activate a voip line service */
  postXdslPackNameVoipLineServices = (
    packName: string,
    body: { hardwareNames: string; mondialRelayId?: string; shippingId?: string }
  ): Promise<PackXdslVoIPLineOrder> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/voipLine/services`, body);
  };

  /** Get this object properties */
  getXdslPackNameVoipLineServicesDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslVoipLineService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/services/${domain}`);
  };

  /** xDSL access services */
  getXdslPackNameXdslAccessServices = (packName: string): Promise<string> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/xdslAccess/services`);
  };
}

export default PackXdslHandler;
