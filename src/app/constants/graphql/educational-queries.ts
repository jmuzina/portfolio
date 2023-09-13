export const EDUCATION_QUERIES = {
  GET_MAPPINGS: `
  query getEducationalInfo {
    degreeTypes:portfolio_zlookup_degree_type(where:{Degrees_aggregate:{count:{predicate:{_neq:0}}}}) {
      id
      prefix
      uses_suffix_inline
    }
    educationLevels:portfolio_zlookup_education_level(where:{DegreeTypes_aggregate:{count:{predicate:{_neq:0}}}}) {
      id
      label
    }
    institutionTypes:portfolio_zlookup_education_institution_type(where:{
      EducationInstitutions_aggregate:{
        count: {
          filter: {
            Degrees_aggregate: {
              count: {
                predicate: {
                  _neq:0
                }
              }
            }
          },
          predicate: {
            _neq: 0
          }
        }
      }
    }) {
      id
      label
    }
    majors:portfolio_zlookup_degree_major(where:{Degrees_aggregate:{count:{predicate:{_neq:0}}}}) {
      id
      label
      abbreviation
    }
    fields:portfolio_zlookup_degree_field(where:{Degrees_aggregate:{count:{predicate:{_neq:0}}}}) {
      id
      suffix
      label:field_label
    }
    institutions:portfolio_EducationInstitution(where:{Degrees_aggregate:{count:{predicate:{_neq:0}}}}) {
      id
      name
    }
  }
  `,
  GET_DEGREES: `query GetDegrees {
    portfolio_Degree(order_by: {DegreeType: {EducationLevel: {priority: asc}}}) {
      institution_fk
      major_fk
      degree_field_fk
      degree_type_fk
      gpa
      awarded_on
      started_on
    }
  }`,
};
