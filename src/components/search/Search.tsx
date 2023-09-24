import { useContext } from 'react';
import { ItemsContext } from '@/contexts/ItemsContext';
import { ITEM_FILTER_PARAMS } from '@/constants';
import { SearchModeType } from '@/types/types';
import { SearchQueriesContext } from '@/contexts/SearchQueriesContext';

interface SearchProps {
    searchMode: SearchModeType;
}

export default function Search({ searchMode }: SearchProps) {
    const { items, setItems } = useContext(ItemsContext)
    const { queries, setQueries } = useContext(SearchQueriesContext)

    const search = (event: { target: { value: any; }; }) => {
        const searchQuery = event.target.value.toLowerCase()
        setQueries({ ...queries, [searchMode]: searchQuery })
        const updatedItems = items.map(item => {
            let bool = false;
            if (searchMode == "regular") {
                ITEM_FILTER_PARAMS.forEach(filterParam => {
                    if (item[filterParam].toLowerCase().includes(searchQuery) && searchQuery.length > 0) { bool = true }
                })
                return { ...item, isInSearchQuery: bool };
            } else {
                if (item.title.toLowerCase().includes(searchQuery) && searchQuery.length > 0) { bool = true }
                return { ...item, isInFavSearchQuery: bool };
            }
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