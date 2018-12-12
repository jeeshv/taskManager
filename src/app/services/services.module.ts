import {NgModule, ModuleWithProviders} from '@angular/core';
import { QuoteService } from './quote.service';
import { MmallService } from './mmall.service';
import { PortalService } from './portal.service';

export {
  QuoteService,
  MmallService,
  PortalService,
}

@NgModule()
export class ServicesModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        MmallService,
        PortalService
      ]
    };
  }
}
