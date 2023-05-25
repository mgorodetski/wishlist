import { createElem } from './helper.js';

const nav = document.querySelector('.nav');
// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
    nav.textContent = '';

    const buttonSignUp = createElem('button', {
        className: 'nav__btn btn',
        textContent: 'Sign Up',
    });

    buttonSignUp.addEventListener('click', () => {
        console.log('sign up');
    })

    const buttonLogin = createElem('button', {
        className: 'nav__btn btn',
        textContent: 'Login',
    });

    buttonLogin.addEventListener('click', () => {
        console.log('login');
    })

    nav.append(buttonSignUp, buttonLogin);
}
