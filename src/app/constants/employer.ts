import { IEmployerOpts } from '../interfaces/employment/Employer';

export const employerMappings: IEmployerOpts[] = [
  {
    name: 'Comsat Architects',
    jobs: [
      {
        title: 'Software Developer',
        started_at: '2022-07-25',
        ended_at: '2023-11-22',
        responsibilities: [
          {
            text: 'Developed intuitive mission planning and data visualization applications for NASA, translating complex scientific requirements into user-friendly interfaces.',
          },
          {
            text: 'Mentored & supervised junior developers, emphasizing rapidly enabling effective contribution.',
          },
        ],
      },
    ],
  },
  {
    name: 'Medical Mutual',
    jobs: [
      {
        title: 'ETL Developer Intern',
        started_at: '2022-05-20',
        ended_at: '2022-07-22',
        responsibilities: [
          {
            text: 'Extracted key data from data lakes into data warehouses using Microsoft SSIS.',
          },
          {
            text: 'Delivered actionable intelligence streams to business analysts using Microsoft SQL Server.',
          },
          {
            text: 'Simplified developer workflow by creating shell scripts to automate repetitive tasks.',
          },
        ],
      },
    ],
  },
  {
    name: 'Reworld Inc',
    jobs: [
      {
        title: 'Game Developer Intern',
        started_at: '2020-11-25',
        ended_at: '2022-07-22',
        responsibilities: [
          {
            text: 'Provided Lua lectures, programming advice, and answered technical questions for new game developer interns.',
          },
          {
            text: 'Closely advised two game development teams as a consultant.',
          },
          {
            text: 'Worked within small cross-functional team of fellow interns to design, develop, & deliver games built on the Reworld game engine.',
          },
        ],
      },
    ],
  },
  {
    name: 'Kent State University',
    jobs: [
      {
        title: 'Research Assistant, Distributed Networks',
        started_at: '2020-04-15',
        ended_at: '2020-09-15',
        responsibilities: [
          {
            text: 'Analyzed & reported on efficacy of distributed network consensus algorithms.',
          },
          {
            text: 'Designed and implemented testing applications to measure key network metrics.',
          },
        ],
      },
    ],
  },
  {
    name: 'US Game Hosting',
    jobs: [
      {
        title: 'Game Developer, Contract/Freelance',
        started_at: '2020-06-01',
        ended_at: '2020-08-15',

        responsibilities: [
          {
            text: "Developer for a Garry's Mod community, working on maintaining and enhancing a proprietary gamemode for a thriving community",
          },
          {
            text: 'Sought out and implemented feature requests from users and management',
          },
        ],
      },
    ],
  },
  {
    name: 'Sonoran Software Systems LLC',
    jobs: [
      {
        title: 'Web Developer, Contract/Freelance',
        started_at: '2019-12-15',
        ended_at: '2020-03-15',
        responsibilities: [
          {
            text: 'Created media-rich, mobile responsive webpages to improve company web presence',
          },
        ],
      },
    ],
  },
  {
    name: 'Brooksource (B2B for Sherwin-Williams)',
    jobs: [
      {
        title: 'Software Developer',
        started_at: '2023-11-29',
        ended_at: '2024-04-29',
        responsibilities: [
          {
            text: 'Supported a full-stack product inventory application used by a global salesforce. Architected & maintained cloud deployments & infrastructure.',
          },
          {
            text: 'Led an overhaul of the CI/CD pipeline, increasing deployment reliability & velocity for a global sales application'
          }
        ],
      },
    ],
  },
  {
    name: 'Canonical',
    jobs: [
      {
        title: 'Software Engineer',
        started_at: '2024-04-29',
        responsibilities: [
          {
            text: 'Maintain and enhance <a href="https://vanillaframework.io">Vanilla Framework</a>, supporting sites like <a href="https://ubuntu.com">ubuntu.com</a>, used by millions of users globally.'
          },
          {
            text: 'Architected and implemented design system testing suites, ensuring reliable deployments.'
          },
          {
            text: 'Collaborate with cross-functional teams (Engineering, UX, Brand) to build consensus, solve problems, and drive user success.'
          }
        ]
      }
    ]
  }
];
