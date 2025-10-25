import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem, type PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import useFlashToast from '@/components/useFlashToast';
import { ServerPagination } from '@/components/ServerPagination';
import { Blogs } from '@/types/Admin/Blogs';
import { create, index } from '@/routes/admin/blogs';


interface Props {
    blogs: PaginatedData<Blogs>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs',
        href: index().url,
    },
];

export default function CategoryIndex({ blogs }: Props) {
    useFlashToast()
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Blogs</h1>
                        <p className="text-muted-foreground">
                            Manage application Blogs and access controls.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Blog
                        </Link>
                    </Button>
                </div>

                {/* Data Table */}
                <div className="flex-1">
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={blogs.data} />
                        <ServerPagination
                            page={blogs.current_page}
                            lastPage={blogs.last_page}
                            total={blogs.total}
                            from={blogs.from}
                            to={blogs.to}
                            links={blogs.links}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
