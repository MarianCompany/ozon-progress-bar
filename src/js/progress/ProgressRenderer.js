export class ProgressRenderer {
    constructor({ root, radius }) {
        this.root = root;

        this.radius = radius;
        this.circumference = 2 * Math.PI * this.radius;

        this.init();
    }

    init() {
        this.root.innerHTML = `
        <div class="progress__rotator">
            <svg viewBox="0 0 100 100">
                  <circle
                    class="progress__track"
                    cx="50"
                    cy="50"
                    r="${this.radius}"
                  />
                  <circle
                    class="progress__value"
                    cx="50"
                    cy="50"
                    r="${this.radius}"
                  />
            </svg>
        </div>
        `;

        this.circle = this.root.querySelector('.progress__value');

        this.circle.style.strokeDasharray = this.circumference;
        this.circle.style.strokeDashoffset = this.circumference;
    }

    render(state) {
        this.updateProgress(state.value);
        this.updateAnimation(state.animated);
        this.updateVisibility(state.hidden);
    }

    updateProgress(value) {
        this.circle.style.strokeDashoffset = this.circumference * (1 - value / 100);
    }

    updateAnimation(flag) {
        this.root.classList.toggle('progress_animated', flag);
    }

    updateVisibility(flag) {
        this.root.classList.toggle('progress_hidden', flag);
    }

    destroy() {
        this.root.remove();
    }
}