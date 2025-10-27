
import Navbar from './Navbar';
import { Link } from '@inertiajs/react';
import { blogIndex } from '@/routes';

const Header = () => {

  return (
      <div className="bg-gray-50 flex flex-col">
                
               <Navbar/>

                {/* 🔹 Navigation */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 flex gap-4 py-2 overflow-x-auto">
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition whitespace-nowrap">
                            Select Category
                        </button>
                        <a
                            href="#"
                            className="text-red-500 px-4 py-2 hover:text-red-600 transition font-medium whitespace-nowrap"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 px-4 py-2 hover:text-emerald-600 transition font-medium whitespace-nowrap"
                        >
                            About
                        </a>
                        <Link
                            href={blogIndex().url}
                            className="text-gray-700 px-4 py-2 hover:text-emerald-600 transition font-medium whitespace-nowrap"
                        >
                            Blog
                        </Link>
                    </div>
                </div>

                {/* 🔹 Carousel + Button Section */}
               
            </div>
  )
}

export default Header