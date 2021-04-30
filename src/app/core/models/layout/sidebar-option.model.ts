export class SideBarOptionModel {
    route: string;
    text: string;
    icon: string;
    isSeparator: boolean;

    constructor(isSeparator: boolean, route: string, text: string, icon: string) {
        this.isSeparator = isSeparator;
        this.route = route;
        this.text = text;
        this.icon = icon;

    }
}