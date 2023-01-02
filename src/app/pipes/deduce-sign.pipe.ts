import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person';
import { Sign } from '../interfaces/sign';

@Pipe({
  name: 'deduceSign',
  standalone: true
})

export class DeduceSignPipe implements PipeTransform {
  transform(person: Person, signs: Sign[]): Sign {
    return signs.find(s => s.id === person.sign) as Sign;
  }
}
