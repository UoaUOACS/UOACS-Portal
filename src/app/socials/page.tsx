"use client";

import React from "react";
import OtherPageHeader from "@components/common/PageHeaderAnimation";

export default function SocialPage() {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden">
      <OtherPageHeader label="Socials" />
      <iframe src="https://linktr.ee/UOACS" title="linktr" className="h-full w-full"></iframe>
    </div>
  );
}
