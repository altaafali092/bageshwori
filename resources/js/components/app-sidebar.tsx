import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, ImageOff, LayoutGrid, LucideSettings2, MessageCircleMore, PackageSearch, Shield, SlidersIcon, User2Icon, UserPen, UserRound } from 'lucide-react';
import AppLogo from './app-logo';
import { dashboard } from '@/routes/admin';
import { index as permissionsIndex } from '@/routes/admin/permissions';
import { index as rolesIndex } from '@/routes/admin/roles';
import { index as usersIndex } from '@/routes/admin/users';
import { index as categoriesIndex } from '@/routes/admin/categories';
import { index as productIndex } from '@/routes/admin/products';
import { index as contactsIndex } from '@/routes/admin/contacts';
import { index as sliderIndex } from '@/routes/admin/sliders';
import { index as blogIndex } from '@/routes/admin/blogs';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Slider',
        href: sliderIndex(),
        icon: SlidersIcon,
    },
    {
        title: 'Blogs',
        href:  blogIndex(),
        icon: BookOpen,
    },
    {
        title: "Product",
        href: "#",
        icon: PackageSearch,
        items: [
            {
                title: " Parent Categories",
                href: categoriesIndex(),
                icon: Shield
            },
            {
                title: "Products",
                href: productIndex(),
                icon: PackageSearch
            },
          
            {
                title: "Users",
                href: usersIndex(),
                icon: User2Icon
            },

        ]
    },
    {
        title: "Settings",
        href: "#",
        icon: LucideSettings2,
        items: [
            {
                title: "Permissions",
                href: permissionsIndex(),
                icon: Shield
            },
            {
                title: "Roles",
                href: rolesIndex(),
                icon: UserPen
            },
            {
                title: "Users",
                href: usersIndex(),
                icon: User2Icon
            },

        ]
    },
    {
        title: "Contact",
        href: contactsIndex(),
        icon: MessageCircleMore,
        
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
