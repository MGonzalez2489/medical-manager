import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export class SideBarOptionModel {
    route: string;
    text: string;
    icon: IconDefinition;
    isSeparator: boolean;

    constructor(isSeparator: boolean, route: string, text: string, icon?: IconDefinition) {
        this.isSeparator = isSeparator;
        this.route = route;
        this.text = text;
        this.icon = icon;

    }
}