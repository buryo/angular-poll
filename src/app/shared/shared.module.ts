import { CommonModule } from '@angular/common';
import { PollCardComponent } from './components/poll-card/poll-card.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    PollCardComponent
  ],
  exports: [
    MaterialModule,
    PollCardComponent
  ]
})

export class SharedModule {
}
