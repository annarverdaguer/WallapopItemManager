import Modal from "@/components/modal/Modal";
import { useState } from "react"

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalClose = (): void => {
        document.body.style.overflow = 'scroll';
        setIsModalOpen(false);
    };

    return (
        <div className="header">
            <h1 className="header-title">✨ Item Manager ✨</h1>
            <button className="header-fav-button lg-view" onClick={() => { setIsModalOpen(true) }}>Favs 💖</button>
            <button className="header-fav-button sm-view" onClick={() => { setIsModalOpen(true) }}>💖</button>
            <Modal isOpen={isModalOpen} onModalClose={onModalClose} />
        </div>
    )
}