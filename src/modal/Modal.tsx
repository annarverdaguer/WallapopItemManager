import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import FavoriteItem from '@/favoriteItem/FavoriteItem';
import EmptyList from '@/emptyList/EmptyList';

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
                    <h2 className='modal-title'>Your favorite items</h2>
                    <button className="modal-close-button" onClick={onModalClose}>X</button>
                </div>
                <div>
                    {favItemsList.length > 0 ?
                        favItemsList.map((item) => <FavoriteItem title={item.title} image={item.image} />) :
                        <EmptyList message="You don't have any favorite items 😢 Go and spread some love! 💖" />}
                </div>
            </div>
        </div>
    )
}