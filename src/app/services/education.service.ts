import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EducationalInstitution, IEducationalInstitutionType } from '../classes/education/EducationalInstitution';
import { EDUCATION_QUERIES } from '../constants/graphql/educational-queries';
import { IEducationalField } from '../interfaces/education/EducationalField';
import { IMajorOpts } from '../interfaces/education/Major';
import { Major } from '../classes/education/Major';
import { EducationalLevel } from '../classes/education/EducationalLevel';
import { IEducationalLevelOpts } from '../interfaces/education/EducationLevel';
import { IDegreeQryOpts, IDegreeTypeQryOpts } from '../interfaces/education/Degree';
import { Degree, DegreeType } from '../classes/education/Degree';
import { IEducationalInstitutionQryOpts } from '../interfaces/education/EducationalInstitution';

interface IEducationalMappings {
  institutions: Map<number, EducationalInstitution>,
  institutionTypes: Map<number, IEducationalInstitutionType>,
  educationalFields: Map<number, IEducationalField>,
  educationalLevels: Map<number, EducationalLevel>,
  degreeTypes: Map<number, DegreeType>,
  degrees: Map<number, Degree>,
  majors: Map<number, Major>
}

@Injectable({ providedIn: 'root' })
export class EducationService extends GenericService {
  degrees: Degree[] = [];

  override async initialize() {
    const mappings = await this.getMappings();
    this.degrees = [...mappings.degrees].map((d) => d[1]).sort(Degree.Sort);
    console.log(this.degrees);
    return super.initialize();
  }

  private async getMappings(): Promise<IEducationalMappings> {
    const result: IEducationalMappings = {
      institutions: new Map<number, EducationalInstitution>(),
      institutionTypes: new Map<number, IEducationalInstitutionType>(),
      educationalFields: new Map<number, IEducationalField>(),
      educationalLevels: new Map<number, EducationalLevel>(),
      degreeTypes: new Map<number, DegreeType>(),
      degrees: new Map<number, Degree>(),
      majors: new Map<number, Major>(),
    };
    const mappingResponse = await this._gqls.fetchGraphQL(EDUCATION_QUERIES.GET_MAPPINGS);

    mappingResponse.institutionTypes.forEach((it: IEducationalInstitutionType) => {
      result.institutionTypes.set(it.id, it);
    });

    mappingResponse.fields.forEach((fi: IEducationalField) => {
      result.educationalFields.set(fi.id, fi);
    });

    mappingResponse.majors.forEach((mj: IMajorOpts) => {
      result.majors.set(mj.id, new Major(mj));
    });

    mappingResponse.educationLevels.forEach((el: IEducationalLevelOpts) => {
      result.educationalLevels.set(el.id, new EducationalLevel(el));
    });

    const institutions: EducationalInstitution[] = mappingResponse.institutions.map((ins: IEducationalInstitutionQryOpts) => new EducationalInstitution(
      {
        id: ins.id,
        name: ins.name,
        institutionType: result.institutionTypes.get(ins.type_id_fk) as IEducationalInstitutionType,
      },
    ));

    institutions.forEach((institution) => {
      result.institutions.set(institution.id, institution);
    });

    mappingResponse.degreeTypes.forEach((dgt: IDegreeTypeQryOpts) => {
      result.degreeTypes.set(dgt.id, new DegreeType({
        id: dgt.id,
        prefix: dgt.prefix,
        usesSuffixInline: dgt.usesSuffixInline,
        level: result.educationalLevels.get(dgt.education_level_fk) as EducationalLevel,
      }));
    });

    mappingResponse.degrees.forEach((dg: IDegreeQryOpts) => {
      result.degrees.set(dg.id, new Degree({
        id: dg.id,
        gpa: dg.gpa,
        startedOn: dg.startedOn,
        awardedOn: dg.awardedOn,
        institution: result.institutions.get(dg.institution_fk) as EducationalInstitution,
        major: result.majors.get(dg.major_fk) as Major,
        field: result.educationalFields.get(dg.degree_field_fk) as IEducationalField,
        type: result.degreeTypes.get(dg.degree_type_fk) as DegreeType,
      }));
    });

    return result;
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
