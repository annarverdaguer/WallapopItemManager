import { ItemType } from '../types/types';
import { useContext, useState } from 'react';
import { FavoritesItemsContext } from '@/contexts/FavoritesItemsContext';

type itemProps = {
    item: ItemType,
    favorite: boolean
}

export default function Item({ item, favorite }: itemProps) {
    const favoriteItems = useContext(FavoritesItemsContext)

    function addFav() {
        let favoriteItemsCopy = favoriteItems.items;
        favoriteItemsCopy.push(item)
        favoriteItems.setItems(favoriteItemsCopy);
    }

    function removeFav() {
        let favoriteItemsCopy = favoriteItems.items;
        let index = favoriteItemsCopy.indexOf(item);
        favoriteItemsCopy.splice(index, 1);
        favoriteItems.setItems(favoriteItemsCopy);
    }

    return (
        <div className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3 className='item-title'>{item.title}</h3>
            {favorite ? <button className='item-favorite' onClick={removeFav}>💖</button> : <button className='item-favorite' onClick={addFav}>🖤</button>}
            <h4 className='item-price'>{item.price}€</h4>
            <p className='item-description'>{item.description}</p>
            <p className='item-email'>{item.email}</p>
        </div>
    )
}