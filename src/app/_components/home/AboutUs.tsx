import React from "react";

interface AboutUsItemProps {
  label?: string | React.ReactNode;
  children: React.ReactNode;
}

const AboutUsItem = ({ label, children }: AboutUsItemProps) => {
  return (
    <div className="w-full">
      <strong className="flex items-center gap-2 whitespace-nowrap">
        {label} <hr className="my-2 w-full border-foreground opacity-40" />
      </strong>
      <p>{children}</p>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="flex max-w-screen-sm flex-col items-center text-center sm:w-4/5 sm:text-left">
      <h3 className="mb-2 text-lg font-bold">Who are we? and what do we do?</h3>
      <AboutUsItem label="The Idea">
        UOACS was founded in 2023 by Joshua Li and Chris Chiem, and serves as the student body for computer science
        students. The idea was birthed on a table in Kate Edgar Level 0 while studying for CS120 and contemplating what
        our future would look like.
      </AboutUsItem>
      <AboutUsItem>
        We realized that other practices had their own societies and associations while we were struggling to find like
        minded individuals. So we did what no one else was doing, and created this club.
      </AboutUsItem>
      <AboutUsItem>
        The core foundations of what we do and who we are are the following: <br />
        <strong className="text-secondary">Connect, collaborate, network and develop.</strong>
      </AboutUsItem>
    </div>
  );
};
