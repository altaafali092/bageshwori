import React from "react"

import { usePage } from "@inertiajs/react"
import { type SharedData } from "@/types"
import Header from "./Header";
import Footer from "./Footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { auth } = usePage<SharedData>().props; // Get auth data

  return (
    <div className="relative">
      <Header  /> {/* Pass auth as a prop */}
      {children}
      
      <Footer />
    </div>
  )
}

export default AuthLayout