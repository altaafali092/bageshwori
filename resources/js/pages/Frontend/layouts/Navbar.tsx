import { Facebook, Instagram, MapPin, Phone, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <>
            <div className="bg-emerald-600 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap gap-3">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            2345 Beach Rd, Metrocity USA, HWY 1235
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={16} /> +1 (000) 012-3456
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="hover:text-yellow-300 transition whitespace-nowrap"
                        >
                            Track your order
                        </a>
                        <div className="flex gap-3 items-center">
                            <Facebook
                                size={18}
                                className="cursor-pointer hover:text-yellow-300 transition"
                            />
                            <Instagram
                                size={18}
                                className="cursor-pointer hover:text-yellow-300 transition"
                            />
                            {/* X / Twitter Icon */}
                            <svg
                                className="w-4 h-4 cursor-pointer hover:text-yellow-300 transition"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            {/* WhatsApp */}
                            <svg
                                className="w-4 h-4 cursor-pointer hover:text-yellow-300 transition"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Main Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
                        Bageshwori Kennel House
                    </h1>
                    <div className="flex items-center w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-emerald-500"
                        />
                        <button className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-r-lg">
                            <SearchIcon size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar