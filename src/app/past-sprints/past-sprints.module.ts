import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastSprintsService } from './past-sprints.service';
import { PastSprintsComponent } from './past-sprints.component';

@NgModule({
  imports: [CommonModule],
  providers: [PastSprintsService],
  declarations: [PastSprintsComponent]
})
export class PastSprintsModule {}
