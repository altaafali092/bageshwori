import Navbar from './Navbar';
import { Link, usePage } from '@inertiajs/react';
import { categorywiseProduct } from '@/routes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button'; // Assuming Button component path
import { GlobalCategories, MenuItem } from '@/types/Frontend';
import { ChevronDown } from 'lucide-react'; // Assuming lucide-react is available for icons

interface CategoryProps {
    globalCategories: GlobalCategories[] | null;
}

const Header = () => {
    const { url } = usePage();
    const { globalCategories } = usePage<CategoryProps>().props;
    const { menuSettings } = usePage<{ menuSettings: MenuItem[] }>().props;

    return (
        <div className="bg-gray-50 flex flex-col">
            <Navbar />

            <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 py-3 overflow-x-auto">

                    {/* 🔽 Category Selector */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="default"
                                className="bg-emerald-600 hover:bg-emerald-700 shadow-sm whitespace-nowrap"
                            >
                                Select Category
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="start"
                            className="w-56"
                        >
                            {globalCategories?.map((category, idx) => (
                                <DropdownMenuItem key={idx} asChild>
                                    <Link
                                        href={categorywiseProduct(category.slug)}
                                        className="w-full h-full block px-2 py-1.5"
                                    >
                                        {category.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {menuSettings.map((menu) =>
                        menu.children?.length > 0 ? (
                            <DropdownMenu key={menu.id}>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="whitespace-nowrap flex items-center gap-1 text-gray-700 hover:text-emerald-600"
                                    >
                                        {menu.title}
                                        <ChevronDown className="ml-1 h-3 w-3" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="start"
                                    className="w-56"
                                >
                                    {menu.children.map((child) => (
                                        <DropdownMenuItem key={child.id} asChild>
                                            <Link
                                                href={child.url}
                                                className="w-full h-full block px-2 py-1.5"
                                            >
                                                {child.title}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button
                                key={menu.id}
                                variant="ghost"
                                asChild
                                className="whitespace-nowrap text-gray-700 hover:text-emerald-600"
                            >
                                <Link href={menu.url}>
                                    {menu.title}
                                </Link>
                            </Button>
                        )
                    )}


                </div>
            </div>
        </div>
    );
};

export default Header;
