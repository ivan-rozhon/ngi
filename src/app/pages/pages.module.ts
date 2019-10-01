import { NgModule } from '@angular/core';

import { PagesRoutingModule } from '@pages/pages-routing.module';
import { PagesComponent } from '@pages/pages.component';

import { LandingModule } from '@pages/landing/landing.module';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [PagesRoutingModule, SharedModule, LandingModule],
  declarations: [PagesComponent]
})
export class PagesModule {}
