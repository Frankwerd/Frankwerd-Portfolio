'use client';
import { Contact } from '../contact';
import Crazy from '../crazy';
import InternshipCard from '../InternshipCard';
import Experience from '../experience';
import BlogList from '../blog-list';
import type { PostMeta } from '@/lib/blog';
import { Presentation } from '../presentation';
import AllProjects from '../projects/AllProjects';
import Resume from '../resume';
import Skills from '../skills';
import GalapagosCulture from '../GalapagosCulture';

interface ToolRendererProps {
  toolInvocations: any[];
  messageId: string;
}

export default function ToolRenderer({
  toolInvocations,
  messageId,
}: ToolRendererProps) {
  return (
    <div className="w-full transition-all duration-300">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool;

        // Return specialized components based on tool name
        switch (toolName) {
          case 'getProjects':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden rounded-lg"
              >
                <AllProjects />
              </div>
            );

          case 'getPresentation':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden rounded-lg"
              >
                <Presentation />
              </div>
            );

          case 'getResume':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Resume />
              </div>
            );

          case 'getContact':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Contact />
              </div>
            );

          case 'getSkills':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Skills />
              </div>
            );

          case 'getGalapagosCulture':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <GalapagosCulture />
              </div>
            );

          case 'getExperience':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Experience />
              </div>
            );

          case 'getBlog':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <BlogList posts={((tool.result as { posts?: PostMeta[] })?.posts) ?? []} />
              </div>
            );

          case 'getCrazy':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Crazy />
              </div>
            );

          case 'getInternship':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <InternshipCard />
              </div>
            );

          // These return text for the model to relay (or navigate), so there's nothing to draw
          case 'getJobOpportunity':
          case 'getProjectsOverview':
            return null;

          // Default renderer for other tools
          default:
            return (
              <div
                key={toolCallId}
                className="bg-secondary/10 w-full rounded-lg p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{toolName}</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                    Tool Result
                  </span>
                </div>
                <div className="mt-2">
                  {typeof tool.result === 'object' ? (
                    <pre className="bg-secondary/20 overflow-x-auto rounded p-3 text-sm">
                      {JSON.stringify(tool.result, null, 2)}
                    </pre>
                  ) : (
                    <p>{String(tool.result)}</p>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}
