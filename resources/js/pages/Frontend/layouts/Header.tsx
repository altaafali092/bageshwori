
import Navbar from './Navbar';
import { Link, usePage } from '@inertiajs/react';
import { aboutUs, blogIndex, home } from '@/routes';

const Header = () => {
    const { url } = usePage()

    return (
        <div className="bg-gray-50 flex flex-col">

            <Navbar />

            {/* 🔹 Navigation */}
            <div className="bg-white border-b  sticky top-0 ">
                <div className="max-w-7xl mx-auto px-4 flex gap-4 py-2 overflow-x-auto">
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition whitespace-nowrap">
                        Select Category
                    </button>

                    {/* Home */}
                    <Link
                        href={home()}
                        className={`px-4 py-2 font-medium whitespace-nowrap transition ${url.startsWith("/") ? "text-red-600" : "text-gray-700 hover:text-red-600"
                            }`}
                    >
                        Home
                    </Link>

                    {/* Blog */}
                    <Link
                        href={blogIndex().url}
                        className={`px-4 py-2 font-medium whitespace-nowrap transition ${url.startsWith("/blog") ? "text-red-600" : "text-gray-700 hover:text-red-600"
                            }`}
                    >
                        Blog
                    </Link>

                    {/* About */}
                    <Link
                        href={aboutUs()}
                        className={`px-4 py-2 font-medium whitespace-nowrap transition ${url.startsWith("/about") ? "text-red-600" : "text-gray-700 hover:text-red-600"
                            }`}
                    >
                        About
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header