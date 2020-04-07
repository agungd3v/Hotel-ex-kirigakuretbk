const room = document.getElementsByClassName('room');
const dRoom = document.getElementsByClassName('rooms');

window.addEventListener('resize', () => {
    if (innerWidth < 768) {
        room[0].classList.add('order-2');
        dRoom[0].classList.add('order-1');
        room[1].classList.add('order-4');
        dRoom[1].classList.add('order-3');
    } else {
        room[0].classList.remove('order-2');
        dRoom[0].classList.remove('order-1');
        room[1].classList.remove('order-4');
        dRoom[1].classList.remove('order-3');
    }
});

$('.navbar-nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const url = this.hash;
        $('html, body').animate({
            scrollTop: $(url).offset().top
        }, 2000)
    }
});