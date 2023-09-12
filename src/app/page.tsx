'use client'
import React, { useState } from 'react';
import './globals.css';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { ItemType } from '../types/types';
import Search from '../search/Search';
import ItemList from '../itemList/ItemList';
import { FilteredItemsContext } from '../contexts/FilteredItemsContext';
import { FavoritesItemsContext } from '../contexts/FavoritesItemsContext';

export default function Home() {
  const [items, setItems] = useState(Array<ItemType>);
  const [filteredItems, setFilteredItems] = useState(Array<ItemType>);
  const [favoriteItems, setFavoriteItems] = useState(Array<ItemType>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <FilteredItemsContext.Provider value={{ items: filteredItems, setItems: setFilteredItems }}>
          <FavoritesItemsContext.Provider value={{ items: favoriteItems, setItems: setFavoriteItems }}>
            <ItemsService />
            <Search />
            <ItemList />
          </FavoritesItemsContext.Provider>
        </FilteredItemsContext.Provider>
      </ItemsContext.Provider>
    </div>
  )
}
