"use client";

import { useTheme } from "@wits/next-themes";
import React, { useEffect, useState } from "react";
import { BiBook } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [showThemeToggle, setShowThemeToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowThemeToggle(true));
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-12 h-12">
        <BiBook className="w-full h-full dark:text-neutral-300/20 text-neutral-400/50" />
      </div>
      {showThemeToggle && (
        <div className="flex gap-2 items-center">
          {/* <div className="dark:text-white">Senrif</div> */}
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <div className="w-6 h-6 text-neutral-600 dark:text-neutral-100">
              {theme === "light" ? (
                <MdDarkMode className="w-full h-full" />
              ) : (
                <MdLightMode className="w-full h-full" />
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
