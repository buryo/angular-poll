import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
  ],
})

export class MaterialModule {
}
