import { Item } from "./types/types";

export const ITEMS_API = "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json"
export const ITEM_FILTER_PARAMS = ['title' as keyof Item, 'description' as keyof Item, 'price' as keyof Item, 'email' as keyof Item];