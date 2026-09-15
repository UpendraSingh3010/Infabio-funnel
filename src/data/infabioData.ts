import { SystemStep, WhatWeHandleModule, BenefitItem } from '../types';

export const HERO_CONTENT = {
  badge: "INFABIO • FOUNDER-LED MARKETING DEFENSE",
  titlePrimary: "Build a Founder Brand",
  titleSecondary: "People Trust Before They Buy",
  paragraphs: [
    "Your company has a brand.",
    "But today, your founder needs one too.",
    "People don’t just follow companies anymore. They follow the people behind them.",
    "Customers want to know who is building the business. Investors want to understand the founder’s thinking. Talent wants to know who they are going to work with. And the market wants to know why they should listen to you.",
    "INFABIO helps founders build visibility, authority and demand through strategic founder-led marketing."
  ],
  primaryCta: "BUILD MY FOUNDER BRAND",
  secondaryCta: "EXPLORE THE SYSTEM"
};

export const JUDGED_POINTS = [
  {
    step: "01",
    action: "When someone hears about you or your company, they search.",
    subtext: "Before checking a demo or proposal, your name is entered into search and LinkedIn.",
    icon: "Search"
  },
  {
    step: "02",
    action: "They check your LinkedIn.",
    subtext: "Your headline, recent activity, and featured items are audited in 8 seconds.",
    icon: "UserCheck"
  },
  {
    step: "03",
    action: "They look at your content.",
    subtext: "Are you contributing substantive thought, or is your feed an abandoned wasteland?",
    icon: "FileText"
  },
  {
    step: "04",
    action: "They see whether you have a point of view.",
    subtext: "Do you have clear category thesis, or do you sound like every generic agency/SaaS?",
    icon: "Compass"
  },
  {
    step: "05",
    action: "They decide whether you feel credible.",
    subtext: "Perceived authority directly dictates your deal sizes and closing velocity.",
    icon: "ShieldCheck"
  },
  {
    step: "06",
    action: "And often, they make that decision before ever speaking to you.",
    subtext: "If your digital presence looks inactive, inconsistent or generic, you’re leaving trust on the table.",
    icon: "AlertCircle"
  }
];

export const ANTI_INFLUENCER_MYTHS = [
  {
    myth: "You don’t need to dance on trends.",
    reality: "Zero gimmicks. We focus strictly on your hard-won commercial insights and intellectual capital."
  },
  {
    myth: "You don’t need to post motivational quotes every morning.",
    reality: "No hollow fluff. Every dispatch demonstrates problem-solving ability in your category."
  },
  {
    myth: "And you definitely don’t need to turn your life into content.",
    reality: "Your private life stays private. We build your profile as an authoritative industry operator."
  }
];

export const FOUNDER_KNOWLEDGE_PILLARS = [
  { label: "Your Experience", desc: "Years of battle scars and customer breakthroughs" },
  { label: "Your Perspective", desc: "Why the current market is doing things wrong" },
  { label: "Your Story", desc: "The catalyst behind why you built your solution" },
  { label: "Your Expertise", desc: "Nuanced domain mastery nobody else articulates" },
  { label: "Your Company", desc: "The strategic engine and case studies that prove it" },
  { label: "Your Category", desc: "Where the industry is moving over the next 3–5 years" },
  { label: "Your Beliefs", desc: "Uncompromising principles that dictate your decisions" },
  { label: "Your Lessons", desc: "Failed experiments that taught you what actually scales" }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "authority",
    title: "Build Authority",
    description: "Position you as someone worth listening to in your industry.",
    metricLabel: "Search Authority",
    metricValue: "Top 1%",
    quote: "People don't buy from logos; they buy from leaders who articulate the future."
  },
  {
    id: "trust",
    title: "Create Trust",
    description: "Let prospects understand how you think before they ever speak to your team.",
    metricLabel: "Pre-Call Trust",
    metricValue: "94%",
    quote: "Calls shift from qualification interrogation to partnership discussions."
  },
  {
    id: "inbound",
    title: "Generate Inbound Opportunities",
    description: "Turn content into conversations, leads, collaborations and partnerships.",
    metricLabel: "Inbound Pipeline",
    metricValue: "3.8x",
    quote: "Enterprise prospects DM you directly without cold outreach resistance."
  },
  {
    id: "brand",
    title: "Strengthen Your Company Brand",
    description: "A visible founder can make the company feel more credible, human and memorable.",
    metricLabel: "Brand Recall",
    metricValue: "+240%",
    quote: "A human voice cuts through the sea of indistinguishable B2B software."
  },
  {
    id: "talent",
    title: "Attract Better Talent",
    description: "Strong people often want to work with strong leaders.",
    metricLabel: "A-Player Inbound",
    metricValue: "Top Tier",
    quote: "Exceptional operators seek visionaries who stand publicly behind their mission."
  },
  {
    id: "investors",
    title: "Improve Investor & Partner Perception",
    description: "Your digital presence becomes an extension of your credibility.",
    metricLabel: "Deal Leverage",
    metricValue: "High Conviction",
    quote: "VCs and strategic partners track your progress long before pitch meetings."
  }
];

export const CONTENT_ENGINE_STEPS = [
  {
    phase: "You think.",
    action: "Brain dump & insight capture",
    detail: "You speak for 30 minutes a week or drop quick voice memos on WhatsApp/Slack.",
    owner: "Founder (30 mins/wk)",
    icon: "Brain"
  },
  {
    phase: "We capture.",
    action: "Deep extraction & categorization",
    detail: "Our editorial directors extract your contrarian theses, case studies, and proprietary framework.",
    owner: "INFABIO Lead Strategist",
    icon: "Mic"
  },
  {
    phase: "We shape.",
    action: "High-craft editorial & scripting",
    detail: "We write sharp, punchy LinkedIn posts, video scripts, and visual carousels in your exact voice.",
    owner: "INFABIO Creative Team",
    icon: "PenTool"
  },
  {
    phase: "We distribute.",
    action: "Multi-channel publishing schedule",
    detail: "Coordinated distribution across LinkedIn, newsletters, video feeds, and strategic communities.",
    owner: "INFABIO Operations",
    icon: "Send"
  },
  {
    phase: "We optimise.",
    action: "Data analysis & funnel conversion",
    detail: "Weekly engagement audits, comment routing, inbound lead tracking, and narrative iteration.",
    owner: "INFABIO Growth Analytics",
    icon: "TrendingUp"
  }
];

export const WHAT_WE_HANDLE: WhatWeHandleModule[] = [
  {
    id: "positioning",
    title: "Founder Positioning",
    tagline: "We identify what you should be known for.",
    icon: "Crosshair",
    points: [
      "Your category",
      "Your expertise",
      "Your narrative",
      "Your unique point of view",
      "Your brand voice",
      "Your content pillars"
    ]
  },
  {
    id: "strategy",
    title: "Content Strategy",
    tagline: "We create a content plan aligned with your business goals.",
    icon: "Target",
    points: [
      "Not random posting",
      "Authority & Trust building",
      "Targeted Reach & Engagement",
      "Lead generation & pipeline",
      "Talent recruitment magnetism",
      "Corporate Brand building"
    ]
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership Content",
    tagline: "We turn your ideas into commanding written assets.",
    icon: "BookOpen",
    points: [
      "LinkedIn posts & essays",
      "Founder stories & origin milestones",
      "Opinion-led & contrarian takes",
      "Industry insights & trend teardowns",
      "Lessons from experience",
      "Business breakdowns & case studies"
    ]
  },
  {
    id: "video-content",
    title: "Video Content",
    tagline: "Founder-led videos that feel natural, sharp and credible.",
    icon: "Video",
    points: [
      "Short-form reels & shorts",
      "Talking-head executive videos",
      "Founder interviews & deep dives",
      "Podcast clips with viral hooks",
      "Educational explainers",
      "Behind-the-scenes building updates"
    ]
  },
  {
    id: "brand-design",
    title: "Personal Brand Design",
    tagline: "Your founder brand should look as strong as your thinking.",
    icon: "Palette",
    points: [
      "Signature typography & color palette",
      "High-converting carousel slides",
      "Video covers & cinematic thumbnails",
      "Founder quote graphics",
      "Executive whitepapers & industry reports",
      "Profile banner & aesthetic overhaul"
    ]
  },
  {
    id: "distribution",
    title: "Distribution & Growth",
    tagline: "Great content means little if the right people never see it.",
    icon: "Share2",
    points: [
      "Platform algorithmic optimization",
      "Strategic engagement & networking loops",
      "Paid amplification for proven winners",
      "Executive newsletter syndication",
      "Inbound DM & comment conversion systems",
      "Continuous performance reporting"
    ]
  }
];

export const SYSTEM_STEPS: SystemStep[] = [
  {
    number: "01",
    title: "Position",
    description: "We understand you, your business, your audience and what you should become known for.",
    badge: "Foundation",
    deliverables: ["Category POV Document", "Founder Narrative Guide", "Voice & Tone Matrix"]
  },
  {
    number: "02",
    title: "Extract",
    description: "We capture your ideas through structured conversations, notes, voice inputs and existing knowledge.",
    badge: "Frictionless",
    deliverables: ["30-Min Weekly Briefing", "Voice Memo Inbox", "IP & Story Vault"]
  },
  {
    number: "03",
    title: "Create",
    description: "Our team converts those ideas into high-quality content across formats.",
    badge: "Execution",
    deliverables: ["Written Long & Short Form", "Visual Carousels", "Short-Form Video Edits"]
  },
  {
    number: "04",
    title: "Publish",
    description: "Content is distributed consistently across the platforms that matter.",
    badge: "Consistency",
    deliverables: ["Calendar Scheduling", "Optimal Peak Hour Posting", "Formatting Optimization"]
  },
  {
    number: "05",
    title: "Amplify",
    description: "We identify winning ideas and increase their reach through distribution and paid amplification where required.",
    badge: "Scale",
    deliverables: ["High-Performer Repurposing", "Partner Tagging", "Targeted Paid Boosts"]
  },
  {
    number: "06",
    title: "Convert",
    description: "We connect your founder brand to business outcomes through strategic CTAs, lead magnets, inbound systems and funnels.",
    badge: "Revenue",
    deliverables: ["Inbound Lead Captures", "Executive Lead Magnets", "Direct Deal Flow Systems"]
  }
];

export const MULTIPLIER_ASSETS = [
  { name: "Founder Story", count: 1, icon: "Award", desc: "Flagship narrative positioning your market origin" },
  { name: "LinkedIn Posts", count: 3, icon: "Linkedin", desc: "High-engagement opinion & category breakdowns" },
  { name: "Short-Form Videos", count: 2, icon: "Video", desc: "Sharp talking-head reels with captions & hooks" },
  { name: "Visual Carousel", count: 1, icon: "Layers", desc: "Multi-slide framework save-worthy asset" },
  { name: "Thought-Leadership Snippets", count: 5, icon: "Quote", desc: "Bite-sized aphorisms for multi-channel reuse" },
  { name: "Strategic Hooks", count: 8, icon: "Zap", desc: "Tested headline variants for maximum clickthrough" },
  { name: "Sales-Enablement Content", count: 2, icon: "Briefcase", desc: "Objection-handling posts your sales team can link to" },
  { name: "Newsletter Ideas", count: 2, icon: "Mail", desc: "Editorial angles for your company newsletter" },
  { name: "Website Insights", count: 1, icon: "Globe", desc: "Authoritative perspective snippet for landing pages" },
  { name: "Ad Creatives", count: 2, icon: "Sparkles", desc: "Founder-led authentic ad variants that outperform generic copy" }
];

export const TARGET_PERSONAS = [
  "Startup Founders",
  "Agency Founders",
  "SaaS Founders",
  "D2C Founders",
  "Consultants",
  "Business Owners",
  "CXOs",
  "Second-generation Entrepreneurs",
  "Industry Experts",
  "Professionals building category authority"
];

export const ESPECIALLY_VALUABLE_CONDITIONS = [
  "You have strong experience but almost no online presence.",
  "Your competitors’ founders are becoming more visible.",
  "You want more inbound opportunities.",
  "You are entering a new market.",
  "You are raising capital.",
  "You are hiring aggressively.",
  "You want to become a category voice.",
  "You want customers to trust the people behind your company.",
  "You know you should post — but never have the time."
];

export const CATEGORY_VOICE_TRIGGERS = [
  "A solution.",
  "A partner.",
  "A vendor.",
  "An expert.",
  "An employer.",
  "An investment opportunity.",
  "Or simply an opinion they trust."
];
