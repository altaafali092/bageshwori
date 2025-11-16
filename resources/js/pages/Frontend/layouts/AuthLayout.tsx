import React from "react"

import { usePage } from "@inertiajs/react"
import { type SharedData } from "@/types"
import Header from "./Header";
import Footer from "./Footer";
import { officeSetting } from "@/types/frontend";




interface AuthLayoutProps {
  children: React.ReactNode;
  officeSettings:  officeSetting  | null;
}

const AuthLayout = ({ children,officeSettings }:AuthLayoutProps) => {
  const { auth } = usePage<SharedData>().props; // Get auth data

  return (
    <div className="relative">
      <Header /> {/* Pass auth as a prop */}
      {children}

      <Footer  officeSettings={officeSettings}/>
    </div>
  )
}

export default AuthLayout