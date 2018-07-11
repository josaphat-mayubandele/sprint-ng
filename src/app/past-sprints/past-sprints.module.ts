import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsService } from '../services/sprints.service';
import { PastSprintsComponent } from './past-sprints.component';

@NgModule({
  imports: [CommonModule],
  providers: [SprintsService],
  declarations: [PastSprintsComponent]
})
export class PastSprintsModule {}
