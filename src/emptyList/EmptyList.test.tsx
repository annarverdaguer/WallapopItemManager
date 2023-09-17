import EmptyList from "./EmptyList"
import { render, RenderResult } from "@testing-library/react"

describe("<EmptyList />", () => {
    let emptyList: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        emptyList = render(<EmptyList message={"I'm a list without results, how sad is that"} />);
    })

    test('Verifying item list is rendered', () => {
        const message = emptyList.getByText(/I'm a list without results, how sad is that/);
        expect(message).toBeDefined();
    })
})