const popup = document.getElementById('modal_main');
popup.classList.add('modal_active');

const nextButton = document.querySelector('.show-success')
nextButton.onclick = () => {
    const nextPopup = document.getElementById('modal_success');
    nextPopup.classList.add('modal_active')
}

const closeButtons = document.querySelectorAll('.modal__close_times')
closeButtons.forEach((closeButton,index) => {
    closeButton.onclick = () => {
        const popups = document.querySelectorAll('.modal_active')
        popups.forEach((popup) => {
            popup.classList.remove('modal_active')
        })
    }
})
