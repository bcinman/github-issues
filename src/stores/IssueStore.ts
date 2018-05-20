import { observable, action, computed } from "mobx";
import { distanceInWordsToNow } from "date-fns";
import { Converter } from "showdown";
import GithubClient from "../githubClient";
import { AxiosError } from "axios";

const converter = new Converter();

export class Issue {
  id: number;
  title: string;
  body: string;
  state: string;
  number: number;
  comments: number;
  created_at: string;
  user: { login: string; avatar_url: string };
  labels: Array<{ name: string; color: string }>;

  constructor(data: Issue) {
    this.update(data);
  }

  update(data: Issue) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.state = data.state;
    this.number = data.number;
    this.comments = data.comments;
    this.created_at = data.created_at;
    this.user = data.user;
    this.labels = data.labels;
  }

  @computed
  get createdTimeAgo() {
    return distanceInWordsToNow(this.created_at);
  }

  @computed
  get bodyFormatted() {
    return converter.makeHtml(this.body);
  }
}

export class IssueStore {
  api: GithubClient;
  owner: string;
  repo: string;
  currentPage = 1;
  @observable isLoading = false;
  @observable issues: Issue[] = [];

  constructor(api: GithubClient, owner: string, repo: string) {
    this.owner = owner;
    this.repo = repo;
    this.api = new GithubClient();
  }

  @action.bound
  async loadIssues(page = 1) {
    this.isLoading = true;

    try {
      const issues = await this.api.fetchIssues(this.owner, this.repo, page);
      issues.forEach(i => this.upsertIssue(new Issue(i)));
    } catch (e) {
      alert(e.response.data.message);
    }

    this.isLoading = false;
  }

  @action.bound
  async loadMore() {
    this.currentPage += 1;
    this.loadIssues(this.currentPage);
  }

  @action
  upsertIssue(data: Issue) {
    let issue = this.issues.find(i => i.id === data.id);
    if (issue) {
      issue.update(data);
    } else {
      this.issues.push(new Issue(data));
    }
  }
}
