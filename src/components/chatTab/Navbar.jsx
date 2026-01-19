"use client";
import navbar from "@/lib/nav";
import Link from "next/link";
import React from "react";
import { FaSkull } from "react-icons/fa6";
import { GiPirateSkull } from "react-icons/gi";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="w-full h-full bg-slate-900">
      <div className="flex flex-col h-full">
        <p className="text-primary flex gap-2 items-center font-bold text-xl border-b border-accent px-4 py-2">
          <GiPirateSkull className="text-primary" />
          <span>WhisperNet </span>
        </p>
        <div className="flex flex-col py-6  justify-between h-full px-4">
          <div className="flex flex-col gap-2">
            {navbar.map((item, idx) => (
              <Link
                href={item.path}
                key={idx}
                className={`text-white flex items-center justify-start gap-2 text-lg font-medium px-2 py-1 rounded-md ${path == item.path ? `bg-primary hover:bg-primary/80` : `hover:bg-accent`}`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
