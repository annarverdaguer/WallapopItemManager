export type ItemType = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
    isInSearchQuery: boolean;
    isFav: boolean;
}

export type ItemContextType = { items: Array<ItemType>, setItems: Function }

