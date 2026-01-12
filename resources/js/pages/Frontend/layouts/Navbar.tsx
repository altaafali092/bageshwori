import { home, login, logout, userProfile } from '@/routes'
import { SharedData } from '@/types'
import { Link, useForm, usePage } from '@inertiajs/react'
import { Facebook, Instagram, MapPin, Phone, SearchIcon, LogOut, User } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
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
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-emerald-600 dark:bg-emerald-700 text-white py-2 px-4 transition-colors">
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
                        <Facebook size={18} className="cursor-pointer hover:text-emerald-200 transition-colors" />
                        <Instagram size={18} className="cursor-pointer hover:text-emerald-200 transition-colors" />
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link href={home()}>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                            {officeSettings?.office_name || ""}
                        </h1>
                    </Link>

                    <div className="flex items-center w-full gap-3 md:w-96">
                        <div className="flex items-center flex-1">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l-lg focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                            />
                            <button className="bg-yellow-400 dark:bg-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors">
                                <SearchIcon size={25} className="text-gray-800" />
                            </button>
                        </div>

                        {/* AUTH SECTION */}
                        {!user ? (
                            <Link
                                href={login()}
                                className="bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors whitespace-nowrap"
                            >
                                Login
                            </Link>
                        ) : (
                            <div className="relative" ref={dropdownRef}>
                                {/* Avatar Button */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    title={user.name}
                                    className="w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
                                >
                                    {initials}
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                            <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{user.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                                        </div>

                                        <Link
                                            href={userProfile()}
                                            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <User size={18} />
                                            <span>Profile</span>
                                        </Link>

                                        <Link
                                            href={logout()}
                                            className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
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
