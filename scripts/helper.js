export const createElem = (tagName, attributes) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attributes);
    return elem;
}
