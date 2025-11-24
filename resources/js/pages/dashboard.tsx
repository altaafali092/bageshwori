import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes/admin';

import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className='p-5 text-2xl font-medium text-gray-600 dark:text-gray-400'>
                <h1>Welcome to the dashboard!!!</h1>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="bg-neutral-100 relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
                            <div className="items-center gap-5">
                                <h1 className="text-2xl mt-4 font-medium">Products</h1>
                                <h1 className="text-2xl text-center mt-3 text-gray-600 dark:text-gray-400">45</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="bg-neutral-100 relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
                                <div className="items-center gap-5">
                                    <h1 className="text-2xl mt-4 font-medium">Category</h1>
                                    <h1 className="text-2xl text-center mt-3 text-gray-600 dark:text-gray-400">54</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="bg-neutral-100 relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
                                <div className="items-center gap-5">
                                    <h1 className="text-2xl mt-4 font-medium">Slider</h1>
                                    <h1 className="text-2xl text-center mt-3 text-gray-600 dark:text-gray-400">33</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="bg-neutral-100 relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
                                <div className="items-center gap-5">
                                    <h1 className="text-2xl mt-4 font-medium">Blog</h1>
                                    <h1 className="text-2xl text-center mt-3 text-gray-600 dark:text-gray-400">2</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
