import { ItemType } from '../types/types';
import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

interface ItemProps {
    item: ItemType,
    key: number
}

export default function Item({ item }: ItemProps) {
    const items = useContext(ItemsContext)
    const { title, description, price, email, image, isFav } = item;

    function updateFavParam(bool: boolean) {
        const updatedItems = items.items.map(item => {
            if (item.title === title) {
                return { ...item, isFav: bool };
            }
            return item;
        });
        items.setItems(updatedItems)
    }

    return (
        <div className="item-card">
            <div className='item-image-wrapper'>
                <img src={image} alt={title} className="item-image" />
            </div>
            <h3 className='item-title'>{title}</h3>
            {isFav ? <a className='item-favorite' onClick={() => updateFavParam(false)}>💖</a> : <a className='item-favorite' onClick={() => updateFavParam(true)}>🖤</a>}
            <h4 className='item-price'>{price}€</h4>
            <p className='item-description'>{description}</p>
            <p className='item-email'>{email}</p>
        </div>
    )
}