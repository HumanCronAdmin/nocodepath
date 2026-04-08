const TOOLS = [
  {
    name: "Webflow",
    category: "Build a Website",
    description: "Visual web design platform with CMS, animations, and hosting built in.",
    pricing: "Free plan available. Paid from $14/mo.",
    freeTier: true,
    bestFor: "Designers who want pixel-perfect sites without code",
    url: "https://webflow.com",
    complexity: "Intermediate"
  },
  {
    name: "Carrd",
    category: "Build a Website",
    description: "Simple one-page site builder for landing pages, portfolios, and forms.",
    pricing: "Free plan available. Pro from $9/yr.",
    freeTier: true,
    bestFor: "Quick landing pages and personal sites",
    url: "https://carrd.co",
    complexity: "Beginner"
  },
  {
    name: "Framer",
    category: "Build a Website",
    description: "Design and publish responsive websites with real-time collaboration.",
    pricing: "Free plan available. Paid from $5/mo.",
    freeTier: true,
    bestFor: "Interactive marketing sites and portfolios",
    url: "https://www.framer.com",
    complexity: "Intermediate"
  },
  {
    name: "Typedream",
    category: "Build a Website",
    description: "Notion-like editor for building clean, modern websites fast.",
    pricing: "Free plan available. Paid from $15/mo.",
    freeTier: true,
    bestFor: "Non-designers who want a beautiful site quickly",
    url: "https://typedream.com",
    complexity: "Beginner"
  },
  {
    name: "Bubble",
    category: "Build a Web App",
    description: "Full-stack visual programming platform for building complex web applications.",
    pricing: "Free plan available. Paid from $29/mo.",
    freeTier: true,
    bestFor: "Building SaaS products and marketplaces without code",
    url: "https://bubble.io",
    complexity: "Advanced"
  },
  {
    name: "Softr",
    category: "Build a Web App",
    description: "Turn Airtable or Google Sheets data into web apps, portals, and internal tools.",
    pricing: "Free plan available. Paid from $49/mo.",
    freeTier: true,
    bestFor: "Client portals and internal tools powered by Airtable",
    url: "https://www.softr.io",
    complexity: "Beginner"
  },
  {
    name: "Glide",
    category: "Build a Web App",
    description: "Build apps from Google Sheets or Airtable with a drag-and-drop interface.",
    pricing: "Free plan available. Paid from $25/mo.",
    freeTier: true,
    bestFor: "Turning spreadsheets into functional apps fast",
    url: "https://www.glideapps.com",
    complexity: "Beginner"
  },
  {
    name: "Adalo",
    category: "Build a Mobile App",
    description: "Drag-and-drop mobile and web app builder with native publishing.",
    pricing: "Free plan available. Paid from $45/mo.",
    freeTier: true,
    bestFor: "Publishing native iOS and Android apps without code",
    url: "https://www.adalo.com",
    complexity: "Intermediate"
  },
  {
    name: "FlutterFlow",
    category: "Build a Mobile App",
    description: "Visual builder for Flutter apps with full code export.",
    pricing: "Free plan available. Paid from $30/mo.",
    freeTier: true,
    bestFor: "Building polished mobile apps with code export option",
    url: "https://flutterflow.io",
    complexity: "Intermediate"
  },
  {
    name: "Thunkable",
    category: "Build a Mobile App",
    description: "Cross-platform mobile app builder with drag-and-drop blocks.",
    pricing: "Free plan available. Paid from $13/mo.",
    freeTier: true,
    bestFor: "Beginners building their first mobile app",
    url: "https://thunkable.com",
    complexity: "Beginner"
  },
  {
    name: "Zapier",
    category: "Automate Workflows",
    description: "Connect 6,000+ apps and automate workflows with triggers and actions.",
    pricing: "Free plan (100 tasks/mo). Paid from $19.99/mo.",
    freeTier: true,
    bestFor: "Connecting apps and automating repetitive tasks",
    url: "https://zapier.com",
    complexity: "Beginner"
  },
  {
    name: "Make",
    category: "Automate Workflows",
    description: "Visual automation platform (formerly Integromat) for complex workflows.",
    pricing: "Free plan (1,000 ops/mo). Paid from $9/mo.",
    freeTier: true,
    bestFor: "Complex multi-step automations with branching logic",
    url: "https://www.make.com",
    complexity: "Intermediate"
  },
  {
    name: "n8n",
    category: "Automate Workflows",
    description: "Open-source workflow automation with self-hosting option and code flexibility.",
    pricing: "Free (self-hosted). Cloud from $20/mo.",
    freeTier: true,
    bestFor: "Technical users who want full control over automations",
    url: "https://n8n.io",
    complexity: "Advanced"
  },
  {
    name: "Airtable",
    category: "Build a Database/Backend",
    description: "Spreadsheet-database hybrid with views, automations, and an API.",
    pricing: "Free plan available. Paid from $20/seat/mo.",
    freeTier: true,
    bestFor: "Organizing data with a spreadsheet-like interface",
    url: "https://airtable.com",
    complexity: "Beginner"
  },
  {
    name: "Supabase",
    category: "Build a Database/Backend",
    description: "Open-source Firebase alternative with Postgres, auth, and real-time features.",
    pricing: "Free plan available. Paid from $25/mo.",
    freeTier: true,
    bestFor: "Developers who want a scalable backend with SQL",
    url: "https://supabase.com",
    complexity: "Advanced"
  },
  {
    name: "Xano",
    category: "Build a Database/Backend",
    description: "No-code backend with API builder, database, and business logic.",
    pricing: "Free plan available. Paid from $85/mo.",
    freeTier: true,
    bestFor: "Building a production-ready API without writing code",
    url: "https://www.xano.com",
    complexity: "Intermediate"
  },
  {
    name: "Shopify",
    category: "Build an Online Store",
    description: "All-in-one e-commerce platform for online stores and point-of-sale.",
    pricing: "From $39/mo (3-day free trial).",
    freeTier: false,
    bestFor: "Launching a professional online store with payments",
    url: "https://www.shopify.com",
    complexity: "Beginner"
  },
  {
    name: "Gumroad",
    category: "Build an Online Store",
    description: "Sell digital products, memberships, and courses with zero setup.",
    pricing: "Free to start. 10% transaction fee.",
    freeTier: true,
    bestFor: "Creators selling digital products and downloads",
    url: "https://gumroad.com",
    complexity: "Beginner"
  },
  {
    name: "Lemon Squeezy",
    category: "Build an Online Store",
    description: "All-in-one platform for selling digital products with built-in tax handling.",
    pricing: "Free to start. 5% + 50c per transaction.",
    freeTier: true,
    bestFor: "SaaS and digital product sales with global tax compliance",
    url: "https://www.lemonsqueezy.com",
    complexity: "Beginner"
  },
  {
    name: "Tally",
    category: "Build Forms/Surveys",
    description: "Free form builder with unlimited forms, responses, and conditional logic.",
    pricing: "Free plan (unlimited). Pro from $29/mo.",
    freeTier: true,
    bestFor: "Beautiful forms without limits on the free plan",
    url: "https://tally.so",
    complexity: "Beginner"
  },
  {
    name: "Typeform",
    category: "Build Forms/Surveys",
    description: "Conversational forms and surveys with a polished, one-question-at-a-time UX.",
    pricing: "Free plan available. Paid from $25/mo.",
    freeTier: true,
    bestFor: "Engaging conversational surveys and lead capture",
    url: "https://www.typeform.com",
    complexity: "Beginner"
  },
  {
    name: "Jotform",
    category: "Build Forms/Surveys",
    description: "Drag-and-drop form builder with 10,000+ templates and integrations.",
    pricing: "Free plan (5 forms). Paid from $34/mo.",
    freeTier: true,
    bestFor: "Complex forms with payment collection and approvals",
    url: "https://www.jotform.com",
    complexity: "Beginner"
  }
];
