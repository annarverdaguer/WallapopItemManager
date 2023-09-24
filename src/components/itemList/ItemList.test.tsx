import { ItemsContext } from "@/contexts/ItemsContext";
import ItemList from "./ItemList"
import { fireEvent, render, RenderResult } from "@testing-library/react"
import { TESTING_ARRAY_OF_ITEMS } from "@/constants";
import setItems from "@/app/page"

describe("<ItemList />", () => {
    let itemList: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        itemList = render(
            <ItemsContext.Provider value={{ items: TESTING_ARRAY_OF_ITEMS, setItems: setItems }}>
                <ItemList />
            </ItemsContext.Provider>);
    })

    test('Verifying item list is rendered', () => {
        const itemListElement = itemList.getByText('', { selector: '.item-list' });
        expect(itemListElement).toBeDefined();
    })

    test('Verifying item list has a sorting bar', () => {
        const sortingButton = itemList.getByText(/title/);
        expect(sortingButton).toBeDefined();
    })

    test('Verifying item list has three items', () => {
        const itemCards = itemList.getAllByText('', { selector: '.item-card' });
        expect(itemCards.length).toBe(3);
    })

    test('Verifying item list has pagination', () => {
        const itemListPagination = itemList.getByText('', { selector: '.item-list-pagination' });
        expect(itemListPagination).toBeDefined();
    })

    test('Verifying item list can be sorted by title', () => {
        const sortingButton = itemList.getByText(/title/);
        fireEvent.click(sortingButton);
        const itemCards = itemList.getAllByText('', { selector: '.item-card' });
        const firstItemTitle = itemCards[0].querySelector('.item-title')?.textContent;
        expect(firstItemTitle).toBe("Barbacoa");
        const secondItemTitle = itemCards[1].querySelector('.item-title')?.textContent;
        expect(secondItemTitle).toBe("iPhone 6S Oro");
        const thirdItemTitle = itemCards[2].querySelector('.item-title')?.textContent;
        expect(thirdItemTitle).toBe("Polaroid 635");
    })

    test('Verifying item list can be sorted by description', () => {
        const sortingButton = itemList.getByText(/description/);
        fireEvent.click(sortingButton);
        const itemCards = itemList.getAllByText('', { selector: '.item-card' });
        const firstItemTitle = itemCards[0].querySelector('.item-title')?.textContent;
        expect(firstItemTitle).toBe("Barbacoa");
        const secondItemTitle = itemCards[1].querySelector('.item-title')?.textContent;
        expect(secondItemTitle).toBe("Polaroid 635");
        const thirdItemTitle = itemCards[2].querySelector('.item-title')?.textContent;
        expect(thirdItemTitle).toBe("iPhone 6S Oro");
    })

    test('Verifying item list can be sorted by price', () => {
        const sortingButton = itemList.getByText(/price/);
        fireEvent.click(sortingButton);
        const itemCards = itemList.getAllByText('', { selector: '.item-card' });
        const firstItemTitle = itemCards[0].querySelector('.item-title')?.textContent;
        expect(firstItemTitle).toBe("Polaroid 635");
        const secondItemTitle = itemCards[1].querySelector('.item-title')?.textContent;
        expect(secondItemTitle).toBe("Barbacoa");
        const thirdItemTitle = itemCards[2].querySelector('.item-title')?.textContent;
        expect(thirdItemTitle).toBe("iPhone 6S Oro");
    })

    test('Verifying item list can be sorted by email', () => {
        const sortingButton = itemList.getByText('email');
        fireEvent.click(sortingButton);
        const itemCards = itemList.getAllByText('', { selector: '.item-card' });
        const firstItemTitle = itemCards[0].querySelector('.item-title')?.textContent;
        expect(firstItemTitle).toBe("Barbacoa");
        const secondItemTitle = itemCards[1].querySelector('.item-title')?.textContent;
        expect(secondItemTitle).toBe("Polaroid 635");
        const thirdItemTitle = itemCards[2].querySelector('.item-title')?.textContent;
        expect(thirdItemTitle).toBe("iPhone 6S Oro");
    })

})