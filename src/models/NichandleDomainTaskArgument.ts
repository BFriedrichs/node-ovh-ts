/* WARNING: This file is auto-generated . Do not edit manually. */

import { XanderContactFieldEnum } from './XanderContactFieldEnum';
import { DomainDocumentFormatsEnum } from './DomainDocumentFormatsEnum';

export type NichandleDomainTaskArgument = {
  acceptedFormats: DomainDocumentFormatsEnum[] | null;
  acceptedValues: string[] | null;
  description: string | null;
  fields: XanderContactFieldEnum[] | null;
  key: string;
  maximumSize: number | null;
  minimumSize: number | null;
  readOnly: boolean;
  template: string | null;
  type: string;
  value: string | null;
};
