import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingSprintService } from './ongoing-sprint.service';
import { OngoingSprintComponent } from './ongoing-sprint.component';

@NgModule({
  imports: [CommonModule],
  providers: [OngoingSprintService],
  declarations: [OngoingSprintComponent]
})
export class OngoingSprintModule {}
