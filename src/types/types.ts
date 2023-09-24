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

export type SortingCriteriaType = {
    title: string;
    description: string;
    price: string;
    email: string;
}

export type SearchModeType = "regular" | "favorite";

export type QueriesType = {
    regular: string,
    favorite: string
}
export type SearchQueriesContextType = {
    queries: QueriesType,
    setQueries: Function
}

