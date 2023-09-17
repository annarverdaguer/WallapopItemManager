
export type IPaginationProps = {
    postsPerPage: number;
    totalPosts: number;
    paginate: Function;
    currentPage: number;
}

export default function Paginate({ postsPerPage, totalPosts, paginate, currentPage }: IPaginationProps) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <button key={number} className={`pagination-page-number ${currentPage === number ? 'button-active' : ''}`} onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))}
            </ul>
        </div>
    );
};