'use client'
import React, { useState } from 'react';
import './globals.css';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { ItemType } from '../types/types';
import Search from '../search/Search';
import ItemList from '../itemList/ItemList';
import Header from '@/header/Header';

export default function Home() {
  const [items, setItems] = useState(Array<ItemType>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <ItemsService />
        <Header />
        <Search />
        <ItemList />
      </ItemsContext.Provider>
    </div>
  )
}
