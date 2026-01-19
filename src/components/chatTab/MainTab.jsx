import Image from "next/image";
import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { BiSolidMessageAltEdit } from "react-icons/bi";

const MainTab = () => {
  return (
    <div className="bg-slate-900 w-full h-full">
      <div className="flex justify-between w-full items-center px-4 border-b border-accent">
        <p className="text-primary flex gap-2 items-center font-bold text-xl   py-2">
          <BsFillChatLeftTextFill className="text-primary" />
          <span>Chat Rooms </span>
        </p>
        <BiSolidMessageAltEdit
          size={24}
          className="cursor-pointer hover:text-primary"
        />
      </div>

      <div className="flex flex-col py-6">
        <p className="text-lg font-medium text-white/70 flex items-center gap-1 px-4">
          <TiGroup />
          Groups
        </p>
        <div className="flex flex-col divide-accent divide-y-2 ">
          <div className="flex gap-2 px-4 py-2 hover:bg-accent cursor-pointer">
            <div className="relative w-12 h-12 rounded-xl">
              <Image src={"/icon1.png"} fill alt="logo" />
            </div>
            <div className="flex flex-col items-start px-4 w-full">
              <p className="font-normal text-white text-lg flex justify-between w-full items-center">
                <span>Group Name</span>
                <span className=" text-xs font-normal text-gray-400">9:41</span>
              </p>
              <p className="font-normal text-gray-300 text-sm -mt-1 italic">
                This is a text message send by someone.
              </p>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-2 hover:bg-accent cursor-pointer">
            <div className="relative w-12 h-12 rounded-xl">
              <Image src={"/icon2.png"} fill alt="logo" />
            </div>
            <div className="flex flex-col items-start px-4 w-full">
              <p className="font-normal text-white text-lg flex justify-between w-full items-center">
                <span>Group Name</span>
                <span className=" text-xs font-normal text-gray-400">9:58</span>
              </p>
              <p className="font-normal text-gray-300 text-sm -mt-1 italic">
                This is a text message send by someone.
              </p>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-2 hover:bg-accent cursor-pointer">
            <div className="relative w-12 h-12 rounded-xl">
              <Image src={"/icon3.png"} fill alt="logo" />
            </div>
            <div className="flex flex-col items-start px-4 w-full">
              <p className="font-normal text-white text-lg flex justify-between w-full items-center">
                <span>Group Name</span>
                <span className=" text-xs font-normal text-gray-400">9:08</span>
              </p>
              <p className="font-normal text-gray-300 text-sm -mt-1 italic">
                This is a text message send by someone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTab;
