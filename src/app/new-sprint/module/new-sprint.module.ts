import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SprintTemplateService } from '../../services/sprint-template.service';
import { NewSprintComponent } from '../new-sprint.component';
import { ModalComponent } from '../../notification/modal.component';
import { OngoingSprintComponent } from '../ongoing-sprint/ongoing-sprint.component';
import { FormatSecondsPipe } from '../../core/format-seconds.pipe';
import { GaugeModule } from 'angular-gauge';
@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, GaugeModule.forRoot()],
  providers: [SprintTemplateService],
  declarations: [
    NewSprintComponent,
    OngoingSprintComponent,
    FormatSecondsPipe,
    ModalComponent
  ],
  bootstrap: [ModalComponent]
})
export class NewSprintModule {}
