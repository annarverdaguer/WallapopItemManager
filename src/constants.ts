import { ItemType } from "./types/types";

export const ITEMS_API = "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json"
export const ITEM_FILTER_PARAMS = ['title' as keyof ItemType, 'description' as keyof ItemType, 'price' as keyof ItemType, 'email' as keyof ItemType];