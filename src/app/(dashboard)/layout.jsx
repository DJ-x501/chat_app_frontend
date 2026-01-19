import MainTab from "@/components/chatTab/MainTab";
import Navbar from "@/components/chatTab/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Dashboard page",
  description: "random page",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex relative w-screen h-screen divide-x divide-accent">
        <div className="w-[15%] h-full">
          <Navbar />
        </div>

        <div className="relative w-[50%] h-full">{children}</div>
        <div className="w-[35%] h-full">
          <MainTab />
        </div>
      </div>
    </>
  );
}
