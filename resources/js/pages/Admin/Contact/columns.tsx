import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import {  Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Contact } from "@/types/Admin/Contact";

import { destroy, show } from "@/routes/admin/contacts";
import { status } from "@/actions/App/Http/Controllers/Admin/ContactController";




export const columns: ColumnDef<Contact>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    
         {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const images = row.getValue("image") as string | string[];
            const image = Array.isArray(images)
                ? images[Math.floor(Math.random() * images.length)]
                : images;

            return image ? (
                <img src={image} alt={row.getValue("name")} className="h-20 w-20 object-cover rounded" />
            ) : (
                <div className="h-20 w-20 rounded bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image
                </div>
            );
        },
    },
    {
        accessorKey: "name",
        header: "Title",
    },
    {
        accessorKey: "subject",
        header: "Subject",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const contact = row.original;
            const updateToggle = () => {
                // router.get(status(contact.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={contact.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${contact.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {contact.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const contact = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(contact.id)}>          
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this Contact?")) {
                                router.delete(destroy(contact.id), {
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
