import { NgModule } from '@angular/core';

import { PrivacyPolicyComponent } from '@pages/privacy-policy/privacy-policy.component';
import { SwgComponent } from '@pages/privacy-policy/swg/swg.component';
import { PrivacyPolicyRoutingModule } from '@pages/privacy-policy/privacy-policy-routing.module';

@NgModule({
  declarations: [PrivacyPolicyComponent, SwgComponent],
  imports: [PrivacyPolicyRoutingModule]
})
export class PrivacyPolicyModule {}
