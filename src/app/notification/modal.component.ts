import { Component, Input, ViewChild } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ModalDirective } from 'ngx-bootstrap';

import { SprintsService } from '../services/sprints.service';
@Component({
  selector: 'app-modal-content',
  template: `
<div  class="finishedSprintDialog ng-star-inserted container">
    <div>
        <div  fxlayout="column" fxlayoutalign="center center" fxlayoutgap="1.25em" style="flex-direction: column;
        box-sizing: border-box; display: flex; max-width: 100%;
        place-content: center; align-items: center;">
            <h4  style="margin-bottom: 1.25em;">Sprint finished</h4>
            <h5  style="margin-bottom: 1.25em;"> {{namesprint}} </h5>
            <span  class="finished-text" style="margin-bottom: 1.25em;"> Started: &nbsp;&nbsp;{{startedAt | date :'mediumTime'}}
                <br > Completed: {{finishedAt | date :'mediumTime' }} </span>
            <br  style="margin-bottom: 1.25em;">
            <br  style="margin-bottom: 1.25em;">
            <div  class="button-close">
            <button type="button" class="btn btn-info btn-lg" (click)="activeModal.close('Close click')">✔</button>

            </div>
        </div>
    </div>
</div>
  `
})
export class ModalComponent {
  namesprint;
  startedAt;
  finishedAt;
  constructor(
    public activeModal: NgbActiveModal,
    private sprint: SprintsService
  ) {
    this.namesprint = this.sprint.current.name;
    this.startedAt = this.sprint.current.startedAt;
    this.finishedAt = this.sprint.current.finishedAt;
  }
}
