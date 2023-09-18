import { ItemsContext } from "@/contexts/ItemsContext";
import Home from "./page"
import { fireEvent, render, RenderResult } from "@testing-library/react"
import { TESTING_ARRAY_OF_ITEMS } from "@/constants";
import setItems from "@/app/page"
import Header from "@/header/Header";
import Search from "@/search/Search";
import ItemList from "@/itemList/ItemList";
import EmptyList from "@/emptyList/EmptyList";

describe("<Home />", () => {
    let home: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        home = render(
            <ItemsContext.Provider value={{ items: TESTING_ARRAY_OF_ITEMS, setItems: setItems }}>
                <Header />
                <Search />
                {
                    TESTING_ARRAY_OF_ITEMS.filter((item) => { return item.isInSearchQuery }).length >= 1 ?
                        <ItemList /> :
                        <EmptyList message="🕵️‍♀️ Search for an item to use Item Manager! 🕵️‍♀️" />
                }
            </ItemsContext.Provider>);
    })

    test('Verifying header is rendered', () => {
        const header = home.getByText(/✨ Item Manager ✨/);
        expect(header).toBeDefined();
    })

    test('Verifying search is rendered', () => {
        const search = home.getByPlaceholderText(/Type to search.../);
        expect(search).toBeDefined();
    })

    test('Verifying item list is rendered', () => {
        const itemList = home.getByText('', { selector: '.item-list' });
        expect(itemList).toBeDefined();
    })
})