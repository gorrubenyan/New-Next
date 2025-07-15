"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/Providers/ThemeContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

const Header = () => {
    const { darkMode, toggleTheme } = useTheme();

    // Add a flag to determine if component is mounted on client
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className="border-2 border-gray-400 min-h-[10vh] flex items-center justify-between p-4
            dark:border-amber-400 dark:bg-gray-400">
            <div>Header</div>

            {/* Wait until mounted to render theme toggle */}
            {mounted && (
                <button
                    className="border border-black p-1 rounded-2xl"
                    onClick={toggleTheme}
                >
                    {darkMode === "dark" ? "light" : "dark"}
                </button>
            )}

            <LanguageSwitcher />

            <div className="flex gap-4">
                <Link href="/Hero">Hero</Link>
                <Link href="/About">About</Link>
            </div>
        </div>
    );
};

export default Header;
