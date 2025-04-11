'use client';

import React from 'react';
import OtherPageHeader from '@components/common/PageHeaderAnimation';

export default function SocialPage() {
    return (
        <div className="w-dvw h-dvh overflow-hidden relative">
            <OtherPageHeader label="Socials" />
            <iframe src="https://linktr.ee/UOACS" title="linktr" className="w-full h-full"></iframe>
        </div>
    );
}
