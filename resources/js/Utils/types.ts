export interface IOrder {
    id: number;
    customer_id: number;
    chef_id: number;
    deliveryman_id: number;
    status: "pending" | "in_progress" | "completed";
    created_at: null;
    updated_at: null;
    chef: IUser;
    products: IProduct[];
    deliveryman: IUser;
    customer: IUser;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: null;
    updated_at: null;
    role_id: number;
}

export interface IProduct {
    id: number;
    name: string;
    sub_title: string;
    description: string;
    price: string;
    sale_price: null;
    image_url: string;
    created_at: null;
    updated_at: null;
    category_id: number;
    pivot: {
        quantity: number;
        is_done: boolean;
    };
}
