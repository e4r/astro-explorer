import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sign } from 'src/app/interfaces/sign';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'signs-page',
  templateUrl: 'signs.component.html'
})

export class SignsPageComponent implements OnInit {
  signs$!: Observable<Sign[]>;
  constructor(
    private as: APIService
  ) { }

  ngOnInit() {
    this.signs$ = this.as.signs$;
  }
}
