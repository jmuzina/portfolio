import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Degree } from '../classes/education/Degree';
import { degreeMappings } from '../constants/education';

@Injectable({ providedIn: 'root' })
export class EducationService extends GenericService {
  degrees: Degree[] = degreeMappings
    .map((opts) => new Degree(opts))
    .sort(Degree.Sort);

  constructor() {
    super();
    console.log(this.degrees);
  }
}
