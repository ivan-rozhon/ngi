import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [CommonModule, NotFoundComponent]
})
export class SharedModule {}
