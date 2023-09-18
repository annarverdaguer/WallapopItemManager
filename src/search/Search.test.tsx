import Search from "./Search"
import { fireEvent, render, RenderResult } from "@testing-library/react"

describe("<Search />", () => {
    let search: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        search = render(<Search />);
    })

    test('Verifying search is rendered', () => {
        const searchBar = search.getByPlaceholderText(/Type to search.../);
        expect(searchBar).toBeDefined();
    })

    test('Verifying empty search input', () => {
        const searchBar = search.getByPlaceholderText(/Type to search.../);
        fireEvent.input(searchBar, { target: { value: "" } });
        expect(searchBar).toHaveValue("");
    })

    test('Verifying full search input', () => {
        const searchBar = search.getByPlaceholderText(/Type to search.../);
        fireEvent.input(searchBar, { target: { value: "iPhone" } });
        expect(searchBar).toHaveValue("iPhone");
    })
})