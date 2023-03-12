/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedResourceStateEnum } from './ServicesExpandedResourceStateEnum';
import { ServicesExpandedProduct } from './ServicesExpandedProduct';
import { ServicesExpandedResellingProviderEnum } from './ServicesExpandedResellingProviderEnum';

export type ServicesExpandedResource = {
  displayName: string;
  name: string;
  product: ServicesExpandedProduct | null;
  resellingProvider: ServicesExpandedResellingProviderEnum | null;
  state: ServicesExpandedResourceStateEnum;
};
