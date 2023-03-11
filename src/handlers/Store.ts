/* WARNING: This file is auto-generated . Do not edit manually. */

import { MarketPlacePartnerProduct } from '../models/MarketPlacePartnerProduct';
import { MarketPlaceContact } from '../models/MarketPlaceContact';
import { MarketPlacePartner } from '../models/MarketPlacePartner';
import { MarketPlaceDocument } from '../models/MarketPlaceDocument';
import OVHBase from '../ovh';

class StoreHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List current customer contacts */
  getContact = (): Promise<MarketPlaceContact> => {
    return this.ovh.request('GET', '/store/contact');
  };

  /** Create a 'marketplace' contact for current nic */
  postContact = (body: {
    city?: string;
    country?: string;
    email: string;
    firstname: string;
    lastname: string;
    phone?: string;
    province?: string;
    street?: string;
    title: string;
    zip?: string;
  }): Promise<MarketPlaceContact> => {
    return this.ovh.request('POST', '/store/contact', body);
  };

  /** Remove an existing contact */
  deleteContactContactId = (contactId: string): Promise<string> => {
    return this.ovh.request('DELETE', `/store/contact/${contactId}`);
  };

  /** Get contact details */
  getContactContactId = (contactId: string): Promise<MarketPlaceContact> => {
    return this.ovh.request('GET', `/store/contact/${contactId}`);
  };

  /** Edit contact information */
  putContactContactId = (
    contactId: string,
    body: {
      city?: string;
      country?: string;
      email?: string;
      firstname?: string;
      lastname?: string;
      phone?: string;
      province?: string;
      street?: string;
      title?: string;
      zip?: string;
    }
  ): Promise<MarketPlaceContact> => {
    return this.ovh.request('PUT', `/store/contact/${contactId}`, body);
  };

  /** List document associated with contact */
  getContactContactIdDocument = (contactId: string): Promise<string> => {
    return this.ovh.request('GET', `/store/contact/${contactId}/document`);
  };

  /** Add a document to a contact */
  postContactContactIdDocument = (
    contactId: string,
    body: { documentId: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/store/contact/${contactId}/document`, body);
  };

  /** Unlink a document from a contact */
  deleteContactContactIdDocumentDocumentId = (
    contactId: string,
    documentId: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/store/contact/${contactId}/document/${documentId}`);
  };

  /** List current customer documents */
  getDocument = (): Promise<MarketPlaceDocument> => {
    return this.ovh.request('GET', '/store/document');
  };

  /** Create a document */
  postDocument = (body: { name: string; tags?: string }): Promise<MarketPlaceDocument> => {
    return this.ovh.request('POST', '/store/document', body);
  };

  /** Add CORS support on your container */
  postDocumentCors = (body: { origin: string }): Promise<void> => {
    return this.ovh.request('POST', '/store/document/cors', body);
  };

  /** Delete document */
  deleteDocumentDocumentId = (documentId: string): Promise<string> => {
    return this.ovh.request('DELETE', `/store/document/${documentId}`);
  };

  /** Get document info */
  getDocumentDocumentId = (documentId: string): Promise<MarketPlaceDocument> => {
    return this.ovh.request('GET', `/store/document/${documentId}`);
  };

  /** List current customer partners */
  getPartner = (): Promise<MarketPlacePartner> => {
    return this.ovh.request('GET', '/store/partner');
  };

  /** Create a 'marketplace' partner for current nic */
  postPartner = (body: {
    category?: string;
    city: string;
    companyNationalIdentificationNumber?: string;
    contact?: string;
    country: string;
    description?: string;
    language?: string;
    legalForm: string;
    organisationDisplayName?: string;
    organisationName: string;
    otherDetails?: string;
    province: string;
    street: string;
    url?: string;
    vat?: string;
    zip: string;
  }): Promise<MarketPlacePartner> => {
    return this.ovh.request('POST', '/store/partner', body);
  };

  /** Delete partner */
  deletePartnerPartnerId = (partnerId: string): Promise<string> => {
    return this.ovh.request('DELETE', `/store/partner/${partnerId}`);
  };

  /** Get partner info */
  getPartnerPartnerId = (partnerId: string): Promise<MarketPlacePartner> => {
    return this.ovh.request('GET', `/store/partner/${partnerId}`);
  };

  /** Edit partner info */
  putPartnerPartnerId = (
    partnerId: string,
    body: {
      category?: string;
      city?: string;
      companyNationalIdentificationNumber?: string;
      contact?: string;
      country?: string;
      description?: string;
      language?: string;
      legalForm?: string;
      organisationDisplayName?: string;
      organisationName?: string;
      otherDetails?: string;
      province?: string;
      street?: string;
      url?: string;
      vat?: string;
      zip?: string;
    }
  ): Promise<MarketPlacePartner> => {
    return this.ovh.request('PUT', `/store/partner/${partnerId}`, body);
  };

  /** List document associated with partner */
  getPartnerPartnerIdDocument = (partnerId: string): Promise<string> => {
    return this.ovh.request('GET', `/store/partner/${partnerId}/document`);
  };

  /** Add a document to a partner */
  postPartnerPartnerIdDocument = (
    partnerId: string,
    body: { documentId: string }
  ): Promise<string> => {
    return this.ovh.request('POST', `/store/partner/${partnerId}/document`, body);
  };

  /** Unlink a document from a partner */
  deletePartnerPartnerIdDocumentDocumentId = (
    documentId: string,
    partnerId: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/store/partner/${partnerId}/document/${documentId}`);
  };

  /** List partner's products */
  getPartnerPartnerIdProduct = (partnerId: string): Promise<MarketPlacePartnerProduct> => {
    return this.ovh.request('GET', `/store/partner/${partnerId}/product`);
  };

  /** Create a new product for partner */
  postPartnerPartnerIdProduct = (
    partnerId: string,
    body: { category: string; description: string; name: string; otherDetails?: string }
  ): Promise<MarketPlacePartnerProduct> => {
    return this.ovh.request('POST', `/store/partner/${partnerId}/product`, body);
  };

  /** Delete product */
  deletePartnerPartnerIdProductProductId = (
    partnerId: string,
    productId: string
  ): Promise<string> => {
    return this.ovh.request('DELETE', `/store/partner/${partnerId}/product/${productId}`);
  };

  /** Get partner info */
  getPartnerPartnerIdProductProductId = (
    partnerId: string,
    productId: string
  ): Promise<MarketPlacePartnerProduct> => {
    return this.ovh.request('GET', `/store/partner/${partnerId}/product/${productId}`);
  };

  /** Edit product info */
  putPartnerPartnerIdProductProductId = (
    partnerId: string,
    productId: string,
    body: { category?: string; description?: string; name?: string; otherDetails?: string }
  ): Promise<MarketPlacePartnerProduct> => {
    return this.ovh.request('PUT', `/store/partner/${partnerId}/product/${productId}`, body);
  };

  /** List document associated with product */
  getPartnerPartnerIdProductProductIdDocument = (
    partnerId: string,
    productId: string
  ): Promise<string> => {
    return this.ovh.request('GET', `/store/partner/${partnerId}/product/${productId}/document`);
  };

  /** Add a document to a product */
  postPartnerPartnerIdProductProductIdDocument = (
    partnerId: string,
    productId: string,
    body: { documentId: string }
  ): Promise<string> => {
    return this.ovh.request(
      'POST',
      `/store/partner/${partnerId}/product/${productId}/document`,
      body
    );
  };

  /** Unlink a document from a product */
  deletePartnerPartnerIdProductProductIdDocumentDocumentId = (
    documentId: string,
    partnerId: string,
    productId: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/store/partner/${partnerId}/product/${productId}/document/${documentId}`
    );
  };
}

export default StoreHandler;
