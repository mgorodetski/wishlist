import { API_URL, JWT_TOKEN_KEY } from './const.js';
import { createBurgerMenu } from './createBurgerMenu.js';
import { createElem } from './helper.js';
import { auth } from './index.js';
import { renderModal } from './renderModal.js';

const nav = document.querySelector('.nav');
const burger = createBurgerMenu(nav, 'nav_active', 'nav__btn');

export const renderNavigation = () => {
    nav.textContent = '';

    const buttonSignUp = createElem('button', {
        className: 'nav__btn btn',
        textContent: 'Sign Up',
    });

    buttonSignUp.addEventListener('click', () => {
        renderModal({
            title: 'Sign Up',
            description: 'Enter your data to register on the WishList service',
            btnSubmit: 'Register',
            async submitHandler(event) {
                const formData = new FormData(event.target);
                const credentials = {
                    login: formData.get('login'),
                    password: formData.get('password'),
                };

                try {
                    const response = await fetch(`${API_URL}/register`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    });

                    if (response.OK) {
                        const data = await response.json();
                        localStorage.setItem(JWT_TOKEN_KEY, data.token);
                        auth.login = data.login;
                        router.setRoute(`/user/${data.login}`);
                        return true;
                    } else {
                        const { message = "unknown error" } = await response.json();
                        console.log(message);
                        throw new Error(message);
                    }
                } catch (error) {
                    alert(error.message);
                }
            }
        });
    });

    const buttonLogin = createElem('button', {
        className: 'nav__btn btn',
        textContent: 'Login',
    });

    buttonLogin.addEventListener('click', () => {
        renderModal({
            title: 'Login',
            description: 'Enter your data to login to your account',
            btnSubmit: 'Login',
            async submitHandler(event) {
                const formData = new FormData(event.target);
                const credentials = {
                    login: formData.get('login'),
                    password: formData.get('password'),
                };

                try {
                    const response = await fetch(`${API_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    });

                    if (response.OK) {
                        const data = await response.json();
                        localStorage.setItem(JWT_TOKEN_KEY, data.token);
                        auth.login = data.login;
                        router.setRoute(`/user/${data.login}`);
                        return true;
                    } else {
                        const { message = "unknown error" } = await response.json();
                        console.log(message);
                        throw new Error(message);
                    }
                } catch (error) {
                    alert(error.message);
                }
            }
        });
    })

    nav.append(buttonSignUp, buttonLogin);
}
