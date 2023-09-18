import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

interface FavItemProps {
    title: string,
    image: string,
    key: number
}

export default function FavoriteItem({ title, image }: FavItemProps) {
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
        <div className="favorite-item-card">
            <img src={image} alt={title} className="favorite-item-image" />
            <h3 className='favorite-item-title'>{title}</h3>
            <a className='favorite-item-unfavorite' onClick={removeFromFavsList}>💔</a>
        </div>
    )
}