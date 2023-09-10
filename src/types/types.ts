export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
    // meetsSearchQuery?: boolean;
    // favorite?: boolean;
}

export type ItemContextType = { items: Array<Item>, setItems: Function }