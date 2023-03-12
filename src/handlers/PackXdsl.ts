/* WARNING: This file is auto-generated . Do not edit manually. */

import { PackXdslMigrationOfferOption } from '../models/PackXdslMigrationOfferOption';
import { PackXdslHostedEmailService } from '../models/PackXdslHostedEmailService';
import { PackXdslMigrationOfferServiceToKeep } from '../models/PackXdslMigrationOfferServiceToKeep';
import { PackXdslServiceInformation } from '../models/PackXdslServiceInformation';
import { PackXdslDomainActionEnum } from '../models/PackXdslDomainActionEnum';
import { PackXdslUnpackTerms } from '../models/PackXdslUnpackTerms';
import { PackXdslHostedEmailConfiguration } from '../models/PackXdslHostedEmailConfiguration';
import { PackXdslResiliationSurvey } from '../models/PackXdslResiliationSurvey';
import { PackXdslService } from '../models/PackXdslService';
import { PackXdslContactInfos } from '../models/PackXdslContactInfos';
import { PackXdslResiliationTerms } from '../models/PackXdslResiliationTerms';
import { PackXdslVoIPLineOrder } from '../models/PackXdslVoIPLineOrder';
import { PackXdslPackAdsl } from '../models/PackXdslPackAdsl';
import { XdslEligibilityBookMeetingSlot } from '../models/XdslEligibilityBookMeetingSlot';
import { PackXdslTask } from '../models/PackXdslTask';
import { PackXdslResiliationFollowUpDetail } from '../models/PackXdslResiliationFollowUpDetail';
import { PackXdslModemOptionEnum } from '../models/PackXdslModemOptionEnum';
import { PackXdslAddressMoveMoveOfferResponse } from '../models/PackXdslAddressMoveMoveOfferResponse';
import { PackXdslMigrationOfferServiceToDelete } from '../models/PackXdslMigrationOfferServiceToDelete';
import { PackXdslHostedEmailAccount } from '../models/PackXdslHostedEmailAccount';
import { PackXdslExchangeAccountService } from '../models/PackXdslExchangeAccountService';
import { PackXdslMigrationMigrationOfferResponse } from '../models/PackXdslMigrationMigrationOfferResponse';
import { PackXdslShippingAddress } from '../models/PackXdslShippingAddress';
import { PackXdslShippingAddressContextEnum } from '../models/PackXdslShippingAddressContextEnum';
import { PackXdslTaskStatusEnum } from '../models/PackXdslTaskStatusEnum';
import { ServicesService } from '../models/ServicesService';
import { PackXdslVoIPHardware } from '../models/PackXdslVoIPHardware';
import { PackXdslPromotionCodeCapabilities } from '../models/PackXdslPromotionCodeCapabilities';
import { PackXdslMigrationSubServicesDetailsToDelete } from '../models/PackXdslMigrationSubServicesDetailsToDelete';
import { PackXdslVoipLineService } from '../models/PackXdslVoipLineService';
import OVHBase from '../ovh';

class PackXdslHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listXdsls = (): Promise<string[]> => {
    return this.ovh.request('GET', '/pack/xdsl');
  };

  /** Get this object properties */
  getXdslByPackName = (packName: string): Promise<PackXdslPackAdsl> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}`);
  };

  /** Alter this object properties */
  updateXdslByPackName = (packName: string, body: PackXdslPackAdsl): Promise<void> => {
    return this.ovh.request('PUT', `/pack/xdsl/${packName}`, body);
  };

  /** Move the access to another address */
  postXdslAddressMoveMoveOfferByPackName = (
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
      options?: PackXdslMigrationOfferOption[];
      otp: boolean;
      otpReference?: string;
      productCode: string;
      residence?: string;
      stair?: string;
      subServicesToDelete?: PackXdslMigrationOfferServiceToDelete[];
      subServicesToKeep?: PackXdslMigrationOfferServiceToKeep[];
    }
  ): Promise<number> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/addressMove/moveOffer`, body);
  };

  /** Get the possibilities of address move offers available */
  postXdslAddressMoveOffersByPackName = (
    packName: string,
    body: { eligibilityReference: string }
  ): Promise<PackXdslAddressMoveMoveOfferResponse> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/addressMove/offers`, body);
  };

  /** Calculate services to delete with unpack terms for new offer and options */
  postXdslAddressMoveServicesToDeleteUnpackTermsByPackName = (
    packName: string,
    body: {
      eligibilityReference: string;
      offerName: string;
      options?: PackXdslMigrationOfferOption[];
    }
  ): Promise<PackXdslMigrationSubServicesDetailsToDelete[]> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/addressMove/servicesToDeleteUnpackTerms`,
      body
    );
  };

  /** Check if the resiliation can be cancelled */
  checkXdslCanCancelResiliationByPackName = (packName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/canCancelResiliation`);
  };

  /** Cancel the ongoing resiliation */
  postXdslCancelResiliationByPackName = (packName: string): Promise<void> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/cancelResiliation`);
  };

  /** Launch a contact change procedure */
  launchXdslChangeContactByPackName = (
    packName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/changeContact`, body);
  };

  /** Get contact infos about the owner */
  getXdslContactOwnerByPackName = (packName: string): Promise<PackXdslContactInfos> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/contactOwner`);
  };

  /** Get the available tlds for domain order */
  getXdslDomainOptionsTldsByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/domain/options/tlds`);
  };

  /** Domain services */
  getXdslDomainServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/domain/services`);
  };

  /** Activate a domain service */
  postXdslDomainServicesByPackName = (
    packName: string,
    body: { action: PackXdslDomainActionEnum; authInfo?: string; domain: string; tld: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/domain/services`, body);
  };

  /** List the available domains for the Email Pro service */
  listXdslEmailProOptionsDomainsByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/options/domains`);
  };

  /** Check if the given email address is available for an Email Pro activation */
  checkXdslEmailProOptionsIsEmailAvailableByPackName = (packName: string): Promise<boolean> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/options/isEmailAvailable`);
  };

  /** List the Email Pro services */
  listXdslEmailProServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/emailPro/services`);
  };

  /** Activate an Email Pro service */
  postXdslEmailProServicesByPackName = (
    packName: string,
    body: { email: string; password: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/emailPro/services`, body);
  };

  /** Exchange 2013 services */
  getXdslExchangeAccountServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeAccount/services`);
  };

  /** Get this object properties */
  getXdslExchangeAccountServicesByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslExchangeAccountService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeAccount/services/${domain}`);
  };

  /** Get the available domains */
  getXdslExchangeIndividualOptionsDomainsByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeIndividual/options/domains`);
  };

  /** Check if the email address is available for service creation */
  checkXdslExchangeIndividualOptionsIsEmailAvailableByPackName = (
    packName: string
  ): Promise<boolean> => {
    return this.ovh.request(
      'GET',
      `/pack/xdsl/${packName}/exchangeIndividual/options/isEmailAvailable`
    );
  };

  /** Exchange 2013 organization services */
  getXdslExchangeOrganizationServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/exchangeOrganization/services`);
  };

  /** Get the hostedemail available domains */
  getXdslHostedEmailOptionsDomainsByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/options/domains`);
  };

  /** Hosted email services */
  getXdslHostedEmailServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services`);
  };

  /** Activate an hosted email service */
  postXdslHostedEmailServicesByPackName = (
    packName: string,
    body: { email: string; password: string }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/hostedEmail/services`, body);
  };

  /** Delete hosted email account */
  deleteXdslHostedEmailServicesByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/pack/xdsl/${packName}/hostedEmail/services/${domain}`);
  };

  /** Get this object properties */
  getXdslHostedEmailServicesByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services/${domain}`);
  };

  /** Get hosted email account informations */
  getXdslHostedEmailServicesAccountByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailAccount> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/hostedEmail/services/${domain}/account`);
  };

  /** Change hosted email account password */
  updateXdslHostedEmailServicesPasswordByPackNameAndDomain = (
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
  getXdslHostedEmailServicesConfigurationByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslHostedEmailConfiguration> => {
    return this.ovh.request(
      'GET',
      `/pack/xdsl/${packName}/hostedEmail/services/${domain}/configuration`
    );
  };

  /** Migrate to the selected offer */
  postXdslMigrationMigrateByPackName = (
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
      options?: PackXdslMigrationOfferOption[];
      otp?: boolean;
      otpReference?: string;
      productCode?: string;
      stair?: string;
      subServicesToDelete?: PackXdslMigrationOfferServiceToDelete[];
      subServicesToKeep?: PackXdslMigrationOfferServiceToKeep[];
    }
  ): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/migration/migrate`, body);
  };

  /** Get the possibilities of migration offers available */
  postXdslMigrationOffersByPackName = (
    packName: string,
    body: { buildingReference?: string }
  ): Promise<PackXdslMigrationMigrationOfferResponse> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/migration/offers`, body);
  };

  /** Calculate services to delete with unpack terms for an offer and options */
  postXdslMigrationServicesToDeleteUnpackTermsByPackName = (
    packName: string,
    body: { offerName: string; options?: PackXdslMigrationOfferOption[] }
  ): Promise<PackXdslMigrationSubServicesDetailsToDelete[]> => {
    return this.ovh.request(
      'POST',
      `/pack/xdsl/${packName}/migration/servicesToDeleteUnpackTerms`,
      body
    );
  };

  /** Get informations about the promotion code generation */
  getXdslPromotionCodeCapabilitiesByPackName = (
    packName: string
  ): Promise<PackXdslPromotionCodeCapabilities> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/promotionCode/capabilities`);
  };

  /** Creates a task to generate a new promotion code */
  createXdslPromotionCodeGenerateByPackName = (packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/promotionCode/generate`);
  };

  /** Resiliate the pack */
  postXdslResiliateByPackName = (
    packName: string,
    body: {
      resiliationDate?: Date;
      resiliationSurvey: PackXdslResiliationSurvey;
      servicesToKeep?: number[];
    }
  ): Promise<PackXdslResiliationFollowUpDetail> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/resiliate`, body);
  };

  /** Get information about the ongoing resiliation */
  getXdslResiliationFollowUpByPackName = (
    packName: string
  ): Promise<PackXdslResiliationFollowUpDetail> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/resiliationFollowUp`);
  };

  /** Get resiliation terms */
  getXdslResiliationTermsByPackName = (packName: string): Promise<PackXdslResiliationTerms> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/resiliationTerms`);
  };

  /** Get this object properties */
  getXdslServiceInfosByPackName = (packName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateXdslServiceInfosByPackName = (packName: string, body: ServicesService): Promise<void> => {
    return this.ovh.request('PUT', `/pack/xdsl/${packName}/serviceInfos`, body);
  };

  /** Informations about the services included in the pack */
  getXdslServicesByPackName = (packName: string): Promise<PackXdslServiceInformation[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/services`);
  };

  /** Allowed shipping addresses given a context */
  getXdslShippingAddressesByPackName = (packName: string): Promise<PackXdslShippingAddress[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/shippingAddresses`);
  };

  /** List services contained in the pack */
  listXdslSubServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices`);
  };

  /** Get this object properties */
  getXdslSubServicesByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices/${domain}`);
  };

  /** Give the condition to unpack service from pack */
  getXdslSubServicesKeepServiceTermsByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslUnpackTerms> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/subServices/${domain}/keepServiceTerms`);
  };

  /** Tasks scheduled for this pack */
  getXdslTasksByPackName = (packName: string): Promise<number[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/tasks`);
  };

  /** Get this object properties */
  getXdslTasksByPackNameAndId = (id: number, packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/tasks/${id}`);
  };

  /** VOIP billing accounts */
  getXdslVoipBillingAccountServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipBillingAccount/services`);
  };

  /** VOIP ecofax service */
  getXdslVoipEcofaxServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipEcofax/services`);
  };

  /** Activate a voicefax service */
  postXdslVoipEcofaxServicesByPackName = (packName: string): Promise<PackXdslTask> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/voipEcofax/services`);
  };

  /** Create a new shippingId to be used for voipLine service creation */
  createXdslVoipLineOptionsCustomShippingAddressByPackName = (
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
  getXdslVoipLineOptionsHardwaresByPackName = (
    packName: string
  ): Promise<PackXdslVoIPHardware[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/options/hardwares`);
  };

  /** Get available shipping addresses */
  getXdslVoipLineOptionsShippingAddressesByPackName = (
    packName: string
  ): Promise<PackXdslShippingAddress[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/options/shippingAddresses`);
  };

  /** VOIP line services */
  getXdslVoipLineServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/services`);
  };

  /** Activate a voip line service */
  postXdslVoipLineServicesByPackName = (
    packName: string,
    body: { hardwareNames: string[]; mondialRelayId?: string; shippingId?: string }
  ): Promise<PackXdslVoIPLineOrder> => {
    return this.ovh.request('POST', `/pack/xdsl/${packName}/voipLine/services`, body);
  };

  /** Get this object properties */
  getXdslVoipLineServicesByPackNameAndDomain = (
    domain: string,
    packName: string
  ): Promise<PackXdslVoipLineService> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/voipLine/services/${domain}`);
  };

  /** xDSL access services */
  getXdslXdslAccessServicesByPackName = (packName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/pack/xdsl/${packName}/xdslAccess/services`);
  };
}

export { PackXdslHandler };
