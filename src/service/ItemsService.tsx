import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import { ITEMS_API } from '../constants';

export default function ItemsService() {
    const { items, setItems } = useContext(ItemsContext)

    const dataFetch = async () => {
        const data = await (
            await fetch(
                ITEMS_API
            )
        ).json();
        setItems(data.items);
    };
    dataFetch();

    return (
        <div></div>
    )
}