import FavoriteItemList from '@/favoriteItemList/FavoriteItemList';

interface IModalProps {
    isOpen: boolean;
    onModalClose(data: object): void;
}

export default function Modal({ isOpen = false, onModalClose }: IModalProps) {

    if (!isOpen) {
        return null;
    }
    document.body.style.overflow = 'hidden';

    return (
        <div className="modal-outside-background">
            <div className="modal-inside-background">
                <div className='modal-header-section'>
                    <h2 className='modal-title'>Your favorite items</h2>
                    <button className="modal-close-button" onClick={onModalClose}>X</button>
                </div>
                <div>
                    <FavoriteItemList />
                </div>
            </div>
        </div>
    )
}