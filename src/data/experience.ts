// Work history, mirrored from LinkedIn (linkedin.com/in/francis-libutti). Most recent first.

export interface Role {
  title: string;
  dates: string;
  points?: string[];
}

export interface Job {
  company: string;
  type?: string;
  location?: string;
  current?: boolean;
  roles: Role[];
}

export const EXPERIENCE: Job[] = [
  {
    company: 'GatherUp',
    type: 'Full-time',
    location: 'Remote',
    current: true,
    roles: [{ title: 'Growth Engineer', dates: 'Aug 2026 – Present' }],
  },
  {
    company: 'Handshake',
    type: 'Contract, via Bay1 Consulting Group',
    location: 'Remote',
    current: true,
    roles: [
      {
        title: 'AI Trainer',
        dates: 'Jul 2026 – Present',
        points: [
          'Develop and evaluate domain-specific prompts to assess LLM performance.',
          'Review LLM outputs for scientific accuracy, clarity and depth.',
        ],
      },
    ],
  },
  {
    company: 'Bay1 Consulting Group',
    type: 'Founder',
    location: 'New York, NY',
    current: true,
    roles: [
      {
        title: 'Lead Technical Project Manager & AI Consultant',
        dates: 'Jun 2022 – Present',
        points: [
          'Multi-tenant AI operations system (Claude + MCP) with per-client credential isolation.',
          'Client sites on Shopify, WordPress and Next.js with full SEO, GEO and AEO work.',
          'Email campaigns with an 87% lift in click-through rate; $2M+ in grant portfolios managed.',
        ],
      },
    ],
  },
  {
    company: 'SGLAB Inc. (G·GRIP)',
    location: 'Seoul / New York',
    roles: [
      {
        title: 'USA Marketing Lead',
        dates: 'Jan 2026 – Apr 2026',
        points: [
          'Shipped a Gemini 2.5 Pro + GPT-4 support chatbot and a Python LLM persona-extraction pipeline.',
          'Built a 5-module ERP on Google Apps Script with live Shopify and HubSpot integrations.',
          'Migrated 6+ product lines to Shopify and owned the US go-to-market.',
        ],
      },
      {
        title: 'Marketing Associate',
        dates: 'Nov 2025 – Jan 2026',
        points: [
          'Built the HubSpot CRM from zero with automated ticket pipelines.',
          'Automated 5 tools (Asana, Notion, Slack, Calendar, social) with Zapier and Python.',
        ],
      },
      {
        title: 'Program Coordinator',
        dates: 'Sep 2025 – Nov 2025',
        points: ['Built a standalone Python logistics scanner for outbound package verification.'],
      },
      { title: 'Business Development & Market Research Analyst (intern)', dates: 'Jul 2025 – Aug 2025' },
    ],
  },
  {
    company: 'Elpis Labs',
    type: 'Internship',
    location: 'New York, NY',
    roles: [
      {
        title: 'Business Development & Market Research Analyst',
        dates: 'Jul 2025 – Sep 2025',
        points: ['Advised international startups on US market entry through a government-backed accelerator.'],
      },
    ],
  },
  {
    company: 'CareerSuite.Ai',
    type: 'Founder',
    location: 'Remote',
    roles: [
      {
        title: 'Founder & Full Stack Engineer',
        dates: 'Feb 2025 – Sep 2025',
        points: [
          'Solo-built a serverless AI job-application platform: Chrome extension, Apps Script backend, REST API.',
          'Multi-LLM (Gemini + Groq) pipeline; 95% less manual data entry; 6 releases to public beta.',
        ],
      },
    ],
  },
  {
    company: 'Circle of Rainbow Sisters Seeking Spiritual & Wellness Connection',
    type: 'Part-time',
    location: 'West Orange, NJ',
    roles: [
      {
        title: 'Lead Project Manager for Grant Writing',
        dates: 'Dec 2023 – Apr 2025',
        points: ['SQL forecasting models and BI dashboards; Apps Script automation cut manual reporting 35%.'],
      },
    ],
  },
  {
    company: 'NSF I-Corps Hub Northeast',
    roles: [
      {
        title: 'Co-Entrepreneurial Lead, Customer Discovery',
        dates: 'Sep 2020 – Aug 2024',
        points: ['23+ customer interviews and a pivot that earned an NSF "go" recommendation.'],
      },
    ],
  },
  {
    company: 'Rutgers Business School Blockchain Hub',
    roles: [{ title: 'Vice President of External Relations', dates: 'Sep 2020 – Aug 2024' }],
  },
];
