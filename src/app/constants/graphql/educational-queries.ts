export const EDUCATION_QUERIES = {
  GET_MAPPINGS: `
    query getEducationalInfo {
      degreeTypes: portfolio_zlookup_degree_type(where: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}) {
        id
        prefix
        usesSuffixInline: uses_suffix_inline
        education_level_fk
      }
      educationLevels: portfolio_zlookup_education_level(where: {DegreeTypes_aggregate: {count: {filter: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}, predicate: {_neq: 0}}}}) {
        id
        label
        priority
      }
      institutionTypes: portfolio_zlookup_education_institution_type(where: {EducationInstitutions_aggregate: {count: {filter: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}, predicate: {_neq: 0}}}}) {
        id
        label
      }
      majors: portfolio_zlookup_degree_major(where: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}) {
        id
        label
        abbreviation
      }
      fields: portfolio_zlookup_degree_field(where: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}) {
        id
        suffix
        label: field_label
      }
      institutions: portfolio_EducationInstitution(where: {Degrees_aggregate: {count: {filter: {started_on: {_lte: "now()"}}, predicate: {_neq: 0}}}}) {
        id
        name
        type_id_fk: type_id
      }
      degrees: portfolio_Degree(where: {started_on: {_lte: "now()"}}) {
        id
        gpa
        startedOn: started_on
        awardedOn: awarded_on
        institution_fk
        major_fk
        degree_field_fk
        degree_type_fk
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
