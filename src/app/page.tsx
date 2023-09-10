'use client'
import React, { useState } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import ItemsService from '../service/ItemsService';
import { Item } from '../types/types';

export default function Home() {
  const [items, setItems] = useState(Array<Item>);

  return (
    <div className="app">
      <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
          <ItemsService />
      </ItemsContext.Provider>
    </div>
  )
}
