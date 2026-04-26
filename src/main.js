import './styles/main.scss'

import './js/input-checkbox.js'
import {Progress} from "./js/progress/Progress.js";

document.addEventListener('DOMContentLoaded', () => {
    const progress = new Progress({
        root: document.querySelector('.progress'),
        initialValue: 70,
        radius: 36,
    })

    progress.setAnimated(true);
    progress.setHidden(true);
})