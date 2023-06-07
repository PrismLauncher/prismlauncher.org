import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUT_FILE_MEMBERS = path.join(__dirname, "../src/_data/members.json");
const OUT_FILE_CONTRIBUTORS = path.join(
  __dirname,
  "../src/_data/contributors.json"
);

let headers = {
  Accept: "application/vnd.github+json",
};
if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;

async function fetchMembers() {
  // https://developer.github.com/v3/repos/#get
  let response = await axios.get(
    `https://api.github.com/orgs/PrismLauncher/members?per_page=100`,
    { headers }
  );

  const users = [];
  for (let i in response.data) {
    users.push([
      response.data[i].login,
      response.data[i].avatar_url,
      response.data[i].html_url,
    ]);
  }

  return {
    users,
  };
}

async function fetchContributors() {
  // https://developer.github.com/v3/repos/#get
  const pages = [];

  let response;
  let i = 0;
  do {
    i = i + 1;
    response = await axios.get(
      `https://api.github.com/repos/PrismLauncher/PrismLauncher/contributors?page=${i}&per_page=100`,
      { headers }
    );
    for (let people in response.data) {
      pages.push(response.data[people]);
    }
  } while (response.data.length > 0);

  const users = [];
  for (i in pages) {
    users.push([pages[i].avatar_url, pages[i].html_url]);
  }
  return { users };
}

const members = await fetchMembers();
fs.writeFileSync(OUT_FILE_MEMBERS, JSON.stringify(members, null, "\t"));

const contributors = await fetchContributors();
fs.writeFileSync(
  OUT_FILE_CONTRIBUTORS,
  JSON.stringify(contributors, null, "\t")
);
