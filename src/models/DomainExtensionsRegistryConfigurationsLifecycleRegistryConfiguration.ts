/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainExtensionsRegistryConfigurationsOrderLifecycleRegistryConfiguration } from './DomainExtensionsRegistryConfigurationsOrderLifecycleRegistryConfiguration';
import { DomainExtensionsRegistryConfigurationsRestoreLifecycleRegistryConfiguration } from './DomainExtensionsRegistryConfigurationsRestoreLifecycleRegistryConfiguration';
import { DomainExtensionsRegistryConfigurationsCreateLifecycleRegistryConfiguration } from './DomainExtensionsRegistryConfigurationsCreateLifecycleRegistryConfiguration';
import { DomainExtensionsRegistryConfigurationsTransferLifecycleRegistryConfiguration } from './DomainExtensionsRegistryConfigurationsTransferLifecycleRegistryConfiguration';
import { DomainExtensionsRegistryConfigurationsRenewLifecycleRegistryConfiguration } from './DomainExtensionsRegistryConfigurationsRenewLifecycleRegistryConfiguration';

export type DomainExtensionsRegistryConfigurationsLifecycleRegistryConfiguration = {
  create: DomainExtensionsRegistryConfigurationsCreateLifecycleRegistryConfiguration;
  order: DomainExtensionsRegistryConfigurationsOrderLifecycleRegistryConfiguration;
  renew: DomainExtensionsRegistryConfigurationsRenewLifecycleRegistryConfiguration;
  restore: DomainExtensionsRegistryConfigurationsRestoreLifecycleRegistryConfiguration;
  transfer: DomainExtensionsRegistryConfigurationsTransferLifecycleRegistryConfiguration;
};