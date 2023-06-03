import { ConditionalClasses } from '../types/conditional-classes.type';

export class ConditionalClassList {
  public enabledClasses(): string[] {
    return Object.entries(this.list)
      .filter((conditionalClassPairing) => conditionalClassPairing[1]())
      .map(
        (enabledConditionalClassPairing) => enabledConditionalClassPairing[0],
      );
  }

  public classesAsString(delim = ' '): string {
    return this.enabledClasses().join(delim);
  }

  constructor(public list: ConditionalClasses = {}) {}
}
