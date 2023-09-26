import Header from "./Header"
import { fireEvent, render, RenderResult } from "@testing-library/react"

describe("<Header />", () => {
    let header: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        header = render(<Header />);
    })

    test('Verifying header title is rendered', () => {
        const title = header.getByText(/✨ Item Manager ✨/);
        expect(title).toBeDefined();
    })

    test('Verifying header favorite button is rendered', () => {
        const button = header.getByText(/Favs 💖/);
        expect(button).toBeDefined();
    })

    test('Verifying if modal opens and closes', async () => {
        const button = header.getByText(/Favs 💖/);
        fireEvent.click(button);
        const modal = header.findByText(/Your favorite items/);
        expect(modal).toBeDefined;

        const closeButton = header.findByText(/X/);
        fireEvent.click(await closeButton);
        expect(modal).not.toBeDefined;
    })
})