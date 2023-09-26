import { useContext } from 'react';
import { ItemsContext } from '../../contexts/ItemsContext';
import { SearchQueriesContext } from '@/contexts/SearchQueriesContext';
import EmptyList from '@/components/emptyList/EmptyList';
import Search from '@/components/search/Search';
import Item from '@/components/item/Item';

export default function FavoriteItemList() {
    const { items } = useContext(ItemsContext)
    const { queries } = useContext(SearchQueriesContext)

    const favItemsList = items.filter(item => { return item.isFav });
    const filteredFavItemsList = items.filter(item => { return item.isFav && item.isInFavSearchQuery });

    function renderSearchedFavoriteItems() {
        if (filteredFavItemsList.length > 0) {
            return filteredFavItemsList.map((item, key) => <Item item={item} inModal={true} key={key} />)
        }
        if (queries.favorite === "") {
            return favItemsList.map((item, key) => <Item item={item} inModal={true} key={key} />)
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
            <Search searchMode="favorite" />
            {renderSearchedFavoriteItems()}
        </div>
    )

}