import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyComponent } from '@pages/privacy-policy/privacy-policy.component';
import { SwgComponent } from '@pages/privacy-policy/swg/swg.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
    children: [
      {
        path: 'swg',
        component: SwgComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPolicyRoutingModule {}
