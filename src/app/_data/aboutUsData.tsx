import { ReactNode } from 'react';

export interface AboutUsItemData {
  label?: string;
  content: ReactNode;
}

export const aboutUsData = {
  title: "Who are we? and what do we do?",
  items: [
    {
      label: "The Idea",
      content: "UOACS was founded in 2023 by Joshua Li and Chris Chiem, and serves as the student body for computer science students. The idea was birthed on a table in Kate Edgar Level 0 while studying for CS120 and contemplating what our future would look like."
    },
    {
      content: "We realized that other practices had their own societies and associations while we were struggling to find like minded individuals. So we did what no one else was doing, and created this club."
    },
    {
      content: 
        <> The core foundations of what we do and who we are are the following: <br />
          <strong className="text-secondary">Connect, collaborate, network and develop.</strong>
        </>
      
    }
  ]
};
