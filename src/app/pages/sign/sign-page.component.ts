import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/person';
import { Sign } from 'src/app/interfaces/sign';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'sign-page',
  templateUrl: 'sign-page.component.html'
})

export class SignPageComponent implements OnInit {
  signId!: string;
  sign$!: Observable<Sign>;
  signs$!: Observable<Sign[]>;
  relatedPeople: Person[] = [];
  constructor(
    private as: APIService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.signId = this.ar.snapshot.params['id'];
    this.signs$ = this.as.signs$;
    this.sign$ = this.as.signs$.pipe(
      map(d => {
        return d.find(s => s.id === this.signId) as Sign
      })
    );

    forkJoin([
      this.sign$,
      this.as.people$
    ]).subscribe({
      next: (ok: [Sign, Person[]]) => {
        console.log('ok', ok);
        this.relatedPeople = ok[1].filter(p => p.sign === ok[0].id);
      }
    })
  }
}
