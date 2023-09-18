export type ItemType = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
    isInSearchQuery?: boolean;
    isFav: boolean;
    isInFavSearchQuery?: boolean;
}

export type ItemContextType = { items: Array<ItemType>, setItems: Function }

