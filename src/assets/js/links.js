const linkSmooth = () => {
    const links = document.querySelectorAll('a[href*="#"]')

    for (let item of links) {
        item.addEventListener('click', function (e) {
            e.preventDefault()

            let blockID = item.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    };
}
