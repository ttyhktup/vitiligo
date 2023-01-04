new Swiper('.directions-container', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    slidesPerView: 3,

    loop: true,

    speed: 600,

    breakpoints: {
        270:{
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    
});

new Swiper('.results-slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    spaceBetween: 30,

    slidesPerView: 3,

    loop: true,

    speed: 600,

    breakpoints: {
        270:{
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    }
});


let active

Array.prototype.forEach.call(document.getElementsByClassName('price-list-item-title'), (el) => {

    el.addEventListener('click', () => {

        let content = document.getElementById(el.id.replace('title', 'content'))
        let plus = document.getElementById(el.id.replace('title', 'plus'))

        if (active) {
            let activeContent = document.getElementById(active.replace('title', 'content'))
            let activePlus = document.getElementById(active.replace('title', 'plus'))

            console.log(activeContent)
            console.log(activePlus)
            activeContent.style.height = '0'
            activePlus.style.transform = 'rotate(0deg)'

            if (active === el.id) {
                active = null
                return
            }
        }

        active = el.id

        content.style.height = `${content.scrollHeight}px`
        plus.style.transform = 'rotate(-45deg)'
    })  

    el.addEventListener('transitionend', () => {
        if (!(el.style.height === '0' || el.style.height === '0px' || el.style.height === ''))
            el.style.height = 'auto'
    })
})

