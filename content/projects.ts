export type ProjectLink = { label: string; href: string; kind: 'github' | 'demo' };

export type Tool = {
  id: string;
  name: string;
  status: string;
  /** One line for the hero panel */
  panel: string;
  description: string;
  points?: string[];
  stages?: { label: string; text: string }[];
  stack: string[];
  links: ProjectLink[];
  note?: string;
};

export const tools: Tool[] = [
  {
    id: 'tool-dqc',
    name: 'AI Data Quality Checker',
    status: 'Open source',
    panel: '8 checks on any CSV, ranked report written by Claude',
    description:
      'A Python command-line tool. Point it at any CSV and it profiles the file across 8 checks, sends the structured findings to Claude, and writes a plain-English report ranked by severity instead of column order.',
    points: [
      'Checks missing values, duplicate rows, data type issues, cardinality, outliers, string consistency, date formats and summary statistics.',
      'Outliers are tested with both Z-score and IQR, so one extreme value cannot hide the others.',
      'Automates the checks I used to run by hand before data reached stakeholders.',
    ],
    stack: ['Python', 'pandas', 'Claude API'],
    links: [
      {
        label: 'Code on GitHub',
        href: 'https://github.com/gnanendrart/ai-data-quality-checker',
        kind: 'github',
      },
    ],
  },
  {
    id: 'tool-pipeline',
    name: 'Overnight job pipeline',
    status: 'Runs daily at 7 AM',
    panel: 'Two-model screening that runs daily at 7 AM',
    description:
      'A scheduled workflow on a self-hosted server. It scrapes LinkedIn and Indeed in parallel, drops listings it has already seen, and screens the rest against my resume. Only strong matches reach the larger model.',
    points: [
      'Claude Haiku screens every listing. Scores of 60 or higher out of 100 go to Claude Sonnet for resume tailoring.',
      'Deduplication in Supabase, PDFs rendered with Gotenberg, files uploaded to Google Drive.',
      'Ends with an email digest. Daily effort: under 10 minutes.',
    ],
    stack: ['n8n', 'Claude API', 'Apify', 'Supabase', 'Gotenberg'],
    links: [
      {
        label: 'Code on GitHub',
        href: 'https://github.com/gnanendrart/n8n-job-search',
        kind: 'github',
      },
    ],
  },
  {
    id: 'tool-agent',
    name: 'Job Hunt Agent',
    status: 'Live demo',
    panel: 'Web app with a live demo',
    description:
      'A web app for the manual parts of a job search. Upload a resume and paste a job description. It scrapes LinkedIn and Indeed listings, scores each one against the resume, rewrites bullets for the role and drafts a cover letter.',
    points: [
      'ATS-style score for every listing, with a salary estimate.',
      'Pipeline tracking in board or list view, plus an email digest.',
    ],
    stack: ['React', 'Vite', 'Express', 'Claude API', 'Apify'],
    links: [
      { label: 'Open the live demo', href: 'https://job-hunt-agent.onrender.com/', kind: 'demo' },
      {
        label: 'Code on GitHub',
        href: 'https://github.com/gnanendrart/job-hunt-agent',
        kind: 'github',
      },
    ],
  },
  {
    id: 'tool-crickql',
    name: 'CrickQL',
    status: 'Building now',
    panel: 'Text-to-SQL and RAG over a cricket data pipeline',
    description:
      'Ask an IPL cricket question in plain English and get the answer. Number questions go to SQL over a warehouse, rule questions go to retrieval over cricket documents, and questions that need both get both.',
    stages: [
      {
        label: 'Done',
        text: 'Pipeline from Cricsheet to S3, Postgres and Snowflake, modeled in dbt and orchestrated by Airflow. 1,243 matches, 295,732 deliveries, 49 dbt data tests passing on both warehouses.',
      },
      {
        label: 'In progress',
        text: 'Text-to-SQL agent with a read-only database role and an evaluation set.',
      },
      { label: 'Planned', text: 'Retrieval layer and a router that picks SQL, retrieval or both.' },
    ],
    stack: ['Python', 'PostgreSQL', 'Snowflake', 'dbt', 'Airflow', 'AWS S3', 'Claude API'],
    links: [],
    note: 'The repository goes public when the text-to-SQL agent ships.',
  },
];

export type DataProject = {
  name: string;
  description: string;
  stack: string[];
  href: string;
};

export const dataProjects: DataProject[] = [
  {
    name: 'ipl-dbt',
    description:
      'dbt project on Snowflake over IPL cricket data. 2 staging models, 4 marts, 19 tests, and GitHub Actions CI on every pull request.',
    stack: ['dbt', 'Snowflake', 'GitHub Actions'],
    href: 'https://github.com/gnanendrart/ipl-dbt',
  },
  {
    name: 'ab-test-saas-conversion',
    description:
      'End-to-end A/B test on a pre-enrollment screener. Gross conversion fell 2.06 points (significant) while net conversion held flat. Recommendation: do not launch.',
    stack: ['Python', 'pandas', 'scipy', 'statsmodels'],
    href: 'https://github.com/gnanendrart/ab-test-saas-conversion',
  },
  {
    name: 'ipl-cricket-analytics',
    description:
      '15 SQL queries over 1,095 matches and 260,920 deliveries: window functions, CTEs, multi-table joins and conditional aggregation.',
    stack: ['PostgreSQL', 'SQL'],
    href: 'https://github.com/gnanendrart/ipl-cricket-analytics',
  },
];
