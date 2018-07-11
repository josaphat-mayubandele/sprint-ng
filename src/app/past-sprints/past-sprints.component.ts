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
  pastSprint$: PastSprints[] = []; // [] = [];
  // pastSprints: PastSprints[];
  canDeleted: boolean;
  havePagination: boolean;

  constructor(private mysprints: SprintsService, private router: Router) {}

  ngOnInit() {
    this.getSprints();
  }

  // recevoir les sprint de l'utilisateur current
  getSprints() {
    this.mysprints.get().subscribe(data => {
      this.pastSprint$ = data.pastsprint;
      console.log(data);
    });
    if (this.pastSprint$) {
      this.canDeleted = true;
    } else {
      this.canDeleted = false;
    }
  }

  deleteAll() {
    this.mysprints.deleteAll().subscribe(data => {
      this.pastSprint$ = data.pastsprint;
    });
  }
  newpage() {
    this.router.navigate([{ outlets: { popup: ['new'] } }]);
  }
}
