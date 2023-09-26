import { ItemType } from '../../types/types';
import { useContext } from 'react';
import { ItemsContext } from '../../contexts/ItemsContext';

interface ItemProps {
    item: ItemType,
    inModal: boolean,
    key: number
}

export default function Item({ item, inModal }: ItemProps) {
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

    if (inModal) {
        return (
            <div className="favorite-item-card">
                <img src={image} alt={title} className="favorite-item-image" />
                <h3 className='favorite-item-title'>{title}</h3>
                <a className='favorite-item-unfavorite' onClick={() => updateFavParam(false)}>💔</a>
            </div>
        )
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