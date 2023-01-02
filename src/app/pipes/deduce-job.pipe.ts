import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job } from '../interfaces/job';
import { Person } from '../interfaces/person';
import { APIService } from '../services/api.service';

@Pipe({
  name: 'deduceJob',
  standalone: true
})

export class DeduceJobPipe implements PipeTransform {
  constructor(
    private as: APIService
  ) { }
  transform(person: Person): Observable<Job> {

    return this.as.jobs$.pipe(
      map(jobs => {
        return jobs.find(s => s.id === person.job) as Job;
      })
    )

  }
}
