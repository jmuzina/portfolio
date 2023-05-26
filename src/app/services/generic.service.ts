import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root' })
export abstract class GenericService {
  public initialized = false;

  public async initialize(): Promise<any> {
    this.initialized = true;
    return this.onInitialized();
  }

  public abstract onInitialized(): Promise<any>;
}
