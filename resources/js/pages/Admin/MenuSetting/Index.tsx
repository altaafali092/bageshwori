import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem, type PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import useFlashToast from '@/components/useFlashToast';


import Pagination from '@/components/Pagination';
import { MenuSetting } from '@/types/Admin/MenuSetting';
import { create, index } from '@/routes/admin/menu-setting';

interface Props {
    menuSettings: PaginatedData<MenuSetting>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu Setting',
        href: index().url,
    },
];

export default function Index({ menuSettings }: Props) {
    useFlashToast()
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu Setting" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Menu Setting</h1>
                        <p className="text-muted-foreground">
                            Manage application Menu and access controls.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Menu
                        </Link>
                    </Button>
                </div>

                {/* Data Table */}
                <div className="flex-1">
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={menuSettings.data} />
                        <Pagination
                            links={menuSettings.links}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
