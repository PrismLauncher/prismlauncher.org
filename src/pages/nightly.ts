import type { APIContext } from "astro";

const GITHUB_API = "https://api.github.com";
const REPO = "PrismLauncher/PrismLauncher";
const WORKFLOW_FILE = "build.yml";

const NIGHTLY_LINK = "https://nightly.link";

export const prerender = false;

export async function GET({ redirect }: APIContext) {
	// TODO(@getchoo): Find a better way to do this?
	// It seems GitHub's API has no real support for merge groups, or querying them by base branch
	//
	// Hopefully they will one day and we can use that here. Or maybe switch to GraphQL?
	const headCommit = await fetch(
		`${GITHUB_API}/repos/${REPO}/commits/develop`,
	).then((res) => res.json());
	const workflowRuns = await fetch(
		`${GITHUB_API}/repos/${REPO}/actions/workflows/${WORKFLOW_FILE}/runs?event=merge_group&head_sha=${headCommit.sha}`,
	).then((res) => res.json());

	if (workflowRuns.workflow_runs.length < 1) {
		return new Response(null, {
			status: 500,
			statusText: `Unable to find merge group workflow runs associated with '${REPO}' Git SHA '${headCommit.sha}'.`,
		});
	}

	// NOTE(@getchoo): This will probably be screwed if we have more than one merge group workflow run from build.yml associated with our latest commit
	// This probably won't happen though.......probably
	const nightlyLink = `${NIGHTLY_LINK}/${REPO}/actions/runs/${workflowRuns.workflow_runs[0].id}`;
	return redirect(nightlyLink, 307);
}
