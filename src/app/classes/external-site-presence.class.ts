export class ExternalSitePresence {
  label!: string;

  address!: string;

  icon?: string;

  public open() {
    window.open(this.address);
  }

  constructor(public options: Partial<ExternalSitePresence>) {
    Object.assign(this, options);
  }
}
