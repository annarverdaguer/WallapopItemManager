import { useContext, useEffect } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import { ITEMS_API } from '../constants';

export default function ItemsService() {
    const { items, setItems } = useContext(ItemsContext)

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch(ITEMS_API)
            const data = await (response).json();
            const items = data.items.map((item: any) => { return { ...item, fav: false } })
            setItems(items);
        };
        dataFetch();
    }, []);

    return (
        <div></div>
    )
}