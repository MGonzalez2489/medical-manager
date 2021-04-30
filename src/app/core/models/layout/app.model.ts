export class AppModel {
    name: string;
    size: {
        width: number,
        height: number,
    }

    constructor() {
        this.size = { width: window.innerWidth, height: window.innerHeight };
    }
}