import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Sign } from '../interfaces/sign';
import { APIService } from '../services/api.service';

@Pipe({
  name: 'signById',
  standalone: true
})

export class SignByIdPipe implements PipeTransform {
  constructor(
    private as: APIService
  ) { }
  transform(value: string): Observable<Sign> {
    return this.as.signs$.pipe(
      map((data) => {
        return data.find(s => s.id === value) as Sign
      })
    );
  }
}
