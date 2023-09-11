import { useContext } from 'react';
import Item from '../item/Item';
import { FilteredItemsContext } from '@/contexts/FilteredItemsContext';

export default function ItemList() {
    const filteredItems = useContext(FilteredItemsContext)

    return (
        <div className="item-list">
            {filteredItems.items.map((item) => <Item title={item.title} description={item.description} price={item.price} email={item.email} image={item.image} />)}
        </div>
    )
}