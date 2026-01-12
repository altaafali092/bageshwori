export type Blog = {
    id: number;
    title: string;
    subject: string;
    description: string;
    image: string[] | null;
    status: boolean;
    slug: string;
    user_id: number;
    user: {
        id: number;
        name: string;
    }
    created_at: string;
    updated_at: string;
}