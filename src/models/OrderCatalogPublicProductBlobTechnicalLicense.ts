/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalLicenseCores } from './OrderCatalogPublicProductBlobTechnicalLicenseCores';

export type OrderCatalogPublicProductBlobTechnicalLicense = {
  application?: string | null;
  cores?: OrderCatalogPublicProductBlobTechnicalLicenseCores | null;
  cpu?: OrderCatalogPublicProductBlobTechnicalCPU | null;
  distribution?: string | null;
  edition?: string | null;
  family?: string | null;
  feature?: string | null;
  flavor?: string | null;
  images?: string[] | null;
  nbOfAccount?: number | null;
  package?: string | null;
  version?: string | null;
};
