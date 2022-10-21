import { IAction } from "./IAction";

export class PasswordChangeAction implements IAction {
  static TYPE = "CHANGE_PASSWORD";
  type: string = PasswordChangeAction.TYPE;
  constructor(public password: string) {}
}
