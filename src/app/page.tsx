'use client'
import React, { useState } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { Item } from '../types/types';
import Search from '../search/Search';
import { FilteredItemsContext } from '../contexts/FilteredItemsContext';

export default function Home() {
  const [items, setItems] = useState(Array<Item>);
  const [filteredItems, setFilteredItems] = useState(Array<Item>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <FilteredItemsContext.Provider value={{ items: filteredItems, setItems: setFilteredItems }}>
          <ItemsService />
          <Search />
        </FilteredItemsContext.Provider>
      </ItemsContext.Provider>
    </div>
  )
}
