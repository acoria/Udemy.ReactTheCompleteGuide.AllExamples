import { DataObject } from "../../orm"

export class Animal extends DataObject {
    name: string = ""
    habitat: string = ""
}