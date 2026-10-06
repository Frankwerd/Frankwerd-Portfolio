'use client';

import { EXPERIENCE } from '@/data/experience';

export function Experience() {
  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <h2 className="text-primary text-4xl font-bold">
        Work <span className="accent-serif">history</span>
      </h2>

      <ol className="border-border mt-8 space-y-8 border-l-2 pl-6">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="relative">
            <span
              className={`absolute top-1.5 -left-[33px] h-4 w-4 rounded-full border-2 ${
                job.current ? 'border-primary bg-primary' : 'border-border bg-card'
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-foreground text-xl font-semibold">{job.company}</h3>
              {job.current && (
                <span className="bg-highlight/25 text-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                  Current
                </span>
              )}
            </div>
            {(job.type || job.location) && (
              <p className="text-muted-foreground mt-0.5 text-sm">
                {[job.type, job.location].filter(Boolean).join(' · ')}
              </p>
            )}

            <div className="mt-3 space-y-3">
              {job.roles.map((role) => (
                <div key={role.title + role.dates} className="bg-card border-border rounded-2xl border p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-foreground font-medium">{role.title}</p>
                    <p className="text-muted-foreground text-sm">{role.dates}</p>
                  </div>
                  {role.points && (
                    <ul className="text-secondary-foreground mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experience;
