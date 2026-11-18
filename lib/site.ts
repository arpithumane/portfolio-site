// All personal content for the site lives here.
// Anything in [BRACKETS] is a placeholder still to be filled in.

export const site = {
  name: 'Arpit Humane',
  firstName: 'Arpit',
  lastName: 'Humane',
  role: 'Data Engineer',
  location: 'Tampa, FL',
  timeZone: 'America/New_York',
  url: 'https://arpithumane.com',
  email: 'cygnus.element@gmail.com',
  resume: '/resume.pdf',
  // Leave empty until ready; the contact section shows them as "soon".
  github: '',
  linkedin: '',
  currently:
    'building a Databricks lakehouse + multi-agent AI assistant for global trading P&L',
  yearsExperience: 10,
};

export const skills = [
  'Databricks',
  'Delta Lake',
  'PySpark',
  'SQL',
  'Apache Iceberg',
  'Trino',
  'Unity Catalog',
  'Ab Initio',
  'RAG + agents',
  'V60',
  'Espresso',
  '225 lb bench',
];

export interface Project {
  title: string;
  stack: string;
  period: string;
  org: string;
  summary: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: 'Trading P&L Lakehouse',
    stack: 'Databricks · Delta · Iceberg · Trino',
    period: '2022–now',
    org: 'LTIMindtree · Specialist, Data Engineer',
    summary:
      'A Databricks lakehouse for global trade, trade-lot and ledger data that powers profit & loss reporting.',
    highlights: [
      'Medallion (bronze/silver/gold) Delta Lake layers built with PySpark and SQL',
      'Iceberg tables queried through Trino for engine interoperability',
      'Ingestion + transformation pipelines with data-quality checks and trade/lot balance reconciliation against prod',
      'Orchestrated with Databricks Workflows, governed with Unity Catalog access controls',
      'Spark + Delta tuning for performance and cost: partitioning, file compaction, cluster sizing',
    ],
  },
  {
    title: 'AI Assistant for P&L Reconciliation',
    stack: 'Multi-agent · Tool calling · RAG',
    period: '2022–now',
    org: 'LTIMindtree',
    summary:
      'A multi-agent assistant on Databricks so business users can query balances and reconcile trades in plain English.',
    highlights: [
      'Agents call tools against lakehouse data to answer balance and reconciliation questions',
      'Retrieval-augmented generation over P&L documentation',
      'Built for business users who previously needed an engineer to pull the numbers',
    ],
  },
  {
    title: 'Tibco → Camel on OpenShift',
    stack: 'Java · Apache Camel · Docker · OpenShift',
    period: '2022–now',
    org: 'LTIMindtree',
    summary:
      'Migrated real-time trade messaging from Tibco BW to Apache Camel, deployed as containers.',
    highlights: [
      'Re-implemented Tibco BW integrations as Apache Camel routes',
      'Built the CI/CD pipeline for containerized (Docker) deployment on Red Hat OpenShift',
      'Migrated legacy Unix scripts into maintained Ab Initio batch + continuous flows',
    ],
  },
  {
    title: 'Mainframe → Real-Time Ab Initio',
    stack: 'Continuous flows · Metaprogramming',
    period: '2019–22',
    org: 'Exusia · Consultant',
    summary:
      'Moved a legacy mainframe system onto Ab Initio, delivering data to clients in real time.',
    highlights: [
      'Designed continuous services for real-time data delivery',
      'Generic metaprogramming to stage mapped data automatically',
      'Automated integration/regression testing and reporting modules, with user guides',
      'Mentored new joiners and ran knowledge-transfer training for client developers',
    ],
  },
  {
    title: 'Self-Service ETL Framework',
    stack: 'Express>It · SCD2 · S3',
    period: '2018–19',
    org: 'Exusia · Senior Analyst',
    summary:
      'A framework that lets business users build ETL processes from a friendly Express>It UI.',
    highlights: [
      'Added SCD Type II support',
      'Generic graphs + templates for new databases and Amazon S3',
      'Python scripts to automate configuration generation',
      'Trained employees on the framework in theory + lab sessions',
    ],
  },
];

export const career = [
  { year: '2016', role: 'analyst · exusia' },
  { year: '2018', role: 'senior analyst · exusia' },
  { year: '2019', role: 'consultant · exusia' },
  { year: '2022', role: 'specialist, data engineer · ltimindtree' },
];

export const stackDirs = ['databricks', 'pyspark', 'sql', 'iceberg', 'trino', 'ab-initio', 'aws'];

export const water = {
  since: '[MONTH YEAR]',
  hardestPart: '[A LINE ON THE HARDEST PART]',
  stages: [
    { label: 'source', name: 'City main', kind: 'source' },
    { label: 'stage 1', name: '[FILTER TYPE]', kind: 'stage' },
    { label: 'stage 2', name: '[FILTER TYPE]', kind: 'stage' },
    { label: 'stage 3', name: '[FILTER TYPE]', kind: 'stage' },
    { label: 'transform', name: 'Softener', kind: 'stage' },
    { label: 'sink', name: 'Every tap + the espresso machine', kind: 'sink' },
  ] as const,
  photos: ['[BEFORE PHOTO]', '[INSTALL IN PROGRESS]', '[FINISHED SETUP]'],
};

export const coffee = {
  brews: [
    { method: 'espresso', dose: '[__] g', yield: '[__] g', time: '[__] s' },
    { method: 'flat_white', dose: '[__] g', yield: '[__] ml milk', time: '[__] s' },
    { method: 'v60', dose: '[__] g', yield: '[__] g water', time: '[_:__]' },
  ],
  beans: '[ROASTER / ORIGIN]',
  grinder: '[MODEL]',
  machine: '[MODEL]',
};

export const training = {
  benchLb: 225,
  bodyweightLb: 165,
  fiveKUnderMin: 25,
  longestRunKm: 15,
  nextGoal: '[NEXT GOAL, e.g. half marathon or 250 bench]',
};
