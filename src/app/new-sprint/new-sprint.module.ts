import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSprintService } from './new-sprint.service';
import { NewSprintComponent } from './new-sprint.component';

@NgModule({
  imports: [CommonModule],
  providers: [NewSprintService],
  declarations: [NewSprintComponent]
})
export class NewSprintModule {}
