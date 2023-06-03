import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class GenericService {
  public initialized = false;

  public async initialize(): Promise<any> {
    return this.onInitialized();
  }

  public async onInitialized(): Promise<any> {
    this.initialized = true;
  }
}
