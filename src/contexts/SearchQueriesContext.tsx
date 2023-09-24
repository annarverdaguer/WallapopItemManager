import { createContext } from "react";
import { ItemContextType, SearchQueriesContextType } from "../types/types";

const SearchQueriesDefaults: SearchQueriesContextType = {
    queries: {
        regular: "",
        favorite: ""
    },
    setQueries: () => { }
}

export const SearchQueriesContext = createContext(SearchQueriesDefaults);