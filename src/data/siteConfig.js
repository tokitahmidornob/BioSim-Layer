/**
 * BioSimLayer Site Configuration
 * Single source of truth for global configuration, team, and investor terms.
 * Values marked 'TODO_CONFIRM' are unconfirmed and flagged by npm run check:todos.
 */

export const siteConfig = {
  BRAND_NAME: 'BioSimLayer',
  TAGLINE: 'AI-Powered Biosimulation for Drug Discovery',
  statusAsOfDate: '20 Oct 2026',
  
  // Contact & Social
  CONTACT_EMAIL: 'TODO_CONFIRM',
  CONTACT_PHONE: 'TODO_CONFIRM',
  WEBSITE_URL: 'TODO_CONFIRM',
  LINKEDIN_URL: 'TODO_CONFIRM',
  LOCATION: 'Dhaka, Bangladesh',

  // Feature flags
  showCompetitorPrices: false, // Default false per non-negotiable claims policy

  // Confirmed partners (must remain empty until legally signed)
  CONFIRMED_PARTNERS: [],

  // Founders & Core Team
  TEAM: [
    {
      id: 'toki-tahmid-ornob',
      name: 'Toki Tahmid Ornob',
      initials: 'TO',
      role: 'TODO_CONFIRM', // e.g. Co-Founder & Lead Engineer (to be confirmed)
      bio: 'TODO_CONFIRM',
      photo: 'TODO_CONFIRM',
      confirmedNameSpelling: true
    },
    {
      id: 'tabasum-aktar',
      name: 'Tabasum Aktar',
      initials: 'TA',
      role: 'TODO_CONFIRM', // e.g. Co-Founder & Scientific Lead (to be confirmed)
      bio: 'TODO_CONFIRM',
      photo: 'TODO_CONFIRM',
      confirmedNameSpelling: true
    }
  ],

  // Advisors (empty until formal agreements in place)
  ADVISORS: [],

  // Investor Ask & Terms (Stage 1 Seed Sprint)
  ASK: {
    amount: '$45,000',
    phase: 'Stage 1 Sprint (4 Months)',
    instrument: 'TODO_CONFIRM', // e.g. SAFE / Convertible Note / Priced Round
    equity: 'TODO_CONFIRM',     // e.g. 5% - 8% (must not be invented)
    valuation: 'TODO_CONFIRM',  // e.g. Cap / Post-money (must not be invented)
    stagedTotal: '$415,000 over 3 tranches (18 months)'
  }
};
