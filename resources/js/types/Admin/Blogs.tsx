export type Blogs={
    id:number;
    title:string;
    description:string;
    image:string|null;
    status:boolean;
    auther_name:string|null;
    created_at:Date;
    updated_at:Date;
    deleted_at:Date|null;
}