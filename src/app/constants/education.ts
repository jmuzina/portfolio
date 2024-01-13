import { IDegreeOpts } from '../interfaces/education/Degree';

export const degreeMappings: IDegreeOpts[] = [
  {
    started_on: '2018-08-15T00:00:00+00:00',
    awarded_on: '2022-05-20T00:00:00+00:00',
    institution: {
      name: 'Kent State University',
      type: {
        label: 'University',
      },
    },
    type: {
      label: 'Bachelor',
    },
    major: {
      label: 'Computer Science',
    },
    field: {
      label: 'Science',
      suffix: 'S',
    },
    honor: {
      label: 'Magna Cum Laude',
    },
    gpa: 3.86,
  },
];
