import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { interval, Subject, fromEvent, merge, empty, Observable } from 'rxjs';
import { mapTo, takeWhile, startWith, switchMap, scan } from 'rxjs/operators';
import { Router } from '@angular/router';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../notification/modal.component';

import { SprintsService } from '../../services/sprints.service';
import { PushNotificationsService } from '../../services/push.notification.service';
@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing-sprint.component.html',
  styleUrls: ['./ongoing-sprint.component.css']
})
export class OngoingSprintComponent implements OnInit {
  timer$;
  countdownSeconds;
  progress;
  localStatus = false;
  show = true;
  color = '#ecf0f1';
  closeResult: string;
  constructor(
    public router: Router,
    private sprint: SprintsService,
    private modalService: NgbModal,
    private _notificationService: PushNotificationsService
  ) {
    this._notificationService.requestPermission();
  }

  /**
   * notify
   */
  notify() {
    if (this.sprint.current.notify) {
      const data: Array<any> = [];
      data.push({
        title: 'Sprint',
        alertContent: 'Your Sprint is finish'
      });
      this._notificationService.generateNotification(data);
    }
  }
  /**
   * modal
   */
  open() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.name = 'World';
  }
  /**
   *
   */
  pause() {
    this.show = true;
  }

  resume() {
    this.show = false;
  }

  cancel() {
    this.sprint.current.finishedAt = new Date();
    this.sprint.current.status =
      'Cancelled (at ' + Math.round(this.progress) + '%)';

    this.finsh();
  }

  ongoing(countdownSeconds): void {
    const count = 0;
    /*
    const intervall = setInterval(data => {
      count++;
      // console.log((count * 100) / 1000);
    }, 10);
*/
    // ------------------------------------
    const setHTML = id => val =>
      (document.getElementById(id).innerHTML =
        (val * 10) / countdownSeconds + '');
    const stopButton = document.querySelector('#stop');
    const noCancel = document.querySelector('#noCancel');
    const interval$ = interval(1000).pipe(mapTo(-1));

    const vitesse$ = interval(10).pipe(mapTo(-1));
    const stop$ = fromEvent(stopButton, 'click').pipe(mapTo(false));
    const noCancel$ = fromEvent(noCancel, 'click').pipe(mapTo(true));

    this.timer$ = merge(stop$, noCancel$)
      .pipe(
        startWith(true),
        switchMap(val => (val ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
        takeWhile(v => v >= 0)
      ) // if timer is paused return empty observable
      .subscribe(data => {
        if (data === 0) {
          this.sprint.current.finishedAt = new Date();
          this.progress = 0;
          const end = setInterval(() => {
            this.notify();
            this.sprint.current.status = 'Completed';
            this.finsh();
            clearInterval(end);
          }, 1000);
        } else {
          this.progress = (data * 100.0) / this.sprint.current.duration;
        }
      });
  }
  finsh(): void {
    this.timer$.unsubscribe();
    this.open();
    this.sprint.save(this.sprint.current).subscribe();
    console.log(this.sprint.current.createdAt);
    console.log(this.sprint.current.startedAt);
    console.log(this.sprint.current.finishedAt);
    this.router.navigate(['/sprints']);
  }

  getFormattedDuration() {
    return this.sprint.current.duration > 60
      ? this.sprint.current.duration / 60 + 'min'
      : this.sprint.current.duration + 's';
  }
  // ------------------------------------------------------------------------------
  ngOnInit() {
    this.sprint.current.name =
      this.sprint.current.name + '(' + this.getFormattedDuration() + ')';
    console.log(this.sprint.current.name);
    this.progress = 100;
    this.sprint.current.startedAt = new Date();
    console.log(this.sprint.current.duration);
    if (!this.sprint.current.duration) {
      this.router.navigate(['/new']);
    }
    this.ongoing(this.sprint.current.duration);
    // 100 = 1 seconde
    // 200 = 2 seconde
    // 500 = 5 seconde
    // 1000 = 10 seconde
    // 2000 = 20 seconde
    // 6000 = 60 seconde = 1 minute
  }
}
