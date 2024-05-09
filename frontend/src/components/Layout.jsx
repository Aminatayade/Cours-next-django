"use client";

import { useSession } from "@/lib/useSession";
import Navbar from "./common/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }) {

     return (
          <div className="flex flex-col min-h-screen ">
               <Navbar isAuthenticated={true} />
               <main className="w-full">
                    {children}
               </main>
               {/* <Footer /> */}
          </div>
     );
}
