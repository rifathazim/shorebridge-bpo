export interface Svc {
  slug: string;
  name: string;
  h1: string;
  title: string;
  desc: string;
  pitch: string;
  answer: string;
  included: string[];
  price: string;
  faq: { q: string; a: string }[];
}

export const SERVICES: Svc[] = [
  {
    slug: "call-center",
    name: "Call Center & Customer Support",
    h1: "Outsourced Call Center & Customer Support",
    title: "Outsourced Call Center in Bangladesh | ShoreBridge BPO",
    desc: "Dedicated customer support agents in Dhaka from $6–9/hour. US-hours voice, chat and email coverage at about 60% below US cost.",
    pitch: "Voice, chat, and email teams that answer during US business hours.",
    answer:
      "ShoreBridge builds dedicated customer support teams in Dhaka that answer your calls, chats, and emails during US business hours. A trained agent typically costs $6–9 per hour — about 60% less than a US hire. [PLACEHOLDER: confirm rates]",
    included: [
      "Inbound and outbound voice support",
      "Live chat and email support",
      "Help-desk ticketing (Zendesk, Freshdesk, or yours)",
      "Quality monitoring and call recording",
      "A dedicated team lead for every account",
    ],
    price: "$6–9 per agent per hour",
    faq: [
      {
        q: "How much does an outsourced call center agent cost?",
        a: "A dedicated, trained agent in Bangladesh typically costs $6–9 per hour, billed monthly. A comparable US in-house hire costs $25–35 per hour fully loaded. [PLACEHOLDER: confirm rates]",
      },
      {
        q: "How fast can my team launch?",
        a: "Most teams go live in 2–4 weeks: one week to recruit and shortlist, one to two weeks to train on your product and tools, then a supervised ramp-up.",
      },
      {
        q: "Do your agents speak fluent English?",
        a: "Yes. We recruit specifically for clear spoken and written English, and every agent passes a live English screening before joining a client account.",
      },
      {
        q: "Can agents work US time zones?",
        a: "Yes — this is standard. Night shift in Dhaka is daytime in the US, so your customers get real business-hours coverage.",
      },
      {
        q: "What is the minimum team size?",
        a: "You can start with a single dedicated agent and scale up as volume grows. No large minimum commitments.",
      },
    ],
  },
  {
    slug: "creative",
    name: "Graphic Design & Video Editing",
    h1: "Graphic Design & Video Editing Outsourcing",
    title: "Outsource Video Editing & Design | ShoreBridge BPO",
    desc: "Dedicated graphic designers and video editors in Bangladesh from $8–15/hour. Brief in your evening, wake up to finished work.",
    pitch: "Designers and editors who finish work while you sleep.",
    answer:
      "ShoreBridge provides dedicated graphic designers and video editors in Bangladesh from $8–15 per hour. Send briefs at the end of your day — because of the time difference, finished work is usually waiting the next morning. [PLACEHOLDER: confirm rates]",
    included: [
      "Social media and brand design",
      "Video post-production and repurposing",
      "Thumbnails, shorts, and reels",
      "Motion graphics and simple animation",
      "Dedicated-retainer options with fast revisions",
    ],
    price: "$8–15 per creative per hour",
    faq: [
      {
        q: "What tools do your designers and editors use?",
        a: "Adobe Creative Cloud — Premiere Pro, After Effects, Photoshop, Illustrator — plus Figma and DaVinci Resolve where preferred. We work inside your asset and brand systems.",
      },
      {
        q: "What is the typical turnaround?",
        a: "For most jobs, next business morning. The Dhaka time zone means our workday runs while yours is over, so briefs sent in your evening are usually delivered by your morning.",
      },
      {
        q: "Do you work per-project or with dedicated staff?",
        a: "Both. Ongoing brands do best with a dedicated designer or editor on retainer; one-off projects are quoted flat.",
      },
      {
        q: "How do revisions work?",
        a: "Retainer clients get unlimited reasonable revisions inside working hours. Project work includes two revision rounds by default.",
      },
      {
        q: "How do we hand off files?",
        a: "Through whatever you already use — Google Drive, Dropbox, Frame.io, or Notion. Source files are always yours.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Telemedicine & Healthcare Back-Office",
    h1: "Telemedicine & Healthcare Back-Office Support",
    title: "Healthcare Back-Office Outsourcing | ShoreBridge BPO",
    desc: "Remote medical admin teams — scheduling, insurance verification, intake, telehealth coordination — for US clinics from $7–10/hour.",
    pitch: "Medical admin teams for clinics and telehealth practices.",
    answer:
      "ShoreBridge staffs remote medical admin teams — appointment scheduling, insurance verification, patient intake, and telehealth coordination — for US clinics from $7–10 per hour. [PLACEHOLDER: confirm rates]",
    included: [
      "Appointment scheduling and reminder calls",
      "Insurance eligibility and benefits verification",
      "Patient intake and records upkeep",
      "Telehealth session coordination",
      "Medical billing support",
    ],
    price: "$7–10 per staff member per hour",
    faq: [
      {
        q: "How do you handle HIPAA compliance?",
        a: "We sign Business Associate Agreements and train every healthcare-account agent on HIPAA-compliant data handling before they touch patient information. [PLACEHOLDER: confirm compliance posture]",
      },
      {
        q: "Which EHR systems can your staff work in?",
        a: "Our teams train on your system during onboarding — practices using Epic, Athenahealth, eClinicalWorks, Kareo, and SimplePractice are common. If your staff can learn it, ours can.",
      },
      {
        q: "Can you cover evenings and weekends?",
        a: "Yes. Because our teams work from Dhaka, after-hours and weekend coverage for your patients does not require overnight shifts on your side.",
      },
      {
        q: "What size clinic is a good fit?",
        a: "Solo practices to multi-location groups. Most clients start with one or two staff handling scheduling and verification, then expand.",
      },
      {
        q: "How quickly can we start?",
        a: "Typically 3–4 weeks including compliance training, EHR onboarding, and supervised ramp-up.",
      },
    ],
  },
  {
    slug: "back-office",
    name: "Back-Office, Data & Virtual Assistants",
    h1: "Back-Office, Data & Virtual Assistant Services",
    title: "Back-Office & Data Outsourcing | ShoreBridge BPO",
    desc: "Dedicated back-office staff in Dhaka — data entry, bookkeeping support, research, virtual assistants — from $4–7/hour for US and BD companies.",
    pitch: "Data entry, research, bookkeeping support, and VAs.",
    answer:
      "ShoreBridge provides dedicated back-office staff in Dhaka — data entry, bookkeeping support, research, and virtual assistants — from $4–7 per hour, for both US and Bangladeshi companies. [PLACEHOLDER: confirm rates]",
    included: [
      "Data entry, cleanup, and migration",
      "CRM upkeep and lead-list building",
      "Bookkeeping and invoicing support",
      "Research and report preparation",
      "Executive virtual assistants",
    ],
    price: "$4–7 per staff member per hour",
    faq: [
      {
        q: "How do you keep data entry accurate?",
        a: "Double-keyed verification on critical datasets, spot QA on everything else, and a team lead who owns accuracy metrics for your account.",
      },
      {
        q: "How is our data kept secure?",
        a: "Signed NDAs for every staff member, least-privilege access to your systems, and work confined to accounts you control — your data never leaves your tools.",
      },
      {
        q: "We are a Bangladeshi company. Can we outsource to you locally?",
        a: "Yes. The same teams serve Bangladeshi businesses, with local billing available. [PLACEHOLDER: confirm BDT billing]",
      },
      {
        q: "Can we hire part-time?",
        a: "Yes — half-day dedicated staff are available for workloads that don't need full-time coverage.",
      },
      {
        q: "How do we manage the team day to day?",
        a: "Directly, like your own remote staff — Slack, Teams, or email — plus a weekly report from the team lead covering output and hours.",
      },
    ],
  },
];
