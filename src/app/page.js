import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaSkull } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center w-screen h-screen">
          <Image src={'/home.jpg'} alt="home" fill/>
          <div className="absolute w-screen h-screen bg-black/50 z-2"/>
          <div className="flex flex-col relative z-4 justify-center items-center gap-6">
            <p className="text-gray-300 font-semibold text-xl max-w-xl text-center">
              Share your thoughts openly while remaining completely anonymous and untraceable forever.
            </p>
            <p className="text-primary flex gap-4 items-center font-bold text-7xl">
              <FaSkull className="text-primary"/>
              <span>WhisperNet </span>
            </p>
            <div className="flex gap-4 items-center justify-center">
              <Button  className={`text-xl font-medium cursor-pointer`}><Link href={"/login"}>Sign In</Link></Button>
              <Button variant="secondary" className={`text-xl font-medium cursor-pointer`}><Link href={"/register"}>Sign Up</Link></Button>
            </div>
          </div>
      </div>
    </>
  );
}
