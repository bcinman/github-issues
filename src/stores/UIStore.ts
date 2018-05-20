import { observable, action } from "mobx";
import { Issue } from "./IssueStore";

export class UIStore {
  @observable issueActive: Issue = null;

  @action.bound
  setActiveIssue(issue: Issue) {
    this.issueActive = issue;
  }
}
