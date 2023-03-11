/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainConfigurationRulesConstraint } from './DomainConfigurationRulesConstraint';
import { DomainConfigurationRulesContextEnum } from './DomainConfigurationRulesContextEnum';
import { DomainConfigurationRulesTypeEnum } from './DomainConfigurationRulesTypeEnum';

export type DomainConfigurationRulesRule = {
  and: DomainConfigurationRulesRule | null;
  conditions: DomainConfigurationRulesRule | null;
  constraints: DomainConfigurationRulesConstraint | null;
  contexts: DomainConfigurationRulesContextEnum | null;
  description: string | null;
  fields: DomainConfigurationRulesRule | null;
  label: string | null;
  or: DomainConfigurationRulesRule | null;
  placeholder: string | null;
  type: DomainConfigurationRulesTypeEnum | null;
};
