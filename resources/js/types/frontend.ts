export type Sliders={
    id:number,
    title:string,
    image:string,
    description:string,
    status:number,
    created_at:Date,
    updated_at:Date,
}

export type Categories={
    id:number,
    name:string,
    count:number,
    image:string,
    status:number,
    products_count:number,
}
export type Products={
    id:number,
    name:string,
    price:number,
    description:string,
    image:string,
    status:number,
    is_featured:number,
    category_id:number,
    created_at:Date,
    updated_at:Date,
    in_stock:number,
}

export type Blogs={
    id:number,
    title:string,
    subject:string,
    slug:string,
    description:string,
    image:string,
    user_id:number
    user:{
        id:number,
        name:string,
    }
    status:number,
    created_at:Date,
    updated_at:Date,
}