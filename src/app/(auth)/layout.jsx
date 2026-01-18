import Image from "next/image"

export const metadata = {
    title:"auth page",
    description:"random page"
}

export default function RootLayout({children}){
    return (
        <>  
            <div className="flex relative w-screen h-screen divide-x-2 divide-accent">
                <div className="w-[35%] h-full">
                    {children}
                </div>
                
                <div className="relative w-[65%] h-full">
                    <Image src={'/auth2.jpg'} fill alt="auth"/>
                </div>
            
            </div>
        </>
    )
}