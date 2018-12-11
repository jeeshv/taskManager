import {NgModule, ModuleWithProviders} from '@angular/core';
import { QuoteService } from './quote.service';
import { MmallService } from './mmall.service';

export {
  QuoteService,
  MmallService,
}

@NgModule()
export class ServicesModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        MmallService
      ]
    };
  }
}
