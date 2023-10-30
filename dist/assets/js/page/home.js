const swipers = document.querySelectorAll(".swiper");
swipers.forEach((el) => {
    const swiper = new Swiper(el, {
        pagination: {
            el: '.pagination',
            clickable: true,
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
                return '<span class="dot ' + className + '"></span>';
            },
        },
    });
});
