import { home } from '@/routes'
import { Link } from '@inertiajs/react'
import { ArrowLeft, Home } from 'lucide-react'
import React from 'react'

const NavLogin = () => {
    const handleBack = () => window.history.back()
    return (
        <div> <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold text-emerald-400">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <span className="text-white text-lg">B</span>
                </div>
                Bageshwori
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={handleBack}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                    title="Go back"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <Link
                    href={home()}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                    title="Home"
                >
                    <Home className="h-5 w-5" />
                </Link>
            </div>

        </div></div>
    )
}

export default NavLogin