export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: 'Core', items: ['SQL', 'Python', 'PySpark', 'SAS', 'R'] },
  {
    group: 'Data platforms',
    items: ['Snowflake', 'PostgreSQL', 'Redshift', 'SQL Server', 'dbt'],
  },
  {
    group: 'Cloud and pipelines',
    items: ['AWS S3', 'Azure Data Lake', 'Jenkins', 'GitHub Actions', 'Airflow'],
  },
  { group: 'AI and automation', items: ['Claude API', 'n8n', 'Apify', 'Supabase'] },
  { group: 'BI and reporting', items: ['Power BI', 'Tableau', 'Metabase'] },
  { group: 'Familiar with', items: ['AWS Glue', 'AWS Lambda', 'Databricks'] },
];
