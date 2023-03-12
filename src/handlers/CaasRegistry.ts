/* WARNING: This file is auto-generated . Do not edit manually. */

import { RegistryInputPermissions } from '../models/RegistryInputPermissions';
import { RegistryInputNamespace } from '../models/RegistryInputNamespace';
import { RegistryPermissions } from '../models/RegistryPermissions';
import { RegistryInputUser } from '../models/RegistryInputUser';
import { RegistryService } from '../models/RegistryService';
import { RegistryImage } from '../models/RegistryImage';
import { ServicesService } from '../models/ServicesService';
import { RegistryInputImage } from '../models/RegistryInputImage';
import { RegistryTag } from '../models/RegistryTag';
import { RegistryNamespace } from '../models/RegistryNamespace';
import { RegistryUser } from '../models/RegistryUser';
import OVHBase from '../ovh';

class CaasRegistryHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  listRegistry = (): Promise<string[]> => {
    return this.ovh.request('GET', '/caas/registry');
  };

  /** Inspect service. */
  getRegistryByServiceName = (serviceName: string): Promise<RegistryService> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}`);
  };

  /** Launch a contact change procedure */
  launchRegistryChangeContactByServiceName = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number[]> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/changeContact`, body);
  };

  /** List namespace */
  listRegistryNamespacesByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/namespaces`);
  };

  /** Create namespace */
  createRegistryNamespacesByServiceName = (
    serviceName: string,
    body: RegistryInputNamespace
  ): Promise<RegistryNamespace> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/namespaces`, body);
  };

  /** Delete namespace */
  deleteRegistryNamespacesByServiceNameAndNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/caas/registry/${serviceName}/namespaces/${namespaceId}`);
  };

  /** Inspect namespace */
  getRegistryNamespacesByServiceNameAndNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<RegistryNamespace> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/namespaces/${namespaceId}`);
  };

  /** List all images in namespace */
  listRegistryNamespacesImagesByServiceNameAndNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images`
    );
  };

  /** Delete image */
  deleteRegistryNamespacesImagesByServiceNameAndNamespaceIdAndImageId = (
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
  getRegistryNamespacesImagesByServiceNameAndNamespaceIdAndImageId = (
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
  updateRegistryNamespacesImagesByServiceNameAndNamespaceIdAndImageId = (
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
  listRegistryNamespacesImagesPermissionsByServiceNameAndNamespaceIdAndImageId = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`
    );
  };

  /** Create image permissions */
  createRegistryNamespacesImagesPermissionsByServiceNameAndNamespaceIdAndImageId = (
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
  deleteRegistryNamespacesImagesPermissionsByServiceNameAndNamespaceIdAndImageIdAndPermissionId = (
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
  getRegistryNamespacesImagesPermissionsByServiceNameAndNamespaceIdAndImageIdAndPermissionId = (
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
  listRegistryNamespacesImagesTagsByServiceNameAndNamespaceIdAndImageId = (
    imageId: string,
    namespaceId: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags`
    );
  };

  /** Inspect image tag */
  getRegistryNamespacesImagesTagsByServiceNameAndNamespaceIdAndImageIdAndTagId = (
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
  listRegistryNamespacesPermissionsByServiceNameAndNamespaceId = (
    namespaceId: string,
    serviceName: string
  ): Promise<string[]> => {
    return this.ovh.request(
      'GET',
      `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`
    );
  };

  /** Create namespace permissions */
  createRegistryNamespacesPermissionsByServiceNameAndNamespaceId = (
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
  deleteRegistryNamespacesPermissionsByServiceNameAndNamespaceIdAndPermissionId = (
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
  getRegistryNamespacesPermissionsByServiceNameAndNamespaceIdAndPermissionId = (
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
  getRegistryServiceInfosByServiceName = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  updateRegistryServiceInfosByServiceName = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/caas/registry/${serviceName}/serviceInfos`, body);
  };

  /** List users */
  listRegistryUsersByServiceName = (serviceName: string): Promise<string[]> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/users`);
  };

  /** Create user */
  createRegistryUsersByServiceName = (
    serviceName: string,
    body: RegistryInputUser
  ): Promise<RegistryUser> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/users`, body);
  };

  /** Delete user */
  deleteRegistryUsersByServiceNameAndUserId = (
    serviceName: string,
    userId: string
  ): Promise<void> => {
    return this.ovh.request('DELETE', `/caas/registry/${serviceName}/users/${userId}`);
  };

  /** Inspect user */
  getRegistryUsersByServiceNameAndUserId = (
    serviceName: string,
    userId: string
  ): Promise<RegistryUser> => {
    return this.ovh.request('GET', `/caas/registry/${serviceName}/users/${userId}`);
  };

  /** Update user password */
  updateRegistryUsersChangePasswordByServiceNameAndUserId = (
    serviceName: string,
    userId: string
  ): Promise<RegistryUser> => {
    return this.ovh.request('POST', `/caas/registry/${serviceName}/users/${userId}/changePassword`);
  };
}

export { CaasRegistryHandler };
