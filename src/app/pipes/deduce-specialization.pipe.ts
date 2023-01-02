import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Specialization } from '../interfaces/specialization';
import { APIService } from '../services/api.service';

@Pipe({
  name: 'deduceSpecialization',
  standalone: true
})

export class DeduceSpecializationPipe implements PipeTransform {
  constructor(
    private as: APIService
  ) { }
  transform(value: string): Observable<Specialization> {
    return this.as.specializations$.pipe(
      map((d) => {
        return d.find((s) => {
          return s.id === value;
        }) as Specialization;
      })
    )
  }
}
