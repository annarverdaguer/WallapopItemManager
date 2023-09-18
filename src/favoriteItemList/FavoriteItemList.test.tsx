import { TESTING_ARRAY_OF_ITEMS } from "@/constants";
import FavoriteItemList from "./FavoriteItemList"
import { fireEvent, render, RenderResult } from "@testing-library/react"
import { ItemsContext } from "@/contexts/ItemsContext";
import setItems from "@/app/page"

describe("<FavoriteItemList />", () => {
    let favoriteItemList: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        favoriteItemList = render(
            <ItemsContext.Provider value={{ items: TESTING_ARRAY_OF_ITEMS, setItems: setItems }}>
                <FavoriteItemList />
            </ItemsContext.Provider>);
    })

    test('Verifying favorite items list appears', () => {
        const favoriteItemListWrap = favoriteItemList.getByText('', { selector: '.favorite-item-list' });
        expect(favoriteItemListWrap).toBeDefined();
    })

    test('Verifying favorite items list appears with items when there are favs', () => {
        const favoriteItemListWrap = favoriteItemList.getByText('', { selector: '.favorite-item-list' });
        const favoriteItemCard = favoriteItemListWrap.querySelector('.favorite-item-card');
        expect(favoriteItemCard).toBeDefined();
    })

    test('Verifying favorite items list appears with a search bar', () => {
        const favoriteItemListWrap = favoriteItemList.getByText('', { selector: '.favorite-item-list' });
        const searchBar = favoriteItemListWrap.querySelector('.search');
        expect(searchBar).toBeDefined();
    })

    test('Verifying I can search by title and results are expected', () => {
        const searchBar = favoriteItemList.getByPlaceholderText(/Type to search.../);
        fireEvent.input(searchBar, { target: { value: "iPhone" } });
        expect(searchBar).toHaveValue("iPhone");
        const favoriteItemListWrap = favoriteItemList.getByText('', { selector: '.favorite-item-list' });
        const favoriteItemTitle = favoriteItemListWrap.querySelector('.favorite-item-title')?.textContent;
        expect(favoriteItemTitle).toBe('iPhone 6S Oro');

    })

    test('Verifying I can remove an item from the favs list', () => {

    })
})