export interface INewProduct {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    imgurl: string;
    price: number;
}
export interface IProduct extends INewProduct {
    slug: string;
}
