import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet } from '../interfaces/planet';
import { APIService } from '../services/api.service';

@Pipe({
  name: 'deducePlanet',
  standalone: true
})

export class DeducePlanetPipe implements PipeTransform {
  constructor(
    private as: APIService
  ) { }
  transform(planetId: string): Observable<Planet> {
    return this.as.planets$.pipe(
      map((d) => {
        return d.find(p => p.id === planetId) as Planet
      })
    )
  }
}
