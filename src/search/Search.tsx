import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import { ITEM_FILTER_PARAMS } from '../constants';

export default function Search() {
    const { items, setItems } = useContext(ItemsContext)

    const search = (event: { target: { value: any; }; }) => {
        const searchQuery = event.target.value.toLowerCase()

        const updatedItems = items.map(item => {
            let bool = false;
            ITEM_FILTER_PARAMS.forEach(filterParam => {
                if (item[filterParam].toLowerCase().includes(searchQuery) && searchQuery.length > 1) { bool = true }
            })
            return { ...item, isInSearchQuery: bool };
        });
        setItems(updatedItems)
    }

    return (
        <div className="search">
            <input
                className='search-bar'
                type='search'
                placeholder='Type to search...'
                inputMode='search'
                name='search'
                onChange={search} />
        </div>

    )
}