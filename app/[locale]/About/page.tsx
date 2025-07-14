"use client"

import React from 'react';
import {useSyncI18nWithUrl} from "@/hooks/useSyncI18nWithUrl";

const Page = () => {
    useSyncI18nWithUrl();

    return (
        <div>
            About us
        </div>
    );
};

export default Page;