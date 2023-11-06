const mainBox = document.querySelectorAll('.card')

mainBox.forEach((card) => {
    const hoverBox = card.querySelector('.hover-access');
    hoverBox.classList.add('card-hover-disable')
    let isDisable = (hoverBox.classList.contains('card-hover-disable'))
    if (isDisable) {
        card.addEventListener("mouseover", () => {
            hoverBox.classList.remove("card-hover-disable")
            hoverBox.classList.add("card-hover-enable")
        })
    }
    card.addEventListener("mouseleave", () => {
        hoverBox.classList.remove("card-hover-enable")
        hoverBox.classList.add("card-hover-disable")
    })
})

