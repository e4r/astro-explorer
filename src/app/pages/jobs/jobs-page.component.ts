import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/interfaces/job';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'jobs-page',
  templateUrl: 'jobs-page.component.html'
})

export class JobsPageComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  constructor(
    private as: APIService
  ) { }

  ngOnInit() {
    this.jobs$ = this.as.jobs$;
  }
}
