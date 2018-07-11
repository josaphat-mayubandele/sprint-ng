import { Component, OnInit, Renderer2 } from '@angular/core';
import { interval, Subject, fromEvent, merge, empty, Observable } from 'rxjs';
import { mapTo, takeWhile, startWith, switchMap, scan } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SprintsService } from '../../services/sprints.service';
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
  constructor(public router: Router, private sprint: SprintsService) {}

  pause() {
    this.show = true;
  }

  resume() {
    this.show = false;
  }

  cancel() {
    this.sprint.current.status = 'Cancelled (at ' + this.progress + '%)';
    this.finsh();
  }

  ongoing(countdownSeconds): void {
    let count = 0;
    const intervall = setInterval(data => {
      count++;
      // console.log(this.data);
      // console.log((count * 100) / 1000);
    }, 10);

    // ------------------------------------
    const setHTML = id => val =>
      (document.getElementById(id).innerHTML =
        (val * 10) / countdownSeconds + '');
    // const pauseButton = document.querySelector('#pause');
    // const resumeButton = document.querySelector("#resume");
    const stopButton = document.querySelector('#stop');
    const noCancel = document.querySelector('#noCancel');
    const interval$ = interval(1000).pipe(mapTo(-1));

    const vitesse$ = interval(10).pipe(mapTo(-1));

    // const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    // const resume$ = fromEvent(resumeButton, "click").pipe(mapTo(true));
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
        // console.log(count);
        if (data === 0) {
          this.progress = 0;
          this.sprint.current.status = 'Completed';
          clearInterval(intervall);
          this.finsh();
        } else {
          this.progress = data;
        }
      });

    // .subscribe(setHTML('remaining'));
  }
  finsh(): void {
    this.timer$.unsubscribe();
    this.sprint.current.finishedAt = new Date();
    this.sprint.save(this.sprint.current).subscribe();
  }
  // ------------------------------------------------------------------------------
  ngOnInit() {
    this.sprint.current.startedAt = new Date();
    this.ongoing(10);
    // 100 = 1 seconde
    // 200 = 2 seconde
    // 500 = 5 seconde
    // 1000 = 10 seconde
    // 2000 = 20 seconde
    // 6000 = 60 seconde = 1 minute
  }
}
