import { tool } from 'ai';
import { z } from 'zod';

export const getProjectsOverview = tool({
  description:
    "Responds to inquiries about Frank's (Francis John Libutti's) projects. It returns a structured object containing a user-facing message and a navigation command to display the project carousel.",
  parameters: z.object({}), // No parameters needed for this version
  execute: async () => {
    const projectTitles = [
      'CareerSuite.AI',
      'NSF I-Corps (AgTech Project)',
      'HAV Project (Lemelson-MIT)',
      'Project FiVR (Samsung Solve for Tomorrow)',
      'Automated Invoice Tracker & Reminder System',
      'Cleantech Venture (E-Scooter Retrofitting)',
    ];

    let titleList = "\n\nHere are the main projects I've worked on:\n";
    projectTitles.forEach(title => {
      titleList += `*   ${title}\n`;
    });

    return {
      message: `Okay, I'm displaying my projects for you now on the main page! You can explore them in the interactive carousel.${titleList}`,
      navigationCommand: {
        action: 'navigate',
        path: '/?viewProjects=true',
      },
    };
  },
});