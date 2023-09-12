export type ItemType = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export type ItemContextType = { items: Array<ItemType>, setItems: Function }