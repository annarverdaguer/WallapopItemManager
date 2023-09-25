import { useContext, useState } from 'react';
import Item from '../item/Item';
import { ItemsContext } from '@/contexts/ItemsContext';
import { ItemType, SortingCriteriaType } from '@/types/types';
import Paginate from '@/components/pagination/Paginate';
import SortingBar from '../sortingBar/SortingBar';
import sortBy from '@/utils/sort';

export default function ItemList() {
    const { items } = useContext(ItemsContext)
    const [activeSortingCriteria, setActiveSortingCriteria] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const filteredItems = items.filter((item) => { return item.isInSearchQuery })
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    function handleClick(param: keyof ItemType) {
        setActiveSortingCriteria(param);
        paginate(1);
    }

    function renderSortedItems(items: ItemType[], sortingCriteria?: keyof SortingCriteriaType) {
        let sortedItems = items;
        if (sortingCriteria) {
            sortedItems = sortBy(items, sortingCriteria);
        }
        const paginatedAndSortedItems = sortedItems.slice(indexOfFirstPost, indexOfLastPost);
        return paginatedAndSortedItems.map((item: ItemType, key) => <Item item={item} key={key} inModal={false} />)
    }

    function paginate(pageNUmber: number) {
        setCurrentPage(pageNUmber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className="item-list">
            <SortingBar activeSortingCriteria={activeSortingCriteria} handleClick={handleClick} />
            <div className='item-list-items'>
                {renderSortedItems(filteredItems, activeSortingCriteria as keyof SortingCriteriaType)}
            </div>
            <div className='item-list-pagination'>
                <Paginate postsPerPage={postsPerPage} totalPosts={filteredItems.length} paginate={paginate} currentPage={currentPage} />
            </div>
        </div>
    )
}