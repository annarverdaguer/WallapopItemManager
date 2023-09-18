import FavoriteItem from "./FavoriteItem"
import { render, RenderResult } from "@testing-library/react"

describe("<FavoriteItem />", () => {
    let favoriteItem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        let props = {
            title: "Your favorite mug",
            image: "https://www.pngall.com/wp-content/uploads/5/White-Coffee-Mug-PNG-Picture.png"
        }

        favoriteItem = render(<FavoriteItem title={props.title} image={props.image} />);
    })

    test('Verifying favorite item is rendered', () => {
        const favoriteItemCard = favoriteItem.getByText('', { selector: '.favorite-item-card' });
        expect(favoriteItemCard).toBeDefined();
    })

    test('Verifying favorite item image is rendered', () => {
        const favoriteItemCard = favoriteItem.getByText('', { selector: '.favorite-item-card' });
        const favoriteItemImage = favoriteItemCard.querySelector('.favorite-item-image')
        expect(favoriteItemImage).toBeDefined();

    })

    test('Verifying favorite item title is rendered and content is correct', () => {
        const title = favoriteItem.getByText("Your favorite mug");
        expect(title).toBeDefined();
    })

    test('Verifying favorite item has an icon to remove itself from Favs list', () => {
        const unFavIcon = favoriteItem.getByText(/💔/);
        expect(unFavIcon).toBeDefined();
    })

})