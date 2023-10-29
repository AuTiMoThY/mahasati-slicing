const swiper = new Swiper('.banner-swiper', {
    pagination: {
        el: '.pagination',
        clickable: true,
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
            return '<span class="dot ' + className + '"></span>';
        },
    },
});