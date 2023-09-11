import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import { ITEM_FILTER_PARAMS } from '../constants';
import { FilteredItemsContext } from '../contexts/FilteredItemsContext';
import { ItemType } from '../types/types';

export default function Search() {
    const { items } = useContext(ItemsContext)
    const filteredItems = useContext(FilteredItemsContext)

    const search = (event: { target: { value: any; }; }) => {
        const searchQuery = event.target.value.toLowerCase()
        let filteredItemsList: ItemType[] = [];

        items.forEach(item => {
            let bool = false;
            ITEM_FILTER_PARAMS.forEach(filterParam => {
                if (item[filterParam].toLowerCase().includes(searchQuery) && searchQuery.length > 1) { bool = true }
            })
            if (bool && !filteredItemsList.includes(item)) {
                filteredItemsList.push(item);
            } else {
                if (!bool && filteredItemsList.includes(item)) {
                    let index = filteredItemsList.indexOf(item);
                    filteredItemsList.splice(index, 1);
                }
            }
        }
        )
        filteredItems.setItems(filteredItemsList);
    }

    return (
        <div className="search">
            <input
                className='searchBar'
                type='search'
                placeholder='Type to search...'
                inputMode='search'
                name='search'
                onChange={search} />

            <ul>
                {filteredItems.items.map(item => <li>{item.title}</li>)}
            </ul>
        </div>

    )
}