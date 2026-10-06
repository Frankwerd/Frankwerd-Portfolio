'use client';

import FluidCursor from '@/components/FluidCursor';
import AllProjects from '@/components/projects/AllProjects';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  History,
  NotebookPen,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import GitHubButton from 'react-github-btn';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?', // This will trigger the carousel
  Experience: 'Walk me through your work history. Where have you worked and what did you build there?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Blog: 'Show me your blog. What have you written lately?',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#2B4BEE', icon: Laugh },
  { key: 'Projects', color: '#D9822B', icon: BriefcaseBusiness },
  { key: 'Experience', color: '#138A7E', icon: History },
  { key: 'Skills', color: '#7C3AED', icon: Layers },
  { key: 'Fun', color: '#C2410C', icon: PartyPopper },
  { key: 'Blog', color: '#B45309', icon: NotebookPen },
  { key: 'Contact', color: '#0E7490', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
function PageContent() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const inputRef = useRef<HTMLInputElement>(null);
  const showProjects = searchParams.get('viewProjects') === 'true'; 

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = '/landing-logo.png'; // Preload original image

    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload'; 
    linkWebm.as = 'video';
    linkWebm.href = '/final_logo.webm'; // Preload original video
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_logo'; // Preload original video
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {!showProjects && (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden text-[10rem] leading-none font-bold text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem', fontFamily: 'var(--font-display)', WebkitTextStroke: '1.5px oklch(0.5 0.22 266 / 14%)' }}
        >
          LiButti
        </div>
      </div>
      )}

      <div className="absolute top-6 right-8 z-20 flex items-center gap-3">
        <a
          href="/blog"
          className="border-border bg-card/70 text-foreground hover:bg-card rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-lg transition"
        >
          Blog
        </a>
        <GitHubButton
          href="https://github.com/Frankwerd/Frankwerd-Portfolio"
          data-color-scheme="no-preference: light; light: light; dark: light_high_contrast;"
          data-size="large"
          data-show-count="true"
          aria-label="Star Frankwerd's portfolio on GitHub"
        >
          Star
        </GitHubButton>
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => goToChat('What are you working on right now, and what kind of work are you open to?')}
          className="cursor-pointer relative flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-lg transition hover:bg-card dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Now: Growth Engineer @ GatherUp
        </button>
      </div>

      {!showProjects && (
        <>
          <motion.div
            className="z-1 mb-8 flex flex-col items-center text-center md:mb-12 mt-24 md:mt-4"
            variants={topElementVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="z-100">
              <WelcomeModal />
            </div>

            <h2 className="text-muted-foreground mt-1 text-sm font-medium tracking-[0.2em] uppercase md:text-base">
              Frankie LiButti · Growth Engineer & AI Builder
            </h2>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              I build AI systems <span className="accent-serif text-primary">that actually ship.</span>
            </h1>
          </motion.div>

          <div className="relative z-10 h-52 w-48 overflow-hidden sm:h-72 sm:w-72">
            <Image
              src="/landing-logo.png" // Original template image
              alt="Hero memoji"
              width={2000}
              height={2000}
              priority
              className="translate-y-14 scale-[2] object-cover"
            />
          </div>
        </>
      )}

      {showProjects && (
        <div className="w-full max-w-7xl mx-auto my-12 md:my-16 pt-16"> {/* Added pt-16 for spacing when header is hidden */}
          <AllProjects />
        </div>
      )}

      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-border bg-card/70 py-2.5 pr-2 pl-6 shadow-sm backdrop-blur-lg transition-all hover:border-primary/40 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="text-foreground placeholder:text-muted-foreground w-full border-none bg-transparent text-base focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center rounded-full p-2.5 transition-colors disabled:opacity-70"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-4 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="shadow-none border-border hover:bg-card aspect-square w-full cursor-pointer rounded-2xl border bg-card/60 py-8 backdrop-blur-lg active:scale-95 md:p-10"
            >
              <div className="text-foreground/80 flex h-full flex-col items-center justify-center gap-1">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}