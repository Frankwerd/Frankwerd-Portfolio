'use client';

import { Message } from 'ai/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export type ChatMessageContentProps = {
  message: Message;
  isLast?: boolean;
  isLoading?: boolean;
  reload?: () => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
  skipToolRendering?: boolean; 
};

const CodeBlock = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const firstLineBreak = content.indexOf('\n');
  const firstLine = content.substring(0, firstLineBreak).trim();
  const language = firstLine || 'text';
  const code = firstLine ? content.substring(firstLineBreak + 1) : content;

  const previewLines = code.split('\n').slice(0, 1).join('\n');
  const hasMoreLines = code.split('\n').length > 1;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="my-4 w-full overflow-hidden rounded-md"
    >
      <div className="bg-secondary text-secondary-foreground flex items-center justify-between rounded-t-md border-b px-4 py-1">
        <span className="text-xs">
          {language !== 'text' ? language : 'Code'}
        </span>
        <CollapsibleTrigger className="hover:bg-secondary/80 rounded p-1">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
      </div>

      <div className="bg-accent/80 text-accent-foreground rounded-b-md">
        {!isOpen && hasMoreLines ? (
          <pre className="px-4 py-3">
            <code className="text-sm">{previewLines + '\n...'}</code>
          </pre>
        ) : (
          <CollapsibleContent>
            <div className="custom-scrollbar" style={{ overflowX: 'auto' }}>
              <pre className="min-w-max px-4 py-3">
                <code className="text-sm whitespace-pre">{code}</code>
              </pre>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

export default function ChatMessageContent({
  message,
}: ChatMessageContentProps) {
  
  const renderContent = () => {
    // Prioritize parts if they exist and contain text.
    const textParts = message.parts?.filter(part => part.type === 'text' && part.text);

    if (textParts && textParts.length > 0) {
      return textParts.map((part, partIndex) => {
        // This cast is safe due to the filter above
        const textToRender = (part as { type: 'text'; text: string }).text;
        const contentParts = textToRender.split('```');

        return (
          <div key={`msg-${message.id}-part-${partIndex}`} className="w-full space-y-4">
            {contentParts.map((content, i) =>
              i % 2 === 0 ? (
                <div key={`text-${i}`} className="prose dark:prose-invert w-full">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="break-words whitespace-pre-wrap">{children}</p>,
                      ul: ({ children }) => <ul className="my-4 list-disc pl-6">{children}</ul>,
                      ol: ({ children }) => <ol className="my-4 list-decimal pl-6">{children}</ol>,
                      li: ({ children }) => <li className="my-1">{children}</li>,
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {content}
                  </Markdown>
                </div>
              ) : (
                <CodeBlock key={`code-${i}`} content={content} />
              )
            )}
          </div>
        );
      });
    } else if (message.content) {
      // Fallback to message.content if no suitable text parts are found
      const contentParts = message.content.split('```');
      return (
        <div className="w-full space-y-4">
          {contentParts.map((content, i) =>
            i % 2 === 0 ? (
              <div key={`content-text-${i}`} className="prose dark:prose-invert w-full">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => <p className="break-words whitespace-pre-wrap">{children}</p>,
                    ul: ({ children }) => <ul className="my-4 list-disc pl-6">{children}</ul>,
                    ol: ({ children }) => <ol className="my-4 list-decimal pl-6">{children}</ol>,
                    li: ({ children }) => <li className="my-1">{children}</li>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                >{content}</Markdown>
              </div>
            ) : (
              <CodeBlock key={`content-code-${i}`} content={content} />
            )
          )}
        </div>
      );
    }
    return null; // Should not happen if message has content or text parts
  };

  return <div className="w-full">{renderContent()}</div>;
}