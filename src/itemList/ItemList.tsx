import { useContext } from 'react';
import Item from '../item/Item';
import { ItemsContext } from '@/contexts/ItemsContext';

export default function ItemList() {
    const { items } = useContext(ItemsContext)
    const filteredItems = items.filter((item) => { return item.isInSearchQuery })

    return (
        <div className="item-list">
            {filteredItems.map((item) => <Item title={item.title} description={item.description} price={item.price} email={item.email} image={item.image} isFav={item.isFav} isInSearchQuery={item.isInSearchQuery} />)}
        </div>
    )
}