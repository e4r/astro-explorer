import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { Job } from '../interfaces/job';
import { Person } from '../interfaces/person';
import { Planet } from '../interfaces/planet';
import { Sign } from '../interfaces/sign';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  planets$!: Observable<Planet[]>;
  signs$!: Observable<Sign[]>;
  people$!: Observable<Person[]>;
  jobs$!: Observable<Job[]>;


  constructor(
    private as: APIService
  ) { }

  ngOnInit() {
    this.people$ = this.as.getPeople().pipe(map(d => d.items));
    this.signs$ = this.as.signs$;
    this.planets$ = this.as.planets$;
    this.jobs$ = this.as.jobs$;

  }

}
