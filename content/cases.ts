export type Case = {
  id: string;
  when: string;
  title: string;
  /** What the system said, shown after "System reported:" */
  reported: string;
  /** One-sentence summary. The middle part is the underlined finding. */
  summary: { before: string; finding: string; after: string };
  detail: { label: string; text: string }[];
};

export const cases: Case[] = [
  {
    id: 'case-join',
    when: 'CDC, 2025 to 2026',
    title: 'The join that quietly dropped organizations',
    reported: 'join completed, 0 errors',
    summary: {
      before: 'An inner join ',
      finding: 'excluded every record with a null facility ID',
      after: '. Reconciling 1.5M+ records against the new platform surfaced it.',
    },
    detail: [
      {
        label: 'What the system said',
        text: 'The legacy SAS job ran clean every week. No errors, no warnings, and totals that looked plausible.',
      },
      {
        label: 'How I found it',
        text: 'CDC was moving long-term care COVID-19 vaccination reporting from legacy SAS output to the 1CDP platform. I started a record-level reconciliation of the two systems and directed the weekly comparisons as the work grew.',
      },
      {
        label: 'Root cause',
        text: 'An inner join between the facility and organization tables dropped any record with a null facility ID. An inner join does that by design, which is why nothing flagged it. Root-caused with the database team, who changed the join.',
      },
      {
        label: 'Result',
        text: 'Both systems reconciled across 1.5M+ records, taking a 10 to 15% weekly error rate to zero. A second gap turned out to be correct behaviour: the new platform only counts complete Monday to Sunday weeks.',
      },
    ],
  },
  {
    id: 'case-migration',
    when: 'Teladoc Health, 2022 to 2023',
    title: 'The migration that left billing codes behind',
    reported: 'migration complete',
    summary: {
      before: 'Old month against new month did not tie. Restoring the codes ',
      finding: 'cut billing loss from 2.3% to 0.06%',
      after: '.',
    },
    detail: [
      {
        label: 'What the system said',
        text: 'The membership table restructure finished and the migration was signed off. Nobody had reported a problem.',
      },
      {
        label: 'How I found it',
        text: 'After cutover, unprompted, I ran the first month on the new structure against the last month on the old one to confirm the migration was clean. The totals did not tie.',
      },
      {
        label: 'Root cause',
        text: 'Members had moved to the new tables but some billing codes had not. Anything tied to an unmigrated code was never picked up for billing, so it surfaced as loss in reconciliation, not as an error anywhere in the pipeline.',
      },
      {
        label: 'Result',
        text: 'Restoring the codes cut billing data loss from 2.3% to 0.06% across 5 enterprise partnerships and 50,000+ members. The remaining 0.06% is deliberate: encounters that span several billing codes go to manual review.',
      },
    ],
  },
  {
    id: 'case-upload',
    when: 'CDC, 2025',
    title: 'The upload that nobody rejected',
    reported: 'upload accepted',
    summary: {
      before: 'A single-facility template was used for a group submission. ',
      finding: 'Dozens of facilities had no data on file',
      after: '.',
    },
    detail: [
      {
        label: 'What the system said',
        text: 'A multi-facility group uploaded its health care personnel influenza vaccination data and the upload went through.',
      },
      {
        label: 'How I found it',
        text: 'Near a federal reporting deadline the group flagged a few facilities as missing. With a colleague I checked the whole group facility by facility, in both the reporting system and the internal data store, instead of only the ones reported.',
      },
      {
        label: 'Root cause',
        text: 'The group had used the single-facility file template for a group upload. The system accepted the file without a clear error, so only part of the data loaded.',
      },
      {
        label: 'Result',
        text: 'Dozens of facilities were confirmed to have no data on file. A controlled test upload reproduced the partial load, and the reproduction steps went to the development team.',
      },
    ],
  },
];

export const casesClosing =
  'Any time a system gets replaced, I reconcile the new one against the old one before anyone trusts it.';
