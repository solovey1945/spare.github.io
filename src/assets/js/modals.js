const modals = () => {
    function bindModal(btnSelector, modalSelector, closeSelector) {
        const btn = document.querySelectorAll(btnSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);            

        btn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        // modal.addEventListener('click', (e) => {
        //     if(e.target == modal) {
        //         // modal.style.display = "none";
        //         // document.body.style.overflow = "";
        //         console.log('wooork');
        //     }
        // });

    }
    bindModal('.fast__request', '.modal__fast', '.modal__fast .modal__close');
    bindModal('.phone__link', '.modal__callback', '.modal__callback .modal__close');
    bindModal('.thanks__btn', '.modal__thanks', '.modal__thanks .modal__close');
}


