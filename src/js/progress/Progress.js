import {ProgressCore} from "./ProgressCore.js";
import {ProgressRenderer} from "./ProgressRenderer.js";

export class Progress {
    constructor({ root, initialValue = 0, radius = 45 }) {
        this.core = new ProgressCore({ value: initialValue });
        this.renderer = new ProgressRenderer({ root, radius });

        this.unsubscribe = this.core.subscribe(state => {
            this.renderer.render(state);
        });
        this.renderer.render(this.core.state);
    }

    setValue(v) {
        this.core.setState({ value: Math.min(100, Math.max(0, v)) });
    }

    setAnimated(v) {
        this.core.setState({ animated: v });
    }

    setHidden(v) {
        this.core.setState({ hidden: v });
    }

    destroy() {
        this.unsubscribe();
        this.renderer.destroy();
    }
}