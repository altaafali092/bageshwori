export type Product = {
    id: number,
    name: string,
    category_id: number,

    slug: string,
    description: string,
    image: string,
    status: boolean,
    is_featured: boolean,
    in_stock: boolean,
    price: number,
    created_at: Date,
    updated_at: Date,
}