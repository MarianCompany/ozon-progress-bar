document.addEventListener('DOMContentLoaded', function () {
    const ACTIVE_CLASS = 'input-checkbox_active'
    const checkboxes = document.querySelectorAll('.input-checkbox')

    checkboxes.forEach((checkbox) => {
        const input = checkbox.querySelector('input[type="checkbox"]')

        if (input.checked) checkbox.classList.add(ACTIVE_CLASS)

        input.addEventListener('change', (event) => checkbox.classList.toggle(ACTIVE_CLASS))
    })
})