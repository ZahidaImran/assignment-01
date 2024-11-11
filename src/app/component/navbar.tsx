import Image from "next/image"
import stationary from "../public/Stationary.jpg"

import Link from "next/link"
export default function Nevbar(){
return(
    <div className="p-2 items-center justify-between flex gap-5 text-base text-right border-4 border-double  border-gray-600 bg-gray-500"> 
        <h1 className="text-xl">Education Apparatus</h1>
        <div>
            <Image src={stationary} alt="Logo" className= "h-24 w-64"/>
        </div>
        
           <div className="items-center gap-5 flex">
             <Link href="/">Home</Link>
             <Link href="/stationary">Stationary</Link>
             <Link href="/Paintings">Paintings</Link>
             <Link href="/bags">Bags</Link>
             <Link href="/uniform">Uniform</Link>
            
             </div> 
    </div>
)
}