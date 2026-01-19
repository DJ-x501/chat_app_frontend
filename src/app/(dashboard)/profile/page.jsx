import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import Image from "next/image";
import { FaEdit } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-full">
      <p className="text-primary flex gap-2 items-center font-bold text-xl border-b border-accent px-4 py-2">
        <IoMdSettings className="text-primary" />
        <span>Settings </span>
      </p>


      {/* profile main body content starts from here */}
      <div className="flex flex-col p-6 gap-6">
        <div className="flex flex-col border border-accent rounded-lg p-4 relative">
            <p className="absolute right-4 top-4 cursor-pointer hover:bg-accent px-2 py-1 rounded-md"><FaEdit size={24} className="text-primary"/></p>
            <div className="flex items-center gap-2 text-xl">
                <div className="relative w-12 h-12 rounded-lg">
                  <Image src={'/logo2.jpg'} fill alt="hero" className="rounded-md border-2 border-primary/50"/>
                </div>
              
              <div className="flex flex-col">
                 <span className="text-white font-medium ">Dhananjay Kumar</span>
                   <span className="text-gray-300 font-normal text-sm">dhananjay@zohomail.in</span>
              </div>
             
            </div>
            <p className="text-gray-200 font-medium mt-4 italic">Building the future of communication. Coffee enthusiast & code lover. Always learning, always growing. 🚀</p>
        </div>


        <div className="flex flex-col divide-y divide-accent border border-accent rounded-lg overflow-hidden ">
          <p className="py-2 px-2 text-gray-400 font-medium text-base">Settings</p>
          <div className="flex gap-4 items-center p-2 hover:bg-accent">
            <div className=" p-3 bg-primary/10 rounded-md"><FaBell className="text-primary"/></div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-gray-100">Notifications</p>
              <p className="text-sm font-normal text-gray-300">Latest alerts and announcements</p>
            </div>   
          </div>
          <div className="flex gap-4 items-center p-2 hover:bg-accent">
            <div className=" p-3 bg-primary/10 rounded-md"><FaShieldAlt className="text-primary"/></div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-gray-100">Privacy & Security</p>
              <p className="text-sm font-normal text-gray-300">End-to-end encryption for all communications</p>
            </div>   
          </div>
          <div className="flex gap-4 items-center p-2 hover:bg-accent">
            <div className=" p-3 bg-primary/10 rounded-md"><FaInfoCircle className="text-primary"/></div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-gray-100">Member Since</p>
              <p className="text-sm font-normal text-gray-300">29 Jan 2026 </p>
            </div>   
          </div>
        </div>
        <Button variant="destructive" className={`cursor-pointer mx-24`}>
            Logout
          </Button>
      </div>
    </div>
  );
};

export default page;
