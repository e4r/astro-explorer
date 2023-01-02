import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, forkJoin, map, Observable, shareReplay } from 'rxjs';
import { APIResponse } from '../interfaces/api-response';
import { Job } from '../interfaces/job';
import { Person } from '../interfaces/person';
import { Planet } from '../interfaces/planet';
import { Sign } from '../interfaces/sign';
import { Specialization } from '../interfaces/specialization';

@Injectable({ providedIn: 'root' })
export class APIService {

  ROOT = 'https://astro-explorer.fly.dev'

  signs$!: Observable<Sign[]>;
  planets$!: Observable<Planet[]>;
  jobs$!: Observable<Job[]>;
  people$!: Observable<Person[]>;
  specializations$!: Observable<Specialization[]>;

  constructor(
    private http: HttpClient
  ) {
    this.setSigns();
    this.setPlanets();
    this.setJobs();
    this.setPeople();
    this.setSpecialization();
  }

  getSpecializations(jobId?: string): Observable<APIResponse<Specialization[]>> {
    return this.http.get<APIResponse<Specialization[]>>(`${this.ROOT}/api/collections/specialization/records`, {

    });
  }

  getPeople(page: string = '1'): Observable<APIResponse<Person[]>> {
    return this.http.get<APIResponse<Person[]>>(`${this.ROOT}/api/collections/people/records`, {
      params: {
        perPage: '500',
        page
      }
    });
  }

  getSigns(): Observable<APIResponse<Sign[]>> {
    return this.http.get<APIResponse<Sign[]>>(`${this.ROOT}/api/collections/signs/records?expand=people`);
  }

  getPlanets(): Observable<APIResponse<Planet[]>> {
    return this.http.get<APIResponse<Planet[]>>(`${this.ROOT}/api/collections/planets/records`);
  }

  getJobs(): Observable<APIResponse<Job[]>> {
    return this.http.get<APIResponse<Job[]>>(`${this.ROOT}/api/collections/job/records`);
  }

  private setSigns(): void {
    this.signs$ = this.getSigns().pipe(
      map(d => d.items),
      shareReplay()
    )
  }

  private setSpecialization(): void {
    this.specializations$ = this.getSpecializations().pipe(
      map(d => d.items),
      shareReplay()
    )
  }
  private setPeople(): void {
    let initial: Person[];
    this.people$ = this.getPeople().pipe(
      concatMap((result) => {
        const pages: number = result.totalPages;
        initial = result.items;
        const calls = [];
        for (let i = 2; i < (pages + 1); i++) {
          calls.push(this.getPeople(`${i}`).pipe(map(d => d.items)))
        }
        return forkJoin(calls)
      }),
      map(d => {
        return d.reduce((p, c) => {
          return p.concat(c)
        }, []).concat(initial)
      }),
      shareReplay()
    )
  }
  private setPlanets(): void {
    this.planets$ = this.getPlanets().pipe(
      map(d => d.items),
      shareReplay()
    )
  }

  private setJobs(): void {
    this.jobs$ = this.getJobs().pipe(
      map(d => d.items),
      shareReplay()
    )
  }


}
