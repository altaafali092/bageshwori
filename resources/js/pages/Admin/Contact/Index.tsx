import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem, type PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import useFlashToast from '@/components/useFlashToast';
import Pagination from '@/components/Pagination';
import { Contact } from '@/types/Admin/Contact';

// import { create, index } from '@/routes/admin/contacts';

interface Props {
    contacts: PaginatedData<Contact>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contacts',
        // href: index().url,
        href: "#",
    },
];

export default function ContactIndex({ contacts }: Props) {
    useFlashToast()
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Contact List</h1>
                        <p className="text-muted-foreground">
                            Show all the list of contacts.
                        </p>
                    </div>

                </div>

                {/* Data Table */}
                <div className="flex-1">
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={contacts.data} />
                        <Pagination links={contacts.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
