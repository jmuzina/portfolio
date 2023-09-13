import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EducationalInstitution } from '../classes/EducationalInstitution';

@Injectable({ providedIn: 'root' })
export class EducationService extends GenericService {
  override async initialize() {
    const mappings = await this.getMappings();
    return super.initialize();
  }

  private async getMappings(): Promise<{
    institutions: Map<number, EducationalInstitution>
  }> {

  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
