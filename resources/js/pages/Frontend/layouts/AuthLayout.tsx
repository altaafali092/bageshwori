import React from "react"

import { usePage } from "@inertiajs/react"
import { type SharedData } from "@/types"
import Header from "./Header";
import Footer from "./Footer";
import { Categories, GlobalCategories, OfficeSetting } from "@/types/Frontend";





interface AuthLayoutProps {
  children: React.ReactNode;

  // required
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { auth } = usePage<SharedData>().props; // Get auth data
  // console.log(categories);

  return (
    <div className="relative dark:bg-slate-950">
      <Header /> {/* Pass auth as a prop */}
      {children}

      <Footer />
    </div>
  )
}

export default AuthLayout