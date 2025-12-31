import { login, logout } from '@/routes'
import { SharedData } from '@/types'
import { Link, useForm, usePage } from '@inertiajs/react'
import { Facebook, Instagram, MapPin, Phone, SearchIcon, LogOut, User } from 'lucide-react'
import React, { useState } from 'react'

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
            <div className="bg-emerald-600 text-white py-2 px-4">
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
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {officeSettings.office_name || ""}
                    </h1>

                    <div className="flex items-center w-full gap-3 md:w-96">
                        <div className="flex items-center flex-1">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-emerald-500"
                            />
                            <button className="bg-yellow-400 px-4 py-2 rounded-r-lg">
                                <SearchIcon size={25} />
                            </button>
                        </div>

                        {/* AUTH SECTION */}
                        {!user ? (
                            <Link
                                href={login()}
                                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                            >
                                Login
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                {/* Avatar */}
                                <div
                                    title={user.name}
                                    className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold"
                                >
                                    {initials}
                                </div>

                                {/* Logout */}
                                <Link
                                    href={logout()}
                                    className="flex items-center gap-2 text-red-600 hover:text-red-700"
                                >
                                    <LogOut size={18} />

                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
