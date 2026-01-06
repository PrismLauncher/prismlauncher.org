import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUT_FILE_DEVELOPERS = path.join(__dirname, "../src/data/developers.json");
const OUT_FILE_MODERATORS = path.join(__dirname, "../src/data/moderators.json");
const OUT_FILE_CONTRIBUTORS = path.join(
	__dirname,
	"../src/data/contributors.json",
);

const UNLISTED_CONTRIBUTORS = new Set([172450873 /* crueter */]);

let headers = {
	Accept: "application/vnd.github+json",
};
if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;

async function fetchTeam(slug) {
	let response = await axios.get(
		`https://api.github.com/orgs/PrismLauncher/teams/${slug}/members`,
		{ headers },
	);

	const users = [];
	for (let i in response.data) {
		users.push([
			response.data[i].login,
			response.data[i].avatar_url,
			response.data[i].html_url,
		]);
	}
	users.sort((a, b) => a[0].localeCompare(b[0], "en-us"));

	return { users };
}

async function fetchContributors() {
	const pages = [];

	let response;
	let i = 0;
	do {
		i = i + 1;
		response = await axios.get(
			`https://api.github.com/repos/PrismLauncher/PrismLauncher/contributors?page=${i}&per_page=100`,
			{ headers },
		);
		for (let people in response.data) {
			pages.push(response.data[people]);
		}
	} while (response.data.length > 0);

	const users = [];
	for (i in pages) {
		if (UNLISTED_CONTRIBUTORS.has(pages[i].id)) continue;
		users.push([pages[i].avatar_url, pages[i].html_url]);
	}
	return { users };
}

const developers = await fetchTeam("developers");
fs.writeFileSync(OUT_FILE_DEVELOPERS, JSON.stringify(developers, null, "\t"));

const moderators = await fetchTeam("moderators");
fs.writeFileSync(OUT_FILE_MODERATORS, JSON.stringify(moderators, null, "\t"));

const contributors = await fetchContributors();
fs.writeFileSync(
	OUT_FILE_CONTRIBUTORS,
	JSON.stringify(contributors, null, "\t"),
);
