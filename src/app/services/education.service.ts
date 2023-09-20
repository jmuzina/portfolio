import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EducationalInstitution, IEducationalInstitutionType } from '../classes/EducationalInstitution';
import { EDUCATION_QUERIES } from '../constants/graphql/educational-queries';
import { IEducationalField } from '../interfaces/EducationalField';

interface IEducationalMappings {
  institutions: Map<number, EducationalInstitution>,
  institutionTypes: Map<number, IEducationalInstitutionType>,
  educationalFields: Map<number, IEducationalField>
}

@Injectable({ providedIn: 'root' })
export class EducationService extends GenericService {
  override async initialize() {
    const mappings = await this.getMappings();
    return super.initialize();
  }

  private async getMappings(): Promise<IEducationalMappings> {
    const result: IEducationalMappings = {
      institutions: new Map<number, EducationalInstitution>(),
      institutionTypes: new Map<number, IEducationalInstitutionType>(),
      educationalFields: new Map<number, IEducationalField>(),
    };
    const mappingResponse = await this._gqls.fetchGraphQL(EDUCATION_QUERIES.GET_MAPPINGS);

    mappingResponse.institutionTypes.forEach((it: IEducationalInstitutionType) => {
      result.institutionTypes.set(it.id, it);
    });

    mappingResponse.fields.forEach((fi: IEducationalField) => {
      result.educationalFields.set(fi.id, fi);
    });

    const institutions: EducationalInstitution[] = mappingResponse.institutions.map((ins: { id: number, name: string, InstitutionType: { id: number } }) => new EducationalInstitution(
      {
        id: ins.id,
        name: ins.name,
        institutionType: result.institutionTypes.get(ins.InstitutionType.id) as IEducationalInstitutionType,
      },
    ));

    institutions.forEach((institution) => {
      result.institutions.set(institution.id, institution);
    });
    console.log(mappingResponse, result);
    return result;
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
