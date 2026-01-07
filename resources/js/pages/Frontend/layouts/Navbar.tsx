import { login, logout, userProfile } from '@/routes'
import { SharedData } from '@/types'
import { Link, useForm, usePage } from '@inertiajs/react'
import { Facebook, Instagram, MapPin, Phone, SearchIcon, LogOut, User } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-emerald-600 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap gap-3">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {officeSettings?.office_address || ''}

                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={16} />
                            {officeSettings?.office_phone || ""}

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
                        {officeSettings?.office_name || ""}
                        
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
                            <div className="relative" ref={dropdownRef}>
                                {/* Avatar Button */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    title={user.name}
                                    className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold hover:bg-emerald-700 transition-colors"
                                >
                                    {initials}
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                                        <div className="px-4 py-2 border-b border-gray-200">
                                            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>

                                        <Link
                                            href={userProfile()}
                                            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            <User size={18} />
                                            <span>Profile</span>
                                        </Link>

                                        <Link
                                            href={logout()}
                                            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
