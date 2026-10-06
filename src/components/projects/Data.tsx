import Image from 'next/image';
import { ChevronRight, Link as LinkIcon } from 'lucide-react'; 
import { Separator } from '@/components/ui/separator';

interface ProjectContentData {
  title: string;
  description: string;
  techStack?: string[];
  date?: string; 
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
  role?: string;
  context?: string;
  processHighlights?: string[] | string; 
  solutionSummary?: string;
  resultsAndLearnings?: string;
  status?: string; 
}

const AKA_PROJECT_CONTENT: ProjectContentData[] = [
  {
    title: 'CareerSuite.AI',
    role: 'Founder, Product Architect & Lead Developer',
    description: "Driven by the belief that a job search shouldn't cost you, I architected and built CareerSuite.AI—a full-stack AI application that democratizes career tools and showcases my process of turning a complex problem into a shipped product.",
    context: "The modern job search is broken. Tools that once gave applicants a competitive edge, like LinkedIn Premium, have become expensive industry standards. This creates a barrier for talented individuals. I created CareerSuite.AI to level the playing field with a powerful, AI-driven, free, and user-centric job search suite.",
    processHighlights: [
      "Phase 1 (Google Sheets MVP): Validated core idea of automating job application tracking via email parsing (Regex-based). Quickly tested foundational logic.",
      "Phase 2 (Hitting a Wall & Strategic Pivot): Realized Sheets MVP limitations for complex features (resume generation, UI). Pivoted to a true software application, scrapping failing parts. This was crucial for success.",
      "Phase 3 (AI-Powered Extension): Architected a user-friendly browser extension. Integrated Gemini 1.5 Flash API (now Gemini 2.5 Flash-lite) for intelligent parsing. Designed a flow for users to use their own free-tier Gemini API keys."
    ],
    solutionSummary: "CareerSuite.AI is a browser extension offering: One-Click AI Resume Tailoring (ATS compatible), Local-First Data Control (privacy & ownership), Effortless Autofill for applications, and an Automated Tracking integration (upcoming).",
    techStack: [
      'Google Apps Script', 'JavaScript', 'Google Gemini API (gemini-2.5-flash-lite)', 'Groq API', 
      'REST APIs', 'Google Workspace (Gmail, Sheets, Drive)', 'Modular Architecture', 
      'Human-in-the-Loop (HITL) System Design', 'Prompt Engineering', 'Browser Extension Development'
    ],
    status: "Shipped 6 major releases from MVP to public beta. Cut manual data entry by 95%, saving users 5+ hours per week, with 100% uptime on the multi-LLM (Gemini + Groq) pipeline. A free AI resume analyzer is also live at careersuiteai.vercel.app.",
    resultsAndLearnings: "Masterclass in full-cycle product development. Key takeaways: strategic pivoting, and robust prompt engineering for reliable, cost-effective AI features. Navigating free-tier AI model changes (e.g., Gemini call limits) was a key challenge.",
    date: 'Feb 2025 – Sep 2025',
    links: [
      { name: 'Landing Page', url: 'https://careersuiteai.vercel.app/' },
      { name: 'Open-source backend (GitHub)', url: 'https://github.com/Frankwerd/CareerSuite.Ai_Google-Apps-Script-Backend' },
      { name: 'Chrome Extension', url: 'https://chromewebstore.google.com/detail/careersuiteai/aoeffnegpkjeleckamfblhgcmhnmioaa' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/company/careersuiteai/?viewAsMember=true' },
      { name: 'Instagram', url: 'https://www.instagram.com/careersuite.ai/' },
      { name: 'Twitter', url: 'https://x.com/CareerSuite_Ai' }
    ],
    images: [
      { src: '/careersuite1.png', alt: 'CareerSuite.AI Placeholder 1' },
      { src: '/careersuite2.png', alt: 'CareerSuite.AI Placeholder 2' },
      { src: '/careersuite3.png', alt: 'CareerSuite.AI Placeholder 2' },
      { src: '/careersuite4.png', alt: 'CareerSuite.AI Placeholder 2' },
    ],
  },
  {
    title: "HubSpot-to-Slack Ticket Notifier",
    role: "Creator",
    description: "Custom middleware that closes a visibility gap in HubSpot: every inquiry instantly becomes a rich Slack alert with a direct link to the ticket.",
    context: "Our team's automated pipeline needed instant ticket creation on specific triggers, but HubSpot's native automation couldn't generate tickets in that workflow, so customer inquiries could sit unnoticed in the CRM.",
    processHighlights: [
      "Configured a HubSpot Private App webhook to fire on form submissions and events.",
      "The script parses the webhook and queries the HubSpot CRM API for deep-linked contact and ticket data, including inquiry type and message.",
      "Pushes a formatted notification to a dedicated Slack channel via incoming webhooks, with a button linking straight to the ticket.",
    ],
    solutionSummary: "A zero-cost, serverless Google Apps Script bridge that makes sure every inquiry is accounted for.",
    techStack: ["Google Apps Script", "HubSpot CRM API", "Slack Webhooks", "REST APIs", "Serverless Architecture"],
    date: "Feb 2026 – Mar 2026",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/HubSpot-to-Slack-Ticket-Notifier" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/HubSpot-to-Slack-Ticket-Notifier", alt: "HubSpot-to-Slack Ticket Notifier on GitHub" }],
  },
  {
    title: "Standalone Barcode Scanner (ERP-Lite)",
    role: "Creator",
    description: "A hardware-agnostic, web-based scanning interface that connects USB and Bluetooth barcode scanners to a backend ERP for warehouse inventory.",
    processHighlights: [
      "Real-time ingestion layer that handles rapid-fire HID scanner input.",
      "RESTful sync of scan events with a centralized inventory database.",
      "Responsive, feedback-rich UI that validates each SKU instantly to cut manual entry errors.",
    ],
    solutionSummary: "A modular ERP-Lite module focused on performance and low-latency communication.",
    techStack: ["Python", "REST APIs", "Serverless Architecture", "Inventory Management"],
    date: "Feb 2026 – Mar 2026",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/standalone-scanner" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/standalone-scanner", alt: "Standalone Barcode Scanner (ERP-Lite) on GitHub" }],
  },
  {
    title: "Asana-Powered Social Media Scheduler",
    role: "Creator",
    description: "A serverless tool that schedules and publishes social media content straight from an Asana project.",
    processHighlights: [
      "Uses Asana custom fields for scheduling and status tracking (Ready to Review, Posted, Failed).",
      "Modular architecture that keeps business logic separate so new platforms can be added.",
      "Closed-loop error handling that writes the failure reason back to the Asana task.",
      "Deployed with the AWS Serverless Application Model (SAM) for repeatable releases.",
    ],
    techStack: ["Python", "AWS Lambda", "AWS SAM", "Asana API", "Git"],
    date: "Aug 2025 – Sep 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/Asana-Social-Scheduler" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/Asana-Social-Scheduler", alt: "Asana-Powered Social Media Scheduler on GitHub" }],
  },
  {
    title: "January: Self-Hosted AI Chatbot",
    role: "Creator",
    description: "An open-source, self-hosted AI chatbot template with a free-to-start Google Gemini core. Part 1 of a 12-part series toward a fully personal AI assistant.",
    context: "Most chatbot templates default to OpenAI and need a credit card upfront. January runs on Gemini Flash-Lite so developers can start for free.",
    solutionSummary: "A full-featured template with a customizable UI, data persistence and authentication that you can host and modify yourself.",
    techStack: ["Next.js", "React", "Vercel AI SDK", "Google Gemini", "shadcn/ui", "Tailwind CSS", "Neon Postgres", "Auth.js"],
    date: "Aug 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js" },
      { name: "Live demo", url: "https://self-hosted-open-source-ai-chatbot.vercel.app" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/January-A-Self-Hosted-Open-Source-AI-Chatbot-Template-for-Next.js", alt: "January: Self-Hosted AI Chatbot on GitHub" }],
  },
  {
    title: "AI Email Stress-Testing Tool",
    role: "Creator",
    description: "A desktop app that generates large, realistic email datasets with Gemini to stress-test email parsing and workflow automation.",
    context: "Testing the email parsers behind CareerSuite and FundingFlock AI needed hundreds of unique, realistic emails, which was impractical to write by hand.",
    processHighlights: [
      "Gemini generates a unique subject and body for every email from user-defined prompts.",
      "Python GUI built with ttkbootstrap, multithreaded so the UI stays responsive during bulk sends, with cancellation.",
      "Packaged as a standalone Windows .exe with PyInstaller; source on GitHub.",
    ],
    techStack: ["Python", "Google Gemini API", "ttkbootstrap", "Multithreading", "PyInstaller"],
    date: "Aug 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/ai-email-stress-tool" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/ai-email-stress-tool", alt: "AI Email Stress-Testing Tool on GitHub" }],
  },
  {
    title: "GrantWriter AI",
    role: "Creator (in development)",
    description: "A browser extension concept that speeds up grant applications for non-profits.",
    processHighlights: [
      "AI engine that analyzes Requests for Proposals (RFPs).",
      "Intelligent autofill that populates forms from a master organization profile.",
      "Guided tutorial system for complex application workflows.",
    ],
    techStack: ["JavaScript", "Chrome Extension APIs", "AI Integration", "UX Design", "Grant Administration"],
    date: "Aug 2025 – Sep 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Frankwerd/GrantWriter-AI" },
      { name: "Backend (GitHub)", url: "https://github.com/Frankwerd/FundingFlock.Ai_Google-Apps-Script-Backend" },
    ],
    images: [{ src: "https://opengraph.githubassets.com/1/Frankwerd/GrantWriter-AI", alt: "GrantWriter AI on GitHub" }],
  },
  {
    title: 'NSF I-Corps (AgTech Project)',
    role: 'Co-Entrepreneurial Lead',
    description: "Guided an innovative AgTech hardware solution from the lab toward a viable market path by leading a rigorous customer discovery process within the elite NSF I-Corps program.",
    context: "A brilliant AgTech hardware solution faced an unknown commercial viability. My mission was to discover if a real market existed and define a succeeding business model before further investment.",
    processHighlights: [
      "Embraced the rigorous NSF I-Corps methodology for market validation.",
      "Directed customer discovery: 23+ in-depth interviews (beekeepers, commercial operators, USDA researchers, industry players like NOD Apiary Products).",
      "Critical Pivot: Interview data revealed hobbyists as a more acute, lower-barrier segment than initial commercial operator hypothesis. Validated a new $100 price point and GTM strategy for this segment."
    ],
    solutionSummary: "Developed a data-driven business model and go-to-market plan, recommending an exclusive focus on the hobbyist market first. This provided a clear, validated roadmap.",
    techStack: ['Market Validation', 'Customer Discovery', 'Business Model Canvas', 'Go-to-Market Strategy', 'Data Analysis'],
    resultsAndLearnings: "Presented data-backed findings and pivot strategy to an NSF panel, earning a 'go' recommendation. Masterclass in market-driven product strategy; learned to turn ambiguous feedback into concrete business strategy. Biggest risk isn't technical, it's building something no one pays for.",
    date: 'Jan 2023 – May 2023',
    links: [],
    images: [ { src: '/agtech1.png', alt: 'NSF I-Corps Placeholder' }, { src: '/agtech3.png', alt: 'NSF I-Corps Placeholder' }, { src: '/agtech4.png', alt: 'NSF I-Corps Placeholder'}, { src: '/agtech5.png', alt: 'NSF I-Corps Placeholder'}], 
  },
  {
    title: 'HAV Project (Lemelson-MIT)',
    role: 'Project Manager & Sustainability Lead',
    description: "As one of only 14 teams nationwide selected by Lemelson-MIT, co-led a team to secure a $10,000 grant and deliver a complex robotic prototype (Underwater ROV) for water quality monitoring, from concept to MIT presentation.",
    context: "Local environmental agencies needed more cost-effective water quality monitoring. Our team proposed a compact, semi-autonomous Underwater ROV, winning a $10,000 Lemelson-MIT grant to build a prototype in one academic year.",
    processHighlights: [
      "Managed project timeline, budget, and milestones for a multi-disciplinary student team.",
      "Championed sustainability: conducted 'gate-to-gate' life-cycle analysis, influencing material selection to minimize ROV's environmental footprint within budget.",
      "Balanced ideal component selection with budget constraints, learning pragmatic tradeoffs."
    ],
    solutionSummary: "Successfully designed, built, and tested a fully functional prototype of the Hydro-Aquatic Vehicle (HAV) – a compact, environmentally-conscious underwater drone for water quality metrics, delivered on schedule and budget.",
    techStack: ['Project Management', 'Robotics (Conceptual)', 'Sustainability Analysis', 'Life-Cycle Assessment', 'Budget Management', 'Team Leadership'],
    resultsAndLearnings: "Successfully demonstrated prototype at EurekaFest (Lemelson-MIT national showcase at MIT). Foundational experience in leading a team for complex technical execution from A-Z and integrating strategic objectives (sustainability) into engineering workflows.",
    date: 'Jun 2017 – Jul 2018',
    links: [],
    images: [ { src: '/hav1.png', alt: 'HAV Project Placeholder' }, { src: '/hav2.png', alt: 'HAV Project Placeholder' }, { src: '/hav3.png', alt: 'HAV Project Placeholder' }, { src: '/hav4.png', alt: 'HAV Project Placeholder' }, { src: '/hav5.png', alt: 'HAV Project Placeholder' }, { src: '/hav6.png', alt: 'HAV Project Placeholder' },],
  },
  {
    title: 'Project FiVR (Samsung Solve for Tomorrow)',
    role: 'Operations Lead',
    description: "Co-developed a prototype VR-controlled robot for firefighting, securing a $20,000 grant as one of 10 National Finalists (out of 2,000+ schools) in the Samsung Solve for Tomorrow competition.",
    context: "Aimed to solve the problem of human danger in firefighting.",
    processHighlights: "As Operations Lead on the 6-member team, managed project timelines, budget allocation, and component procurement. Received direct technical mentorship from engineers at Samsung and Valve Corporation.",
    techStack: ['Project Management', 'Robotics (Conceptual)', 'VR Integration (Conceptual)', 'Grant Proposal'],
    date: 'Apr 2018 – Apr 2019',
    images: [{ src: '/fiver1.png', alt: 'Project FiVR Placeholder' },
      { src: '/fiver2.png', alt: 'Project FiVR Placeholder' },
      { src: '/fiver3.png', alt: 'Project FiVR Placeholder' },
    ],
  },
  {
    title: 'Automated Invoice Tracker & Reminder System',
    role: 'Creator (WIP)',
    description: "A work-in-progress CRM system I am creating to automate invoice tracking and reminders.",
    context: "This project aims to exemplify sales knowledge and an understanding of the three financial models. It's part of my ongoing learning and building process.",
    techStack: ['CRM Development (Conceptual)', 'Sales Process Automation', 'Financial Modeling (Conceptual)'],
    date: 'Ongoing',
    images: [{ src: '/invoice1.png', alt: 'Invoice Tracker Placeholder' },
      { src: '/invoice2.png', alt: 'Invoice Tracker Placeholder' },
      { src: '/invoice3.png', alt: 'Invoice Tracker Placeholder' },
    ],
  },
  {
    title: 'Cleantech Venture (E-Scooter Retrofitting)',
    role: 'Co-founder (Conceptual)',
    description: "Co-founded a conceptual cleantech venture to design and commercialize a solar energy retrofitting kit for shared e-scooter fleets.",
    context: "Focused on sustainable solutions for urban mobility.",
    processHighlights: "Led all business and financial planning for the venture.",
    techStack: ['Business Planning', 'Financial Planning', 'Cleantech (Conceptual)', 'Market Research'],
    date: 'Conceptual',
    images: [{ src: '/solar1.png', alt: 'Cleantech Venture Placeholder' },
      { src: '/solar2.png', alt: 'Cleantech Venture Placeholder' },
      { src: '/solar3.png', alt: 'Cleantech Venture Placeholder' },
      { src: '/solar4.png', alt: 'Cleantech Venture Placeholder' }
    ],
  },
  {
    title: 'Bay1 Consulting Group',
    role: 'Founder, Lead Technical Project Manager & AI Consultant',
    description: "Bay1 Consulting Group is my boutique firm for AI systems, automation, websites and grant management. We build it end to end, from architecture through deployment, for small businesses and mission-driven organizations.",
    context: "Specializing in empowering non-profits and small businesses, Bay1 focused on a twofold approach: acquiring and managing over $2MM in grant funding with automated compliance dashboards, and designing communication strategies including compelling proposals and high-engagement HTML email campaigns.",
    processHighlights: [
      "Architected a modular, multi-tenant AI operations system (Claude + MCP) with a credential-isolation framework, giving secure, isolated API access across client accounts without per-client subscription costs.",
      "Integrated WordPress, Google Analytics, Google Business Profile and Meta APIs into a unified AI-agent toolset for automated content management and reporting.",
      "Built client websites on Shopify, WordPress and custom Node.js + React + Tailwind stacks with full SEO, GEO and AEO optimization (JSON-LD structured data, Core Web Vitals, AI search visibility).",
      "Built Luminous Electric's website and an AI content system that publishes a blog post and Google Business Profile updates every week.",
      "Spearheaded fiscal analysis and project management for $2MM+ in grant funding across 30+ government agencies and private foundations.",
      "Designed and coded high-impact HTML email campaigns and marketing materials, increasing key metrics like click-through rates by up to 87% and user engagement by 80%.",
      "Developed automated dashboards (Excel, Python) for grant compliance tracking and performance monitoring, reducing reporting errors by 20%.",
      "Provided end-to-end proposal development, from research and copywriting to graphic design, contributing to over $45,000 in new grant funding for partners.",
      "Conducted risk analysis to identify potential fraudulent activity, ensuring 100% compliance with non-profit regulatory frameworks for all managed funds.",
      "Consulted on business process automation, designing workflows to connect business tools and reduce time spent on administrative tasks."
    ],
    solutionSummary: "Bay1 Consulting Group provided end-to-end grant acquisition, management, and strategic communication services, leveraging data, design, and automation to drive sustainable growth for clients.",
    techStack: ['Grant Writing', 'Proposal Development', 'Grant Management', 'Fundraising', 'Non-Profit Consulting', 'Compliance & Reporting', 'Fiscal Analysis', 'Project Lifecycle Management', 'Stakeholder Communication', 'Risk Assessment', 'Strategic Planning', 'HTML Email Marketing', 'Copywriting', 'Graphic Design', 'Brand Identity', 'Data Visualization', 'Case Study Development', 'Business Process Automation', 'Data Analysis', 'Microsoft Excel (Advanced)', 'Python (for scripting/automation)'],
    resultsAndLearnings: "Successfully secured over $2MM in grant funding, increased client engagement by over 80% through targeted campaigns, and improved operational efficiency through automation. Key learnings involved the power of integrating analytical rigor with creative execution to achieve client objectives.",
    date: 'Jun 2022 – Present',
    links: [
      { name: 'Website', url: 'https://bay1cg.vercel.app/' },
      { name: 'Instagram', url: 'https://www.instagram.com/bay1cg/' },
    ],
    images: [{ src: '/bay1.png', alt: 'Bay1 Consulting Group Placeholder' }, { src: '/bay2.png', alt: 'Bay1 Consulting Group Placeholder' }, { src: '/bay3.png', alt: 'Bay1 Consulting Group Placeholder' }, { src: '/bay4.png', alt: 'Bay1 Consulting Group Placeholder' }, ],
  }
];

interface CarouselCardProps {
  category: string;
  title: string;
  src: string; 
  content: React.ReactNode;
}

const ProjectContent = ({ projectTitle }: { projectTitle: string }) => {
  const projectData = AKA_PROJECT_CONTENT.find((p) => p.title === projectTitle);

  if (!projectData) {
    return <div>Project details not available for {projectTitle}</div>;
  }

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          {projectData.date && (
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{projectData.date}</span>
              {projectData.role && <><span>•</span><span>{projectData.role}</span></>}
            </div>
          )}
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          {projectData.context && (
            <div>
              <h3 className="mt-4 mb-2 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Context</h3>
              <p className="text-secondary-foreground font-sans text-sm leading-relaxed">{projectData.context}</p>
            </div>
          )}
          {projectData.processHighlights && (
            <div>
              <h3 className="mt-4 mb-2 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Process & Highlights</h3>
              {typeof projectData.processHighlights === 'string' ? (
                <p className="text-secondary-foreground font-sans text-sm leading-relaxed">{projectData.processHighlights}</p>
              ) : (
                <ul className="list-disc pl-5 space-y-1 text-secondary-foreground font-sans text-sm leading-relaxed">
                  {projectData.processHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {projectData.solutionSummary && (
            <div>
              <h3 className="mt-4 mb-2 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Solution</h3>
              <p className="text-secondary-foreground font-sans text-sm leading-relaxed">{projectData.solutionSummary}</p>
            </div>
          )}
          {projectData.techStack && projectData.techStack.length > 0 && (
            <div className="pt-4">
              <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-200 px-3 py-1 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
           {projectData.status && (
            <div>
              <h3 className="mt-4 mb-2 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Status</h3>
              <p className="text-secondary-foreground font-sans text-sm leading-relaxed">{projectData.status}</p>
            </div>
          )}
          {projectData.resultsAndLearnings && (
            <div>
              <h3 className="mt-4 mb-2 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Results & Learnings</h3>
              <p className="text-secondary-foreground font-sans text-sm leading-relaxed">{projectData.resultsAndLearnings}</p>
            </div>
          )}
        </div>
      </div>

      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Relevant Links
            </h3>
            <LinkIcon className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200 dark:bg-neutral-700 flex items-center justify-center"
              >
                <Image
                  src={image.src} 
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain" 
                  className="transition-transform"
                />
                {/* <span className="absolute text-xs text-neutral-500">{image.alt}</span> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const data: CarouselCardProps[] = [
  {
    category: 'Flagship AI Project',
    title: 'CareerSuite.AI',
    src: '/careersuitepreview.png', 
    content: <ProjectContent projectTitle="CareerSuite.AI" />,
  },
  {
    category: 'Consulting & Strategy',
    title: 'Bay1 Consulting Group',
    src: '/baypreview.png', // Placeholder, ensure this image exists or replace
    content: <ProjectContent projectTitle="Bay1 Consulting Group" />,
  },
  {
    category: "CRM Automation",
    title: "HubSpot-to-Slack Ticket Notifier",
    src: "/project-hubspot-slack.svg",
    content: <ProjectContent projectTitle="HubSpot-to-Slack Ticket Notifier" />,
  },
  {
    category: "Operations Tooling",
    title: "Standalone Barcode Scanner (ERP-Lite)",
    src: "/project-scanner.svg",
    content: <ProjectContent projectTitle="Standalone Barcode Scanner (ERP-Lite)" />,
  },
  {
    category: "Serverless Automation",
    title: "Asana-Powered Social Media Scheduler",
    src: "/project-asana-scheduler.svg",
    content: <ProjectContent projectTitle="Asana-Powered Social Media Scheduler" />,
  },
  {
    category: "Open-Source AI",
    title: "January: Self-Hosted AI Chatbot",
    src: "/project-january.svg",
    content: <ProjectContent projectTitle="January: Self-Hosted AI Chatbot" />,
  },
  {
    category: "Developer Tooling",
    title: "AI Email Stress-Testing Tool",
    src: "/project-email-stress.svg",
    content: <ProjectContent projectTitle="AI Email Stress-Testing Tool" />,
  },
  {
    category: "AI for Non-Profits",
    title: "GrantWriter AI",
    src: "/project-grantwriter.svg",
    content: <ProjectContent projectTitle="GrantWriter AI" />,
  },
  {
    category: 'Strategic Market Validation',
    title: 'NSF I-Corps (AgTech Project)',
    src: '/agtechpreview.png', 
    content: <ProjectContent projectTitle="NSF I-Corps (AgTech Project)" />,
  },
  {
    category: 'Robotics & Leadership',
    title: 'HAV Project (Lemelson-MIT)',
    src: '/havpreview.png', 
    content: <ProjectContent projectTitle="HAV Project (Lemelson-MIT)" />,
  },
  {
    category: 'Hackathon Winner (Samsung)',
    title: 'Project FiVR (Samsung Solve for Tomorrow)',
    src: '/fiverpreview.png', 
    content: <ProjectContent projectTitle="Project FiVR (Samsung Solve for Tomorrow)" />,
  },
  {
    category: 'WIP / Business Tools',
    title: 'Automated Invoice Tracker & Reminder System',
    src: '/invoicepreview.png', 
    content: <ProjectContent projectTitle="Automated Invoice Tracker & Reminder System" />,
  },
  {
    category: 'Conceptual Venture',
    title: 'Cleantech Venture (E-Scooter Retrofitting)',
    src: '/solarpreview.png', 
    content: <ProjectContent projectTitle="Cleantech Venture (E-Scooter Retrofitting)" />,
  },
];
