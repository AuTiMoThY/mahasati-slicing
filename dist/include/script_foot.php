<script>
    // const links = document.querySelectorAll('.site_nav a');
    // links.forEach((el) => {
    //     const highlight = el.getAttribute('data-highlight');
    //     if (highlight === 'kaishan') {
    //         el.classList.add('js-active');
    //     }
    // });
</script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
<script>
    gsap.registerPlugin(ScrollTrigger);
    const scroll_trigger = document.querySelectorAll('.scroll-trigger');
    scroll_trigger.forEach((el) => {
        const scroll_targets = el.querySelectorAll(".scroll-target");
        gsap.from(scroll_targets, {
            y: 100,
            opacity: 0, // 起始透明度為 0
            duration: 1.5, // 動畫持續時間為 1 秒
            stagger: 0.06,
            scrollTrigger: {
                markers: true,
                trigger: el, // 當這個元素出現在視窗中時，開始動畫
                start: 'top 75%', // 當觸發元素的頂部距視窗頂部有 75% 的距離時，開始動畫
                // end: 'bottom 25%', // 當觸發元素的底部距視窗頂部有 25% 的距離時，結束動畫
                // scrub: true, // 平滑地跟隨滾動條，延遲 1 秒
            }
        });
    });
</script>
<script src="assets/js/script.js"></script>