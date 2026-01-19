import Image from "next/image";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaSkull } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
const page = () => {
  return (
    <div className="flex w-full justify-between flex-col gap-4 h-screen">
      <Image src={"/auth.jpg"} fill alt="chatback" />
      <p className="text-white flex gap-2 items-center font-bold text-xl border-b border-accent px-4 py-2 relative z-2 bg-slate-900">
        <div className="relative w-8 h-8">
          <Image src={"/icon1.png"} fill alt="logo" />
        </div>
        <span>Dev Force </span>
      </p>

      <div className="flex flex-col px-6 py-2 gap-4 w-full flex-1 min-h-0 overflow-y-auto no-scrollbar relative z-4">
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit max-w-md gap-1">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              This is a sample chat message send by others users
            </span>
          </div>
        </div>

        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <div className="flex flex-col bg-accent rounded-md border-gray-600 px-2 py-1 w-fit gap-1 max-w-md">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Anonymous
            </p>
            <span className="text-white font-normal text-base">
              Testing chat functionality with this 30-word sample message to
              verify scroll behavior, message bubble layout, responsive design,
              Tailwind styling, Next.js Image rendering, and flexbox positioning
              works perfectly across all devices and screen sizes.
            </span>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="flex flex-col bg-primary rounded-md  border-gray-600 px-2 py-1 w-fit max-w-md gap-1">
            <p className="text-xs font-normal text-gray-300 italic flex items-center gap-1">
              <FaSkull />
              Me
            </p>
            <span className="text-white font-normal text-base">
              This is a sample chat message send by others users
            </span>
          </div>
        </div>
      </div>

      {/* chat typing for msg */}
      <div className="flex relative z-6 pb-4 px-6 gap-2 items-center">
        <Input placeholder={"start messaging"} />
        <Button variant="icon" size="lg" className={`bg-primary rounded-md`}>
          <IoIosSend size={28} />
        </Button>
      </div>
    </div>
  );
};

export default page;
