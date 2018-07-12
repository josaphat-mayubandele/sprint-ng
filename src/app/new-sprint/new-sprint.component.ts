import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  Injector
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SprintTemplate } from '../models/sprint-template.model';
import { PastSprints } from '../models/past-sprint.model';
import { Router } from '@angular/router';
import { SprintsService } from '../services/sprints.service';
import { SprintTemplateService } from '../services/sprint-template.service';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {
  template: SprintTemplate[] = [];
  selectedTemplate: SprintTemplate;
  // sprintOption: PastSprints = {};
  sprintDescription: any;
  notify: Boolean;
  showValidationAlert: Boolean;

  sprintOption: any = {};
  cuurentTemplate: any = {};
  constructor(
    private templateData: SprintTemplateService,
    private sprint: SprintsService,
    @Inject(PLATFORM_ID) platformId: string,
    private injector: Injector,
    private router: Router
  ) {}

  ngOnInit() {
    this.sprintOption.notify = false;
    this.getTemplate();
  }

  // recevoir les sprint de l'utilisateur current
  getTemplate() {
    this.templateData.get().subscribe(data => {
      this.template = data.pastTemplate;
      console.log(this.template);
    });
  }

  create() {
    console.log(this.sprintOption.notify);
    console.log(this.selectedTemplate);
    this.sprintOption.createdAt = new Date();
    this.sprintOption.name = this.selectedTemplate.name;
    this.sprintOption.duration = this.selectedTemplate.duration;
    this.sprint.create(this.sprintOption);

    this.router.navigate(['new/on']);
  }
}
