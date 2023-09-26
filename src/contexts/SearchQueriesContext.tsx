import { createContext } from "react";
import { SearchQueriesContextType } from "../types/types";

const SearchQueriesDefaults: SearchQueriesContextType = {
    queries: {
        regular: "",
        favorite: ""
    },
    setQueries: () => { }
}

export const SearchQueriesContext = createContext(SearchQueriesDefaults);