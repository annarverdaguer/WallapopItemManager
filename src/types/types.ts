export type ItemType = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
    fav: boolean;
}

export type ItemContextType = { items: Array<ItemType>, setItems: Function }