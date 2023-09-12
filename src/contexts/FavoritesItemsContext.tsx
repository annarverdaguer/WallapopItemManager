import { createContext } from "react";
import { ItemContextType } from "../types/types";

const FavoritesItemContextDefaults: ItemContextType = {
    items: [],
    setItems: () => { }
}

export const FavoritesItemsContext = createContext(FavoritesItemContextDefaults);