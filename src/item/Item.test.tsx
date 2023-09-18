import { ItemType } from "@/types/types";
import Item from "./Item"
import { render, RenderResult } from "@testing-library/react"

describe("<Item />", () => {
    let item: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    let propsNotFav: ItemType;
    let propsFav: ItemType;

    beforeEach(() => {
        propsNotFav = {
            title: "Your favorite mug",
            description: "This is the description for the best mug in the world",
            price: "12",
            email: "your_mug@mail.com",
            image: "https://www.pngall.com/wp-content/uploads/5/White-Coffee-Mug-PNG-Picture.png",
            isFav: false
        }
        item = render(<Item item={propsNotFav} key={1} />);
    })

    test('Verifying item is rendered', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        expect(itemCard).toBeDefined();
    })

    test('Verifying title is rendered and its content is as expected', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        const itemTitle = itemCard.querySelector('.item-title')?.textContent;
        expect(itemTitle).toBe("Your favorite mug")
    })

    test('Verifying image is rendered', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        const itemImage = itemCard.querySelector('.item-image');
        expect(itemImage).toBeDefined();
    })

    test('Verifying description is rendered and its content is as expected', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        const itemDescription = itemCard.querySelector('.item-description')?.textContent;
        expect(itemDescription).toBe("This is the description for the best mug in the world")
    })

    test('Verifying price is rendered and its content is as expected', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        const itemPrice = itemCard.querySelector('.item-price')?.textContent;
        expect(itemPrice).toBe("12€")
    })

    test('Verifying email is rendered and its content is as expected', () => {
        const itemCard = item.getByText('', { selector: '.item-card' });
        const itemEmail = itemCard.querySelector('.item-email')?.textContent;
        expect(itemEmail).toBe("your_mug@mail.com")
    })

    test('Verifying favorite icon is rendered and item is unfav', () => {
        const itemIsNotFav = item.getByText("🖤")
        expect(itemIsNotFav).toBeDefined();
    })

    test('Verifying favorite icon is pink and sparkly when item is fav', () => {
        propsFav = {
            title: "Your favorite mug",
            description: "This is the description for the best mug in the world",
            price: "12",
            email: "your_mug@mail.com",
            image: "https://www.pngall.com/wp-content/uploads/5/White-Coffee-Mug-PNG-Picture.png",
            isFav: true
        }

        const itemFav = render(<Item item={propsFav} key={1} />);
        const itemIsFav = itemFav.getByText("💖")
        expect(itemIsFav).toBeDefined();

    })
})