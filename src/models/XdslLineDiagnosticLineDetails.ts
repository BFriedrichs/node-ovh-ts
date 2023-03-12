/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslDslTypeEnum } from './XdslDslTypeEnum';
import { XdslLineDiagnosticLineCapabilities } from './XdslLineDiagnosticLineCapabilities';
import { XdslLineDiagnosticConnectionInformations } from './XdslLineDiagnosticConnectionInformations';
import { XdslLineDiagnosticSection } from './XdslLineDiagnosticSection';
import { XdslLineDiagnosticProviderEnum } from './XdslLineDiagnosticProviderEnum';

export type XdslLineDiagnosticLineDetails = {
  accessName: string;
  accessPing: boolean | null;
  address: string | null;
  connectionInfo: XdslLineDiagnosticConnectionInformations | null;
  contactPhone: string | null;
  description: string | null;
  dslamIsSynchronized: boolean | null;
  gtr: boolean;
  length: number;
  lineCapabilities: XdslLineDiagnosticLineCapabilities | null;
  lineType: XdslDslTypeEnum;
  nra: string | null;
  number: string;
  operator: XdslLineDiagnosticProviderEnum;
  sections: XdslLineDiagnosticSection[] | null;
};
