export class Goal {
  private static instanceCounter: number = 0;
  public id: number;
  constructor(public name: string) {
    Goal.instanceCounter = Goal.instanceCounter + 1;
    this.id = Goal.instanceCounter;
  }
}
