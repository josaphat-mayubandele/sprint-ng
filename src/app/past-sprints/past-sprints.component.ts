import { Component, OnInit } from '@angular/core';

import { PastSprints } from '../models/past-sprint.model';
import { SprintsService } from '../services/sprints.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-past-sprints',
  templateUrl: './past-sprints.component.html',
  styleUrls: ['./past-sprints.component.css']
})
export class PastSprintsComponent implements OnInit {
  /**
   * @param PastSprints Tableau de sprint passer
   * @param canDeleted pour activer le bouton deleteAll
   * @param havePagination pour la pagination
   */
  pastSprint$: PastSprints[];
  canDeleted: boolean;
  havePagination: boolean;

  /**
   *
   * @param mysprints le sprint courant
   * @param router le routage
   */
  constructor(private mysprints: SprintsService, private router: Router) {}

  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      if (this.mysprints.get()) {
        resolve(this.getSprints);
        this.getSprints();
      } else {
        reject('Oops... something went wrong');
      }
    });
  }
  // recevoir les sprint de l'utilisateur current
  async getSprints() {
    await this.mysprints.get().subscribe(data => {
      this.pastSprint$ = data;
      console.log(data);
    });
  }
  /**
   * delete all sprints
   */
  deleteAll() {
    this.mysprints.deleteAll().subscribe(data => {
      console.log('array deleted' + data);
      this.getSprints();
    });
  }
}
