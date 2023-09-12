import { useContext } from 'react';
import Item from '../item/Item';
import { FilteredItemsContext } from '@/contexts/FilteredItemsContext';
import { FavoritesItemsContext } from '@/contexts/FavoritesItemsContext';
import { ItemType } from '@/types/types';

export default function ItemList() {
    const filteredItems = useContext(FilteredItemsContext)
    const favoriteItems = useContext(FavoritesItemsContext)

    function renderItem(item: ItemType) {
        let bool = false
        if (favoriteItems.items.includes(item)) { bool = true }
        return <Item item={item} favorite={bool} />
    }

    return (
        <div className="item-list">
            {filteredItems.items.map((item) => renderItem(item))}
        </div>
    )
}