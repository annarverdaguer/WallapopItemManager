import { ItemType } from '../types/types';

export default function Item({ title, description, price, email, image }: ItemType) {
    return (
        <div className="item-card">
            <img src={image} alt={title} className="item-image" />
            <h3 className='item-title'>{title}</h3>
            <h4 className='item-price'>{price}€</h4>
            <p className='item-description'>{description}</p>
            <p className='item-email'>{email}</p>
        </div>
    )
}