import { createElem } from "./helper.js"

export const createHero = () => {
    const section = createElem("section", {
        className: "hero",
    });

    const container = createElem('div', {
        className: "container hero__container",
    });

    section.append(container);


    const title = createElem('h1', {
        className: 'hero__title',
        textContent: 'WishList'
    });

    const description = createElem('p', {
        className: 'hero__description',
        innerHTML: "It's never&nbsp;too late to set a new goal or find a new dream..."
    });

    const listSteps = createElem('ol', {
        className: 'hero__steps steps',
    });

    const textSteps = ['Create a wish list', 'Share the link with your&nbsp;friends', 'Get the gift you want'];
    textSteps.forEach(text => {
        const step = createElem('li', {
            className: 'steps__item',
            innerHTML: text
        });
        listSteps.append(step);
    });
    container.append(title, description, listSteps);
    return section;
}
