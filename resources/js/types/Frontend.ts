export type Sliders = {
    id: number,
    title: string,
    image: string,
    description: string,
    status: number,
    created_at: Date,
    updated_at: Date,
}

export type Categories = {
    id: number,
    name: string,
    count: number,
    image: string,
    status: number,
    products_count: number,
    slug: string
}

export type GlobalCategories = {
    id: number,
    name: string,
    count: number,
    image: string,
    status: number,
    products_count: number,
    slug: string
}
export type Product = {
    id: number,
    name: string,
    slug: string,
    price: number,
    description: string,
    image: string,
    status: number,
    is_featured: number,
    category_id: number,
    category: Categories[],
    created_at: Date,
    updated_at: Date,
    in_stock: number,
}

export type Blogs = {
    id: number,
    title: string,
    subject: string,
    slug: string,
    description: string,
    image: string[],
    user_id: number
    user: {
        id: number,
        name: string,
    }
    status: number,
    created_at: Date,
    updated_at: Date,
}

export type OfficeSetting = {
    office_name: string,
    office_logo: string,
    office_cover: string,
    office_banner: string,
    office_banner_two: string,
    office_email: string,
    office_phone: string,
    desc: string,
    office_address: string,
    office_google_map: string,
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    tiktok: string,
}

export interface MenuItem {
    id: number;
    title: string;
    slug: string;
    url: string;
    children: MenuItem[];
}

export type PromoText = {
    id: number,
    title: string,
    description: string,
    status: number,
    created_at: Date,
    updated_at: Date,
}


