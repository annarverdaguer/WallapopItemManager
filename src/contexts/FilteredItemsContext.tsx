import { createContext } from "react";
import { ItemContextType } from "../types/types";

const FilteredItemContextDefaults: ItemContextType = {
    items: [],
    setItems: () => { }
}

export const FilteredItemsContext = createContext(FilteredItemContextDefaults);