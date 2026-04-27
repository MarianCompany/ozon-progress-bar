import { Progress } from "./progress/Progress.js";

document.addEventListener('DOMContentLoaded', () => {
    const progress = initProgress()
    initControls(progress)
})

function initProgress() {
    return new Progress({
        root: document.querySelector('.progress'),
        initialValue: 70,
        radius: 36,
    });
}

function initControls(progress) {
    const valueEl = document.querySelector('input[name="progress-value"]')
    const animatedEl = document.querySelector('input[name="progress-animate"]')
    const hideEl = document.querySelector('input[name="progress-hide"]')

    const defaultState = progress.getState()

    valueEl.value = defaultState.value
    animatedEl.checked = defaultState.animated
    hideEl.checked = defaultState.hidden

    valueEl.addEventListener('change', (event) => {
        let value = +event.target.value.trim()

        if (isNaN(value) || value < 0) value = 0

        event.target.value = String(value)
        progress.setValue(value)
    })

    animatedEl.addEventListener('change', (event) => progress.setAnimated(event.target.checked))
    hideEl.addEventListener('change', (event) => progress.setHidden(event.target.checked))
}