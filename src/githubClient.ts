import axios from "axios";
import { Issue } from "./stores/IssueStore";

const CONFIG = {
  auth: {
    username: "", // github email
    password: "" // github password
  }
};

const BASE_URL = "https://api.github.com";

export default class GithubClient {
  async fetchIssues(owner: string, repo: string, page = 0): Promise<Issue[]> {
    const res = await axios.get(
      BASE_URL + `/repos/${owner}/${repo}/issues?state=all&page=${page}`,
      CONFIG
    );
    return res.data;
  }
}
