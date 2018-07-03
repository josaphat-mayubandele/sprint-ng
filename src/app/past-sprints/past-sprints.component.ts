import { Component, OnInit } from '@angular/core';

import { PastSprintModel } from '../models/past-sprint.model';
import { PastSprintsService } from './past-sprints.service';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
  currentpastsprint: PastSprintModel;

  canDeleted: boolean;
  havePagination: boolean;

  constructor(private sprintService: PastSprintsService) {
    this.getSprints();
  }

  ngOnInit() {}

  // recevoir les sprint de l'utilisateur current
  getSprints() {
    this.sprintService.getSprint().subscribe(data => {
      this.currentpastsprint = data;
    });
  }
}
