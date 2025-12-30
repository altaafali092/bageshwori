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
import { BookOpen, Building2Icon, Dessert, Folder, LayoutGrid, LucideSettings2, MessageCircleMore, PackageSearch, Shield, SlidersIcon, SquareMenu, Text, User2Icon, UserPen } from 'lucide-react';
import AppLogo from './app-logo';
import { dashboard } from '@/routes/admin';
import { index as sliderIndex } from '@/routes/admin/sliders';
import { index as roleIndex } from '@/routes/admin/roles';
import { index as permissionIndex } from '@/routes/admin/permissions';
import { index as userIndex } from '@/routes/admin/users';
import { index as categoryIndex } from '@/routes/admin/categories';
import { index as productIndex } from '@/routes/admin/products';
import { index as IndexBlog } from '@/routes/admin/blogs';
import { index as contactIndex } from '@/routes/admin/contacts';
import { index } from '@/routes/admin/office-setting';
import { index as menuIndex } from '@/routes/admin/menu-setting';
import { index as promoTextIndex } from '@/routes/admin/promo-text';

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
        href: IndexBlog(),
        icon: BookOpen,
    },
    {
        title: 'Promo Text',
        href: promoTextIndex(),
        icon: Text,
    },
    {
        title: "Product",
        href: "#",
        icon: PackageSearch,
        items: [
            {
                title: " Parent Categories",
                href: categoryIndex(),
                icon: Shield
            },
            {
                title: "Products",
                href: productIndex(),
                icon: PackageSearch
            },


        ]
    },
    {
        title: "Contact",
        href: contactIndex(),
        icon: MessageCircleMore,

    },
    {
        title: "Settings",
        href: "#",
        icon: LucideSettings2,
        items: [
            {
                title: "Permissions",
                href: permissionIndex(),
                icon: Shield
            },
            {
                title: "Roles",
                href: roleIndex(),
                icon: UserPen
            },
            {
                title: "Users",
                href: userIndex(),
                icon: User2Icon
            },
            {
                title: "Office Settings",
                href: index(),
                icon: Building2Icon
            },
            {
                title: "Menu Settings",
                href: menuIndex(),
                icon: SquareMenu
            },

        ]
    },

];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
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
