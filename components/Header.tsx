"use client";

import React from 'react';
import {useTheme} from "@/Providers/ThemeContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {IoMdMoon, IoMdSunny} from "react-icons/io";
import Link from "next/link";

const Header = () => {
    const {darkMode, toggleTheme} = useTheme();
    return (
        <div
            className="border-2 border-gray-400 min-h-[10vh] flex items-center
            dark:border-amber-400 dark:bg-gray-400 ">
            Header

            <button
                className="border border-black  p-1 rounded-2xl"
                onClick={toggleTheme}>
                {darkMode === 'dark' ? (
                    <IoMdSunny/>

                ) : (
                    <IoMdMoon/>

                )}
            </button>
            <LanguageSwitcher/>

            <Link href={"/Hero"}>Hero</Link>
            <Link href={"/About"}>About</Link>
        </div>
    );
};

export default Header;