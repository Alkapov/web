export class Slide {
    public url: string;
    public description: string;
    public visible: boolean;

    constructor(url: string, description: string = null) {
        this.url = url;
        this.description = description;
        this.visible = false;
    }
}
