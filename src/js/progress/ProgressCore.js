export class ProgressCore {
    constructor(initialState) {
        this.state = {
            value: 0,
            animated: false,
            hidden: false,
            ...initialState
        };
        this.listeners = new Set();
    }

    subscribe(f) {
        this.listeners.add(f);
        return () => this.listeners.delete(f);
    }

    setState(patch) {
        const updated = { ...this.state, ...patch };

        if (JSON.stringify(updated) === JSON.stringify(this.state)) return;

        this.state = updated;
        this.emit();
    }

    emit() {
        this.listeners.forEach((f) => f(this.state));
    }
}