/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveFlavor } from '../models/DockerSlaveFlavor';
import { ServicesService } from '../models/ServicesService';
import { DockerStackInputCustomSsl } from '../models/DockerStackInputCustomSsl';
import { DockerFrameworkPassword } from '../models/DockerFrameworkPassword';
import { DockerStack } from '../models/DockerStack';
import { DockerStackCustomSslMessage } from '../models/DockerStackCustomSslMessage';
import { DockerSlave } from '../models/DockerSlave';
import { DockerStackCustomSsl } from '../models/DockerStackCustomSsl';
import { StackFramework } from '../models/StackFramework';
import { StackFrameworkApplication } from '../models/StackFrameworkApplication';
import { DockerStackRegistryCredentials } from '../models/DockerStackRegistryCredentials';
import OVHBase from '../ovh';

class CaasContainersHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List available services */
  getContainers = (): Promise<string> => {
    return this.ovh.request('GET', '/caas/containers');
  };

  /** List the /cloud flavors available for the Docker PaaS slaves */
  getContainersSlavesFlavors = (): Promise<string> => {
    return this.ovh.request('GET', '/caas/containers/slaves/flavors');
  };

  /** Inspect the argument slave flavor */
  getContainersSlavesFlavorsFlavorId = (flavorId: string): Promise<DockerSlaveFlavor> => {
    return this.ovh.request('GET', `/caas/containers/slaves/flavors/${flavorId}`);
  };

  /** Inspect the argument stack */
  getContainersServiceName = (serviceName: string): Promise<DockerStack> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}`);
  };

  /** List all the installable Mesos frameworks */
  getContainersServiceNameAvailableFrameworks = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/availableFrameworks`);
  };

  /** Launch a contact change procedure */
  postContainersServiceNameChangeContact = (
    serviceName: string,
    body: { contactAdmin?: string; contactBilling?: string; contactTech?: string }
  ): Promise<number> => {
    return this.ovh.request('POST', `/caas/containers/${serviceName}/changeContact`, body);
  };

  /** List the frameworks installed on the argument stack */
  getContainersServiceNameFrameworks = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/frameworks`);
  };

  /** Inspect the stack framework */
  getContainersServiceNameFrameworksFrameworkId = (
    frameworkId: string,
    serviceName: string
  ): Promise<StackFramework> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/frameworks/${frameworkId}`);
  };

  /** List apps in the framework */
  getContainersServiceNameFrameworksFrameworkIdApps = (
    frameworkId: string,
    serviceName: string
  ): Promise<StackFrameworkApplication> => {
    return this.ovh.request(
      'GET',
      `/caas/containers/${serviceName}/frameworks/${frameworkId}/apps`
    );
  };

  /** Update the framework access password */
  putContainersServiceNameFrameworksFrameworkIdPassword = (
    frameworkId: string,
    serviceName: string,
    body: DockerFrameworkPassword
  ): Promise<void> => {
    return this.ovh.request(
      'PUT',
      `/caas/containers/${serviceName}/frameworks/${frameworkId}/password`,
      body
    );
  };

  /** List the registry credentials associated to the stack. */
  getContainersServiceNameRegistryCredentials = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/registry/credentials`);
  };

  /** Associate the stack with some credentials to an authenticated registry. */
  postContainersServiceNameRegistryCredentials = (
    serviceName: string,
    body: DockerStackInputCustomSsl
  ): Promise<DockerStackRegistryCredentials> => {
    return this.ovh.request('POST', `/caas/containers/${serviceName}/registry/credentials`, body);
  };

  /** Delete the registry credentials. */
  deleteContainersServiceNameRegistryCredentialsCredentialsId = (
    credentialsId: string,
    serviceName: string
  ): Promise<void> => {
    return this.ovh.request(
      'DELETE',
      `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`
    );
  };

  /** Inspect the image registry credentials associated to the stack */
  getContainersServiceNameRegistryCredentialsCredentialsId = (
    credentialsId: string,
    serviceName: string
  ): Promise<DockerStackRegistryCredentials> => {
    return this.ovh.request(
      'GET',
      `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`
    );
  };

  /** Update the registry credentials. */
  putContainersServiceNameRegistryCredentialsCredentialsId = (
    credentialsId: string,
    serviceName: string,
    body: DockerStackInputCustomSsl
  ): Promise<DockerStackRegistryCredentials> => {
    return this.ovh.request(
      'PUT',
      `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`,
      body
    );
  };

  /** Get this object properties */
  getContainersServiceNameServiceInfos = (serviceName: string): Promise<ServicesService> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/serviceInfos`);
  };

  /** Alter this object properties */
  putContainersServiceNameServiceInfos = (
    serviceName: string,
    body: ServicesService
  ): Promise<void> => {
    return this.ovh.request('PUT', `/caas/containers/${serviceName}/serviceInfos`, body);
  };

  /** List the id of the registered slave instances */
  getContainersServiceNameSlaves = (serviceName: string): Promise<string> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/slaves`);
  };

  /** Inspect the argument user slave instance */
  getContainersServiceNameSlavesSlaveId = (
    serviceName: string,
    slaveId: string
  ): Promise<DockerSlave> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/slaves/${slaveId}`);
  };

  /** Delete the custom SSL certificate and private key associated to the stack */
  deleteContainersServiceNameSsl = (serviceName: string): Promise<DockerStackCustomSslMessage> => {
    return this.ovh.request('DELETE', `/caas/containers/${serviceName}/ssl`);
  };

  /** Inspect the custom SSL certificate and private */
  getContainersServiceNameSsl = (serviceName: string): Promise<DockerStackCustomSsl> => {
    return this.ovh.request('GET', `/caas/containers/${serviceName}/ssl`);
  };

  /** Update the custom SSL certificate and private */
  putContainersServiceNameSsl = (
    serviceName: string,
    body: DockerStackInputCustomSsl
  ): Promise<DockerStackCustomSslMessage> => {
    return this.ovh.request('PUT', `/caas/containers/${serviceName}/ssl`, body);
  };
}

export default CaasContainersHandler;
