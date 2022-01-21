const app = {
    init: function() {
        parallax.init();
        modal.init();
        // language.init();
    }
}
// const language = {
//     init: function() {
//         console.log("language");
//     },
//     text: {
//         "info-hero__line3":["Innovation is our second name"],
//         "info-hero__line1":["COMMERCIAL INDUSTRIAL"],

//     }
// }
const parallax = {
    init: function() {
        console.log("parallax");
        // let $infoHero = document.querySelector(".info-hero");
        window.addEventListener('scroll', () => {
            let newScroll = window.pageYOffset;
            let $hero =document.querySelector(".hero");
            let $information = document.querySelector(".information");
            // console.log(newScroll * 0.5);
            if (newScroll <= 513) {
                $hero.style.transform = `translateY(${newScroll * 0.2}px)`;
                $information.style.transform = `translateY(${newScroll * -0.2}px)`;
            } else {
                newScroll = 513;
                $hero.style.transform = `translateY(${newScroll * 0.2}px)`;
                $information.style.transform = `translateY(${newScroll * -0.2}px)`;
            }
        });
    }
}
const modal = {
    init: function() {
        console.log("modal");
        let productItems = document.querySelectorAll(".product-item");
        // console.log(productItems);
        productItems.forEach( productItem => {
            productItem.addEventListener('click', actionModal);
        });
        function actionModal(e) {
            // console.log(e.target, this.dataset.modal);
            // modal.fillModal(this.dataset.modal);
            let productName = this.dataset.modal;
            
            //add ref to product
            let $modal = document.querySelector(`.modal[data-${productName}]`);
            if (productName == 'alimentos') {
                $modal.style.top = '5%';
            }
            let $overlay = document.querySelector(".overlay");
            $modal.classList.add("active-modal");
            $overlay.classList.add("active-modal");
            // console.log($modal, $overlay);

        }
        let $closeModalBtns = document.querySelectorAll(".modal-btn");
        $closeModalBtns.forEach( btnCloseModal => {
            btnCloseModal.addEventListener('click', actionCloseModal);
        });
        function actionCloseModal() {
            let $modal = this.closest(".modal");
            // let $modal = document.querySelector(".modal");
            let $overlay = document.querySelector(".overlay");
            $modal.classList.remove("active-modal");
            $overlay.classList.remove("active-modal");

        }
        // let $overlay = document.querySelector(".overlay");
        // $overlay.addEventListener('click', actionCloseModal);

        
        
    },
    fillModal: function(product) {
        let $modalTitle = document.querySelector(".modal-title");
        let $modalBody = document.querySelector(".modal-body");
        $modalBody.textContent = modal.productos[product];
        $modalTitle.textContent = product.toUpperCase();

    },
    productos: {
        "industrial":["Zeolita, Oxido de hierro, harina de pescado"],
        "varios":["Madera, materiales de construccion, abonos organicos"]
    }
}

document.addEventListener('DOMContentLoaded', app.init);