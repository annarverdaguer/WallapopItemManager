import { createContext } from "react";
import { ItemContextType } from "../types/types";

const ItemContextDefaults: ItemContextType = {
    items: [],
    setItems: () => { }
}

export const ItemsContext = createContext(ItemContextDefaults);