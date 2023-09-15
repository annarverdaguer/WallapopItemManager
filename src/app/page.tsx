'use client'
import React, { useState } from 'react';
import './globals.css';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { ItemType } from '../types/types';
import Search from '../search/Search';
import ItemList from '../itemList/ItemList';
import { FilteredItemsContext } from '../contexts/FilteredItemsContext';
import Header from '@/header/Header';

export default function Home() {
  const [items, setItems] = useState(Array<ItemType>);
  const [filteredItems, setFilteredItems] = useState(Array<ItemType>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <FilteredItemsContext.Provider value={{ items: filteredItems, setItems: setFilteredItems }}>
          <ItemsService />
          <Header />
          <Search />
          <ItemList />
        </FilteredItemsContext.Provider>
      </ItemsContext.Provider>
    </div>
  )
}
