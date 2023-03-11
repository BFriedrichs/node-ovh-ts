/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedResellingProviderEnum } from './ServicesExpandedResellingProviderEnum';
import { ServicesExpandedResourceStateEnum } from './ServicesExpandedResourceStateEnum';
import { ServicesExpandedProduct } from './ServicesExpandedProduct';

export type ServicesExpandedResource = {
  displayName: string;
  name: string;
  product: ServicesExpandedProduct | null;
  resellingProvider: ServicesExpandedResellingProviderEnum | null;
  state: ServicesExpandedResourceStateEnum;
};
