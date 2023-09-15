import Modal from "@/modal/Modal";
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
            <button className="header-fav-button" onClick={() => { setIsModalOpen(true) }}>Favs 💖</button>
            <Modal isOpen={isModalOpen} onModalClose={onModalClose} />
        </div>
    )
}