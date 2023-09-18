import { useContext, useState } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import FavoriteItem from '@/favoriteItem/FavoriteItem';
import EmptyList from '@/emptyList/EmptyList';

export default function FavoriteItemList() {
    const { items, setItems } = useContext(ItemsContext)
    const [searchQuery, setSearchQuery] = useState("")

    const favItemsList = items.filter(item => { return item.isFav });
    const filteredFavItemsList = items.filter(item => { return item.isFav && item.isInFavSearchQuery });

    const searchFavorites = (event: { target: { value: any; }; }) => {
        let currentSearchQuery = event.target.value.toLowerCase()
        setSearchQuery(currentSearchQuery);
        const updatedItems = items.map(item => {
            let bool = false;
            if (item.title.toLowerCase().includes(currentSearchQuery) && currentSearchQuery.length > 0) { bool = true }
            return { ...item, isInFavSearchQuery: bool };
        });
        setItems(updatedItems)
    }

    function renderSearchedFavoriteItems() {
        if (filteredFavItemsList.length > 0) {
            return filteredFavItemsList.map((item) => <FavoriteItem title={item.title} image={item.image} />)
        }
        if (searchQuery === "") {
            return favItemsList.map((item) => <FavoriteItem title={item.title} image={item.image} />)
        }
        return (<EmptyList message="None of your favorite items are matching this query :(" />)
    }

    if (favItemsList.length === 0) {
        return (
            <div className="favorite-item-list" >
                <EmptyList message="You don't have any favorite items 😢 Go and spread some love! 💖" />
            </div>
        )
    }
    return (
        <div className="favorite-item-list" >
            <div className="search">
                <input
                    className='search-bar'
                    type='search'
                    placeholder='Type to search...'
                    inputMode='search'
                    name='search'
                    onChange={searchFavorites} />
            </div>
            {renderSearchedFavoriteItems()}
        </div>
    )

}