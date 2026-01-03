import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { PromoText } from "@/types/Admin/PromoText";
import promoText, { destroy, edit } from "@/routes/admin/promo-text";


export const columns: ColumnDef<PromoText>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "title",
        header: "Title",
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const promoText = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(promoText.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>

                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this Product?")) {
                                router.delete(destroy(promoText.id), {
                                    preserveScroll: true,
                                });
                            }
                        }}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];
