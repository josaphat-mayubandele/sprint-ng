import { Component, OnInit } from '@angular/core';

import { PastSprints } from '../models/past-sprint.model';
import { SprintsService } from '../services/sprints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
  currentpastsprint: PastSprints[] = []; // [] = [];
  pastSprints: PastSprints[];
  canDeleted: boolean;
  havePagination: boolean;

  constructor(private sprintService: SprintsService, private router: Router) {}

  ngOnInit() {
    this.getSprints();
  }

  // recevoir les sprint de l'utilisateur current
  getSprints() {
    this.sprintService.get().subscribe(data => {
      this.currentpastsprint = data.pastsprint;
      console.log(data);
    });
  }

  deleteAll() {
    this.sprintService.deleteAll();
  }
  newpage() {
    this.router.navigate([{ outlets: { popup: ['new'] } }]);
  }
}
