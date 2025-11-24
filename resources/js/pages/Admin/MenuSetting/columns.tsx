import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { destroy, edit, show, stock } from "@/routes/admin/products";
import { Product } from "@/types/Admin/Product";



export const columns: ColumnDef<Product>[] = [
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
        accessorKey: "category.name",
        header: "Category",
    },
    {
        accessorKey: "in_stock",
        header: "In Stock",
        cell: ({ row }) => {
            const category = row.original;
            const updateToggle = () => {
                router.get(stock(category.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={category.in_stock}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${category.in_stock ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {category.in_stock ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const product = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(product.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(product.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this Product?")) {
                                router.delete(destroy(product.id), {
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
