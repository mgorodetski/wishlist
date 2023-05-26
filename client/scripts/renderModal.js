import { createElem } from "./helper.js";

export const renderModal = ({ title, description, btnSubmit, submitHandler }) => {
    const modal = createElem('div', {
        className: 'modal',
    });

    const modalMain = createElem('div', {
        className: 'modal__main',
    });

    const modalTitle = createElem('h2', {
        className: 'modal__title',
        textContent: title,
    });

    const modalDescription = createElem('p', {
        className: 'modal__description',
        textContent: description,
    });

    const modalForm = createElem('form', {
        className: 'modal__form',
    });

    modalForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const itsOk = await submitHandler(event);
        if (itsOk) {
            modal.remove();
        };
    });

    const modalField = createElem('fieldset', {
        className: 'modal__field',
    });

    const modalLabelLogin = createElem('label', {
        className: 'modal__label',
    });

    const modalInputLogin = createElem('input', {
        className: 'modal__input',
        type: 'text',
        name: 'login',
        placeholder: 'Login',
        required: true
    });

    const modalLabelPassword = createElem('label', {
        className: 'modal__label',
    });

    const modalInputPassword = createElem('input', {
        className: 'modal__input',
        type: 'password',
        name: 'password',
        placeholder: 'Passowrd',
        required: true
    });

    const modalSubmitBtn = createElem('button', {
        className: 'modal__btn',
        textContent: btnSubmit
    });

    modal.addEventListener('click', ({ target }) => {
        if (target === modal || target.closest('.modal__close')) {
            modal.remove();
        }
    });

    const modalCloseBtn = createElem('button', {
        className: 'modal__close',
        innerHTML: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.209 12.7076C14.0076 12.5199 13.7412 12.4177 13.4659 12.4226C13.1906 12.4274 12.928 12.5389 12.7333 12.7336C12.5387 12.9283 12.4272 13.1909 12.4223 13.4661C12.4175 13.7414 12.5196 14.0078 12.7073 14.2092L15.4981 17.0001L12.7073 19.7909C12.6029 19.8882 12.5192 20.0055 12.4611 20.1358C12.403 20.2661 12.3718 20.4068 12.3693 20.5495C12.3668 20.6921 12.393 20.8339 12.4465 20.9662C12.4999 21.0985 12.5794 21.2186 12.6803 21.3195C12.7812 21.4204 12.9014 21.5 13.0337 21.5534C13.166 21.6068 13.3077 21.6331 13.4504 21.6306C13.593 21.628 13.7337 21.5968 13.8641 21.5387C13.9944 21.4807 14.1117 21.3969 14.209 21.2926L16.9998 18.5017L19.7906 21.2926C19.9921 21.4802 20.2585 21.5824 20.5337 21.5776C20.809 21.5727 21.0716 21.4612 21.2663 21.2665C21.4609 21.0719 21.5725 20.8092 21.5773 20.534C21.5822 20.2587 21.48 19.9923 21.2923 19.7909L18.5015 17.0001L21.2923 14.2092C21.3967 14.112 21.4804 13.9947 21.5385 13.8643C21.5966 13.734 21.6278 13.5933 21.6303 13.4506C21.6328 13.308 21.6066 13.1663 21.5532 13.034C21.4997 12.9017 21.4202 12.7815 21.3193 12.6806C21.2184 12.5797 21.0982 12.5002 20.9659 12.4467C20.8336 12.3933 20.6919 12.367 20.5492 12.3696C20.4066 12.3721 20.2659 12.4033 20.1355 12.4614C20.0052 12.5194 19.8879 12.6032 19.7906 12.7076L16.9998 15.4984L14.209 12.7076Z" fill="#365ABA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0804 1.771H16.9189C13.6478 1.771 11.0851 1.771 9.08476 2.04016C7.03909 2.315 5.42409 2.89016 4.15617 4.15666C2.88826 5.42458 2.31451 7.03958 2.03967 9.08666C1.77051 11.0856 1.77051 13.6483 1.77051 16.9194V17.0809C1.77051 20.352 1.77051 22.9147 2.03967 24.9151C2.31451 26.9607 2.88967 28.5757 4.15617 29.8437C5.42409 31.1116 7.03909 31.6853 9.08617 31.9602C11.0851 32.2293 13.6478 32.2293 16.9189 32.2293H17.0804C20.3515 32.2293 22.9143 32.2293 24.9146 31.9602C26.9603 31.6853 28.5753 31.1102 29.8432 29.8437C31.1111 28.5757 31.6848 26.9607 31.9597 24.9137C32.2288 22.9147 32.2288 20.352 32.2288 17.0809V16.9194C32.2288 13.6483 32.2288 11.0856 31.9597 9.08525C31.6848 7.03958 31.1097 5.42458 29.8432 4.15666C28.5753 2.88875 26.9603 2.315 24.9132 2.04016C22.9143 1.771 20.3515 1.771 17.0804 1.771ZM5.65926 5.65975C6.46676 4.85225 7.55759 4.389 9.36951 4.14533C11.2112 3.89883 13.6308 3.896 16.9997 3.896C20.3685 3.896 22.7882 3.89883 24.6298 4.14533C26.4418 4.389 27.534 4.85366 28.3415 5.65975C29.1476 6.46725 29.6108 7.55808 29.8545 9.37C30.101 11.2117 30.1038 13.6313 30.1038 17.0002C30.1038 20.369 30.101 22.7887 29.8545 24.6303C29.6108 26.4422 29.1462 27.5345 28.3401 28.342C27.5326 29.1481 26.4418 29.6113 24.6298 29.855C22.7882 30.1015 20.3685 30.1043 16.9997 30.1043C13.6308 30.1043 11.2112 30.1015 9.36951 29.855C7.55759 29.6113 6.46534 29.1467 5.65784 28.3406C4.85176 27.5331 4.38851 26.4422 4.14484 24.6303C3.89834 22.7887 3.89551 20.369 3.89551 17.0002C3.89551 13.6313 3.89834 11.2117 4.14484 9.37C4.38851 7.55808 4.85317 6.46725 5.65926 5.65975Z" fill="#365ABA"/>
            </svg>`
    });

    modalLabelLogin.append(modalInputLogin);
    modalLabelPassword.append(modalInputPassword);
    modalField.append(modalLabelLogin, modalLabelPassword);
    modalForm.append(modalField, modalSubmitBtn);
    modalMain.append(modalTitle, modalDescription, modalForm, modalCloseBtn);

    modal.append(modalMain);
    document.body.append(modal);

};
