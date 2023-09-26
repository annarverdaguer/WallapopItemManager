'use client'
import React, { useState } from 'react';
import './globals.css';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { ItemType } from '../types/types';
import Search from '../components/search/Search';
import ItemList from '../components/itemList/ItemList';
import Header from '@/components/header/Header';
import EmptyList from '@/components/emptyList/EmptyList';
import { SearchQueriesContext } from '@/contexts/SearchQueriesContext';

export default function Home() {
  const [items, setItems] = useState(Array<ItemType>);
  const [queries, setQueries] = useState({ regular: "", favorite: "" });
  const emptyQueryMessage = "🕵️‍♀️ Search for an item to use Item Manager! 🕵️‍♀️";
  const noItemsMatchMessage = "📣 No items are matching this query. Please type something else. 📣"

  let message = queries.regular.length > 0 ? noItemsMatchMessage : emptyQueryMessage;

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
        <SearchQueriesContext.Provider value={{ queries: queries, setQueries: setQueries }}>
          <ItemsService />
          <Header />
          <Search searchMode="regular" />
          {
            items.filter((item) => { return item.isInSearchQuery }).length >= 1 ?
              <ItemList /> :
              <EmptyList message={message} />
          }
        </SearchQueriesContext.Provider>
      </ItemsContext.Provider>
    </div>
  )
}
