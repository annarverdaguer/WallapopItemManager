import Paginate, { IPaginationProps } from "./Paginate"
import { render, RenderResult } from "@testing-library/react"

describe("<Paginate />", () => {
    let pagination: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    let props: IPaginationProps;

    beforeEach(() => {
        props = { postsPerPage: 6, totalPosts: 40, paginate: (() => { }), currentPage: 3 }
        pagination = render(<Paginate postsPerPage={props.postsPerPage} totalPosts={props.totalPosts} paginate={props.paginate} currentPage={props.currentPage} />);
    })

    test('Verifying pagination is rendered', () => {
        const firstPage = pagination.getByText(/1/);
        expect(firstPage).toBeDefined();
    })

    test('Verifying number of pages is as expected', () => {
        const lastPage = pagination.getByText(/7/);
        expect(lastPage).toBeDefined();
    })

    test('Verifying pagination active page', () => {
        const activePageClassList = pagination.getByText(/3/).classList;
        expect(activePageClassList[1]).toContain('button-active')
    })
})