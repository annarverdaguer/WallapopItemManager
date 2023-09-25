import { ItemType, SortingCriteriaType } from "@/types/types";


export default function sortBy(items: ItemType[], sortingCriteria: keyof SortingCriteriaType) {
    if (sortingCriteria === 'price') {
        items.sort((a, b) => parseInt(a.price) - parseInt(b.price))
    } else {
        items.sort((a: ItemType, b: ItemType) => a[sortingCriteria].toLowerCase() > b[sortingCriteria].toLowerCase() ? 1 : -1);
    }
    return items
}