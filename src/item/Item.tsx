import { ItemType } from '../types/types';
import { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

export default function Item({ title, description, price, email, image, isFav }: ItemType) {
    const items = useContext(ItemsContext)

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
        <div className="item-card" key={`item-card-for-${title}`}>
            <img src={image} alt={title} className="item-image" />
            <h3 className='item-title'>{title}</h3>
            {isFav ? <button className='item-favorite' onClick={() => updateFavParam(false)}>💖</button> : <button className='item-favorite' onClick={() => updateFavParam(true)}>🖤</button>}
            <h4 className='item-price'>{price}€</h4>
            <p className='item-description'>{description}</p>
            <p className='item-email'>{email}</p>
        </div>
    )
}