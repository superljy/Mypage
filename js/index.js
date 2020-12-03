(function () {
    let envelope = document.querySelector('.envelope');
    envelope.addEventListener('click', () => {
        let fontPage = document.querySelector('.font-page');
        fontPage.style.opacity = '0';
        setTimeout(() => {
            fontPage.style.zIndex = '-1';
        }, 1200);
    })

    let nextPage = document.querySelector('.next-page');
    nextPage.addEventListener('click', () => {
        let page1 = document.querySelector('.page1');
        let page2 = document.querySelector('.page2');
        page1.style.opacity = '0';
        page2.style.opacity = '1';
    })
})();