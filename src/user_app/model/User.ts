import { IdGenerator } from "../../core/IdGenerator";

export class User {
  id = IdGenerator.getId();
  constructor(public name: string, public age: string) {}
}
