'use client'
import React, { useState } from 'react';
import './globals.css';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { ItemType } from '../types/types';
import Search from '../search/Search';
import ItemList from '../itemList/ItemList';
import Header from '@/header/Header';
import EmptyList from '@/emptyList/EmptyList';

export default function Home() {
  const [items, setItems] = useState(Array<ItemType>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <ItemsService />
        <Header />
        <Search />
        {
          items.filter((item) => { return item.isInSearchQuery }).length >= 1 ?
            <ItemList /> :
            <EmptyList message="🕵️‍♀️ Search for an item to use Item Manager! 🕵️‍♀️" />
        }
      </ItemsContext.Provider>
    </div>
  )
}
