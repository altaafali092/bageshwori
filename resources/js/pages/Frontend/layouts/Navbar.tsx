import { login, logout } from '@/routes'
import { SharedData } from '@/types'
import { Link, useForm, usePage } from '@inertiajs/react'
import { Facebook, Instagram, MapPin, Phone, SearchIcon, LogOut, User } from 'lucide-react'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const { officeSettings, auth } = usePage<SharedData>().props

    const { post } = useForm()

    const user = auth.user

    const initials = user
        ? user.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
        : ''

    return (
        <>
            {/* TOP BAR */}
            <div className="hidden md:block bg-emerald-600 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap gap-3">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {officeSettings.office_address || ""}
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={16} />
                            {officeSettings.office_phone || ""}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Facebook size={18} />
                        <Instagram size={18} />
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                    {/* LOGO */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 order-1">
                        {officeSettings.office_name || ""}
                    </h1>

                    {/* SEARCH BAR */}
                    <div className="w-full md:w-96 order-3 md:order-2">
                        <div className="flex items-center w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-emerald-500 min-w-0"
                            />
                            <button className="bg-yellow-400 px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors flex-shrink-0">
                                <SearchIcon size={20} />
                            </button>
                        </div>
                    </div>

                    {/* AUTH SECTION */}
                    {/* AUTH SECTION */}
                    <div className="order-2 md:order-3 flex-shrink-0">
                        {!user ? (
                            <Link
                                href={login()}
                                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors text-sm md:text-base whitespace-nowrap"
                            >
                                Login
                            </Link>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        aria-label="User menu"
                                        className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-semibold shadow-md
                    ring-2 ring-emerald-100 hover:ring-emerald-200 active:scale-95 transition-all"
                                    >
                                        {initials}
                                    </button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    sideOffset={8}
                                    className="w-56 rounded-xl p-2 shadow-lg"
                                >
                                    {/* USER INFO */}
                                    <div className="px-2 py-2">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate">
                                            {user.email}
                                        </p>
                                    </div>

                                    <DropdownMenuSeparator />

                                    {/* LOGOUT */}
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer rounded-md focus:bg-red-50 focus:text-red-600"
                                    >
                                        <Link
                                            href={logout()}
                                            method="post"
                                            as="button"
                                            className="w-full flex items-center gap-2 px-2 py-2 text-red-600"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            Logout
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
