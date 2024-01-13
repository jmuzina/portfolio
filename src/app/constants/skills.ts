import { ISkillClassificationOpts } from '../interfaces/employment/Skill';

export const skillClassificationMappings: ISkillClassificationOpts[] = [
  {
    label: 'Back End',
    picture: {
      icon: {
        class: 'fa fa-thin fa-database fa-2xl',
      },
    },
    skills: [
      {
        label: 'Node',
        acquired_at: '2019-06-01',
        picture: {
          image: {
            alt_text: 'NodeJS logo',
            file: {
              address: '/assets/images/skills/nodejs_logo.png',
            },
          },
        },
      },
      {
        label: 'MS SQL Server',
        acquired_at: '2022-05-20',
        picture: {
          image: {
            alt_text: 'MS SQL Server Logo',
            file: {
              address: '/assets/images/skills/ms_sql_server_logo.png',
            },
          },
        },
      },
      {
        label: 'MySQL',
        acquired_at: '2017-06-01',
        picture: {
          image: {
            alt_text: 'MYSQL Logo',
            file: {
              address: '/assets/images/skills/mysql_logo.png',
            },
          },
        },
      },
      {
        label: 'PostgreSQL',
        acquired_at: '2022-07-25',
        picture: {
          image: {
            alt_text: 'PostgreSQL Logo',
            file: {
              address: '/assets/images/skills/postgres_logo.png',
            },
          },
        },
      },
    ],
  },
  {
    label: 'Front End',
    picture: {
      icon: {
        class: 'fa fa-thin fa-window-restore fa-2xl',
      },
    },
    skills: [
      {
        label: 'Angular',
        acquired_at: '2022-07-25',
        picture: {
          image: {
            alt_text: 'Angular logo',
            file: {
              address: '/assets/images/skills/angular_logo.png',
            },
          },
        },
      },
      {
        label: 'React',
        acquired_at: '2023-01-01',
        picture: {
          image: {
            alt_text: 'React Logo',
            file: {
              address: '/assets/images/skills/react_logo.png',
            },
          },
        },
      },
      {
        label: 'Vue',
        acquired_at: '2022-03-01',
        picture: {
          image: {
            alt_text: 'Vue Logo',
            file: {
              address: '/assets/images/skills/vue_logo.png',
            },
          },
        },
      },
      {
        label: 'jQuery',
        acquired_at: '2020-12-01',
        picture: {
          image: {
            alt_text: 'jQuery logo',
            file: {
              address: '/assets/images/skills/jquery_logo.png',
            },
          },
        },
      },
    ],
  },
  {
    label: 'Tools',
    picture: {
      icon: {
        class: 'fa fa-thin fa-hammer fa-2xl',
      },
    },
    skills: [
      {
        label: 'Python',
        acquired_at: '2018-12-01',
        picture: {
          image: {
            alt_text: 'Python logo',
            file: {
              address: '/assets/images/skills/python_logo.png',
            },
          },
        },
      },
      {
        label: 'Docker',
        acquired_at: '2022-07-25',
        picture: {
          image: {
            alt_text: 'Docker logo',
            file: {
              address: '/assets/images/skills/docker_logo.png',
            },
          },
        },
      },
      {
        label: 'GitHub',
        acquired_at: '2018-01-01',
        picture: {
          image: {
            alt_text: 'GitHub Logo',
            file: {
              address: '/assets/images/skills/github_logo.png',
            },
          },
        },
      },
      {
        label: 'GitLab',
        acquired_at: '2020-06-01',
        picture: {
          image: {
            alt_text: 'GitLab Logo',
            file: {
              address: '/assets/images/skills/gitlab_logo.png',
            },
          },
        },
      },
    ],
  },
];
