import { IIdGenerator } from "./IIdGenerator";

class IdGeneratorInternal implements IIdGenerator {
  counter = 0;
  getId(): number {
    this.counter += 1;
    return this.counter;
  }
}

export const IdGenerator: IIdGenerator = new IdGeneratorInternal();
