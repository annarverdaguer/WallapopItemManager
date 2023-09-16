import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

export default function FavoriteItem({ title, image }: any) {
    const items = useContext(ItemsContext)

    function removeFromFavsList() {
        const updatedItems = items.items.map(item => {
            if (item.title === title) {
                return { ...item, isFav: false };
            }
            return item;
        });
        items.setItems(updatedItems)
    }

    return (
        <div className="favorite-item-card" key={`favorite-item-card-for-${title}`}>
            <img src={image} alt={title} className="favorite-item-image" />
            <h3 className='favorite-item-title'>{title}</h3>
            <button className='favorite-item-unfavorite' onClick={removeFromFavsList}>💔</button>
        </div>
    )
}