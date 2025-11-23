import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem, type PaginatedData } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import { Permission } from '@/types/Admin/permission';
import { create, index } from '@/routes/admin/permissions';
import useFlashToast from '@/components/useFlashToast';
import Pagination from '@/components/Pagination';








interface Props {
  permissions: PaginatedData<Permission>
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Permissions',
    href: index().url,
  },
];

export default function PermissionIndex({ permissions }: Props) {
  useFlashToast()
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Permissions" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Permissions</h1>
            <p className="text-muted-foreground">
              Manage application permissions and access controls.
            </p>
          </div>
          <Button asChild>
            <Link href={create().url} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Permission
            </Link>
          </Button>
        </div>

        {/* Data Table */}
        <div className="flex-1">
          <div className="container mx-auto py-10">

            <DataTable columns={columns} data={permissions.data} />
            {/* Pagination */}
            <Pagination links={permissions.links} />

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
