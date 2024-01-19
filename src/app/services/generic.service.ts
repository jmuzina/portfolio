import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class GenericService {
  initialized = false;

  async initialize(): Promise<any> {
    return this.onInitialized();
  }

  async onInitialized(): Promise<any> {
    this.initialized = true;
  }
}
