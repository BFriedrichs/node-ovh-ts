/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesService } from '../models/ServicesService';
import { RegistryInputPermissions } from '../models/RegistryInputPermissions';
import { RegistryTag } from '../models/RegistryTag';
import { RegistryPermissions } from '../models/RegistryPermissions';
import { RegistryInputNamespace } from '../models/RegistryInputNamespace';
import { RegistryImage } from '../models/RegistryImage';
import { RegistryNamespace } from '../models/RegistryNamespace';
import { RegistryService } from '../models/RegistryService';
import { RegistryInputImage } from '../models/RegistryInputImage';
import { RegistryUser } from '../models/RegistryUser';
import { RegistryInputUser } from '../models/RegistryInputUser';
import OVHBase from '../ovh';

class CaasRegistryHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getRegistry = (): Promise<string> => {
    return this.ovh.request('GET', '/caas/registry');
  };

  /** Inspect service. */
  getRegistryServiceName = (serviceName: string): Promise<RegistryService> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}`);
  };

  /** Launch a contact change procedure */
  postRegistryServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/changeContact`, body);
  };

  /** List namespace */
  getRegistryServiceNameNamespaces = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/namespaces`);
  };

  /** Create namespace */
  postRegistryServiceNameNamespaces = (
    serviceName: string,
    body: RegistryInputNamespace
  ): Promise<RegistryNamespace> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/namespaces`, body);
  };

  /** Delete namespace */
  deleteRegistryServiceNameNamespacesNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/caas/registry/${serviceName}/namespaces/${namespaceId}`);
  };

  /** Inspect namespace */
  getRegistryServiceNameNamespacesNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<RegistryNamespace> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/namespaces/${namespaceId}`);
  };

  /** List all images in namespace */
  getRegistryServiceNameNamespacesNamespaceIdImages = (
    namespaceId: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images`
    );
  };

  /** Delete image */
  deleteRegistryServiceNameNamespacesNamespaceIdImagesImageId = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`
    );
  };

  /** Inspect image */
  getRegistryServiceNameNamespacesNamespaceIdImagesImageId = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<RegistryImage> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`
    );
  };

  /** Update image */
  putRegistryServiceNameNamespacesNamespaceIdImagesImageId = (
    imageId: string,
    namespaceId: string,
    serviceName: string,
    body: RegistryInputImage
  ): Promise<RegistryImage> => {
    return this.ovh.request(
      'PUT',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`,
      body
    );
  };

  /** List image permissions */
  getRegistryServiceNameNamespacesNamespaceIdImagesImageIdPermissions = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`
    );
  };

  /** Create image permissions */
  postRegistryServiceNameNamespacesNamespaceIdImagesImageIdPermissions = (
    imageId: string,
    namespaceId: string,
    serviceName: string,
    body: RegistryInputPermissions
  ): Promise<RegistryPermissions> => {
    return this.ovh.request(
      'POST',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`,
      body
    );
  };

  /** Delete image permissions. */
  deleteRegistryServiceNameNamespacesNamespaceIdImagesImageIdPermissionsPermissionId = (
    imageId: string,
    namespaceId: string,
    permissionId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`
    );
  };

  /** Inspect image permissions */
  getRegistryServiceNameNamespacesNamespaceIdImagesImageIdPermissionsPermissionId = (
    imageId: string,
    namespaceId: string,
    permissionId: string,
    serviceName: string
  ): Promise<RegistryPermissions> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`
    );
  };

  /** List image tags */
  getRegistryServiceNameNamespacesNamespaceIdImagesImageIdTags = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags`
    );
  };

  /** Inspect image tag */
  getRegistryServiceNameNamespacesNamespaceIdImagesImageIdTagsTagId = (
    imageId: string,
    namespaceId: string,
    serviceName: string,
    tagId: string
  ): Promise<RegistryTag> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags/${tagId}`
    );
  };

  /** List namespace permissions */
  getRegistryServiceNameNamespacesNamespaceIdPermissions = (
    namespaceId: string,
    serviceName: string
  ): Promise<string> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`
    );
  };

  /** Create namespace permissions */
  postRegistryServiceNameNamespacesNamespaceIdPermissions = (
    namespaceId: string,
    serviceName: string,
    body: RegistryInputPermissions
  ): Promise<RegistryPermissions> => {
    return this.ovh.request(
      'POST',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`,
      body
    );
  };

  /** Delete namespace permissions */
  deleteRegistryServiceNameNamespacesNamespaceIdPermissionsPermissionId = (
    namespaceId: string,
    permissionId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`
    );
  };

  /** Inspect permission */
  getRegistryServiceNameNamespacesNamespaceIdPermissionsPermissionId = (
    namespaceId: string,
    permissionId: string,
    serviceName: string
  ): Promise<RegistryPermissions> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`
    );
  };

  /** Get this object properties */
  getRegistryServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putRegistryServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/caas/registry/${serviceName}/serviceInfos`, body);
  };

  /** List users */
  getRegistryServiceNameUsers = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/users`);
  };

  /** Create user */
  postRegistryServiceNameUsers = (
    serviceName: string,
    body: RegistryInputUser
  ): Promise<RegistryUser> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/users`, body);
  };

  /** Delete user */
  deleteRegistryServiceNameUsersUserId = (serviceName: string, userId: string): Promise<void> => {
    return this.ovh.request('DELETE', `/caas/registry/${serviceName}/users/${userId}`);
  };

  /** Inspect user */
  getRegistryServiceNameUsersUserId = (
    serviceName: string,
    userId: string
  ): Promise<RegistryUser> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/users/${userId}`);
  };

  /** Update user password */
  postRegistryServiceNameUsersUserIdChangePassword = (
    serviceName: string,
    userId: string
  ): Promise<RegistryUser> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/users/${userId}/changePassword`);
  };
}

export default CaasRegistryHandler;
