import { useContext, useState } from 'react';
import Item from '../item/Item';
import { ItemsContext } from '@/contexts/ItemsContext';
import { ITEM_FILTER_PARAMS } from '@/constants';
import { ItemType } from '@/types/types';

export default function ItemList() {
    const { items } = useContext(ItemsContext)
    const [activeSortingCriteria, setActiveSortingCriteria] = useState(String)
    const filteredItems = items.filter((item) => { return item.isInSearchQuery })

    function handleClick(param: keyof ItemType) {
        setActiveSortingCriteria(param)
    }

    function sortBy(items: ItemType[], sortingCriteria: keyof ItemType) {
        if (sortingCriteria === 'price') {
            items.sort((a, b) => parseInt(a.price) - parseInt(b.price))
        } else {
            items.sort((a: ItemType, b: ItemType) => a[sortingCriteria].toLowerCase() > b[sortingCriteria].toLowerCase() ? 1 : -1);
        }
        return items
    }

    function renderButtons() {
        const myButtons = ITEM_FILTER_PARAMS.map((filterParam) => {
            return <button className={activeSortingCriteria === filterParam ? 'button-active' : ''} onClick={() => { handleClick(filterParam) }}> {filterParam} </button>
        })
        return myButtons
    }

    function renderSortedItems(items: ItemType[], sortingCriteria?: keyof ItemType) {
        let sortedItems = items;
        if (sortingCriteria) {
            sortedItems = sortBy(items, sortingCriteria);
        }
        return items.map((item: ItemType) => <Item title={item.title} description={item.description} price={item.price} email={item.email} image={item.image} isFav={item.isFav} isInSearchQuery={item.isInSearchQuery} />)

    }

    return (
        <div className="item-list">
            <div className='item-list-sorting-bar'>Sort by:
                {renderButtons()}
            </div>
            {renderSortedItems(filteredItems, activeSortingCriteria)}
        </div>
    )
}