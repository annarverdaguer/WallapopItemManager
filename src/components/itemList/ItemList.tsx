import { useContext, useState } from 'react';
import Item from '../item/Item';
import { ItemsContext } from '@/contexts/ItemsContext';
import { ITEM_FILTER_PARAMS } from '@/constants';
import { ItemType, SortingCriteriaType } from '@/types/types';
import Paginate from '@/components/pagination/Paginate';

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

    function sortBy(items: ItemType[], sortingCriteria: keyof SortingCriteriaType) {
        if (sortingCriteria === 'price') {
            items.sort((a, b) => parseInt(a.price) - parseInt(b.price))
        } else {
            items.sort((a: ItemType, b: ItemType) => a[sortingCriteria].toLowerCase() > b[sortingCriteria].toLowerCase() ? 1 : -1);
        }
        return items
    }

    function renderButtons() {
        const myButtons = ITEM_FILTER_PARAMS.map((filterParam, key) => {
            return <button className={activeSortingCriteria === filterParam ? 'button-active' : ''} onClick={() => { handleClick(filterParam) }} key={key}> {filterParam} </button>
        })
        return myButtons
    }

    function renderSortedItems(items: ItemType[], sortingCriteria?: keyof SortingCriteriaType) {
        let sortedItems = items;
        if (sortingCriteria) {
            sortedItems = sortBy(items, sortingCriteria);
        }
        const paginatedAndSortedItems = sortedItems.slice(indexOfFirstPost, indexOfLastPost);
        return paginatedAndSortedItems.map((item: ItemType, key) => <Item item={item} key={key} />)
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
            <div className='item-list-sorting-bar'>
                <p className='item-list-sorting-text'>Sort by:</p>
                {renderButtons()}
            </div>
            <div className='item-list-items'>
                {renderSortedItems(filteredItems, activeSortingCriteria as keyof SortingCriteriaType)}
            </div>
            <div className='item-list-pagination'>
                <Paginate postsPerPage={postsPerPage} totalPosts={filteredItems.length} paginate={paginate} currentPage={currentPage} />
            </div>
        </div>
    )
}