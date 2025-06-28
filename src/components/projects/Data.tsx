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
    status: "Public launch Q3 2025. Closed beta (~25 users) starting June 30, 2025 (as per brief).",
    resultsAndLearnings: "Masterclass in full-cycle product development. Key takeaways: strategic pivoting, and robust prompt engineering for reliable, cost-effective AI features. Navigating free-tier AI model changes (e.g., Gemini call limits) was a key challenge.",
    date: '2023 – Present',
    links: [],
    images: [
      { src: '/careersuite1.png', alt: 'CareerSuite.AI Placeholder 1' },
      { src: '/careersuite2.png', alt: 'CareerSuite.AI Placeholder 2' },
      { src: '/careersuite3.png', alt: 'CareerSuite.AI Placeholder 2' },
      { src: '/careersuite4.png', alt: 'CareerSuite.AI Placeholder 2' },
    ],
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