import { DbModel } from "./dbModel";


export class Setting extends DbModel {
    key: string;
    value: string;
    label: string;
    type: string;
}
