import Navbar from './Navbar';
import { Link, usePage } from '@inertiajs/react';
import { aboutUs, blogIndex, categorywiseProduct, home } from '@/routes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { GlobalCategories } from '@/types/Frontend';


interface CategoryProps {
    globalCategories: GlobalCategories[] | null,
}
const Header = () => {
    const { url } = usePage()
    const { globalCategories } = usePage<CategoryProps>().props;


    return (
        <div className="bg-gray-50 flex flex-col">

            <Navbar />

            {/* 🔹 Navigation */}
            <div className="bg-white border-b  sticky top-0 ">
                <div className="max-w-7xl mx-auto px-4 flex gap-4 py-2 overflow-x-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition whitespace-nowrap">
                                Select Category
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='px-8' align="start">
                            {globalCategories?.map((category, idx) => (
                                <DropdownMenuItem key={idx} className="p-0">
                                    <Link
                                        href={categorywiseProduct(category.slug)}
                                        className="block w-full px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                    >
                                        {category.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}


                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Home */}
                    <Link
                        href={home().url}
                        className={`px-4 py-2  font-bold whitespace-nowrap transition ${url === "/" ? "text-yellow-400" : "text-gray-700 hover:text-yellow-500"
                            }`}
                    >
                        Home
                    </Link>

                    {/* Blog */}
                    <Link
                        href={blogIndex().url}
                        className={`px-4 py-2 font-bold  whitespace-nowrap transition ${url.startsWith("/blog") ? "text-yellow-400" : "text-gray-700 hover:text-yellow-500"
                            }`}
                    >
                        Blog
                    </Link>

                    {/* About */}
                    <Link
                        href={aboutUs()}
                        className={`px-4 py-2 font-bold  whitespace-nowrap transition ${url.startsWith("/about") ? "text-yellow-400" : "text-gray-700 hover:text-yellow-500"
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