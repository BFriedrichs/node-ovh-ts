/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainConfigurationRulesTypeEnum } from './DomainConfigurationRulesTypeEnum';
import { DomainConfigurationRulesContextEnum } from './DomainConfigurationRulesContextEnum';
import { DomainConfigurationRulesConstraint } from './DomainConfigurationRulesConstraint';

export type DomainConfigurationRulesRule = {
  and?: DomainConfigurationRulesRule[] | null;
  conditions?: DomainConfigurationRulesRule | null;
  constraints?: DomainConfigurationRulesConstraint[] | null;
  contexts?: DomainConfigurationRulesContextEnum[] | null;
  description?: string | null;
  fields?: DomainConfigurationRulesRule | null;
  label?: string | null;
  or?: DomainConfigurationRulesRule[] | null;
  placeholder?: string | null;
  type?: DomainConfigurationRulesTypeEnum | null;
};
