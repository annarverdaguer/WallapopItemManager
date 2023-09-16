import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import FavoriteItem from '@/favoriteItem/FavoriteItem';

interface IModalProps {
    isOpen: boolean;
    onModalClose(data: object): void;
}

export default function Modal({ isOpen = false, onModalClose }: IModalProps) {
    const items = useContext(ItemsContext)

    if (!isOpen) {
        return null;
    }
    document.body.style.overflow = 'hidden';
    const favItemsList = items.items.filter(item => { return item.isFav });

    return (
        <div className="modal-outside-background">
            <div className="modal-inside-background">
                <div className='modal-header-section'>
                    <h2 className='modal-title'>Your favorite items:</h2>
                    <button className="modal-close-button" onClick={onModalClose}>X</button>
                </div>
                <div>
                    {favItemsList.map((item) => <FavoriteItem title={item.title} image={item.image} />)}
                </div>
            </div>
        </div>
    )
}