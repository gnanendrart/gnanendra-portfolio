export type Role = {
  title: string;
  company: string;
  period: string;
  place: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const roles: Role[] = [
  {
    title: 'Senior Data Analyst (Data Analyst III), contractor',
    company: 'Centers for Disease Control and Prevention',
    period: 'Jun 2023 to Feb 2026',
    place: 'Remote, USA',
    bullets: [
      'Reconciled 1.5M+ records between legacy SAS pipelines and the 1CDP platform in SAS and PySpark, root-causing the facility and organization ID mismatches behind a 10 to 15% weekly error rate and bringing both systems to zero.',
      'Built Python and SQL pre-submission checks on the Influenza Vaccination Pathway (timeline cutoffs, required-field nulls, 70% week-over-week change flags), catching 80% of recurring data quality issues before federal reporting.',
      'Built production PySpark pipelines on 1CDP processing 3M+ records weekly across 6 facility types, replacing 5 hours of weekly manual SQL work.',
      'Ran recurring training webinars with CDC epidemiologists for each of the 6 facility types, open to about 39,000 enrolled facilities, turning repeat submission errors into corrected entry workflows.',
      'Listed author on 2 CDC MMWR publications (November 2023). Produced the health care personnel vaccination coverage figures and data curation, from NHSN data covering 48M+ records across 5,200+ hospitals.',
    ],
    links: [
      {
        label: 'MMWR: vaccination coverage among health care personnel, 2022-23',
        href: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7245a5.htm',
      },
      {
        label: 'MMWR: declines in influenza vaccination coverage, 2017-2023',
        href: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7245a6.htm',
      },
    ],
  },
  {
    title: 'Data Operations Analyst II, contractor',
    company: 'Teladoc Health',
    period: 'Oct 2022 to May 2023',
    place: 'Remote, USA',
    bullets: [
      'Recovered billing accuracy across 5 enterprise partnerships covering 50,000+ members by reconciling cross-system data in SQL after a membership migration, reducing data loss from 2.3% to 0.06%.',
      'Designed and automated end-to-end inbound file management for 4 enterprise clients in a single Jenkins job: SFTP ingestion to S3, Python response-file generation, encryption, validation, error reporting and outbound delivery.',
      'Automated recurring data operations and monitoring checks across 5 data feeds in SQL and Python, cutting the team’s weekly manual hours by 30%.',
    ],
  },
  {
    title: 'Data Analyst, contractor',
    company: 'Centers for Disease Control and Prevention',
    period: 'Dec 2020 to Sep 2022',
    place: 'Remote, USA',
    bullets: [
      'Developed COVID-19 surveillance analytics in SAS and SQL across 16,000+ long-term care facilities, delivering 3 weekly reports to White House and federal leadership.',
      'Analyzed COVID-19 breakthrough cases across a vaccinated population of 1M+ in SAS, calculating observed-to-expected ratios against a 70% vaccine effectiveness benchmark.',
      'Redesigned the data quality framework so weekly facility-level COVID-19 line lists generated automatically, cutting analyst time from 5 hours to 1 per cycle.',
      'Automated the NHSN COVID-19 Power BI dashboard refresh through Azure Data Lake, cutting report delivery from 6 hours to 2.',
    ],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    period: 'Aug 2014 to May 2018',
    place: 'Chennai, India. Clients: UPS, Cigna, HealthNet',
    bullets: [
      'Reduced UPS delivery errors by 15% with SQL data integrity and validation checks in the AMS database.',
      'Cut claims-processing defect-fix costs by 18% by catching defects in the requirements phase.',
    ],
  },
];

export const education = [
  {
    degree: 'M.S., Information Management',
    school: 'University of Illinois at Urbana-Champaign',
    year: 'May 2020',
  },
  {
    degree: 'B.E., Electronics and Communication',
    school: 'Sathyabama University, Chennai, India',
    year: 'May 2014',
  },
];
