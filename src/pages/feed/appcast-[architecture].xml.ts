import type { APIRoute } from "astro";
import { buildAppcast, type MacOSArchitecture } from "../../lib/appcast";

export const getStaticPaths = () => {
	return [
		{ params: { architecture: "arm64" } },
		{ params: { architecture: "x86_64" } },
	];
};

export const GET: APIRoute = async ({ site, params }) => {
	const architecture = params.architecture as MacOSArchitecture;
	return buildAppcast({ site, variant: architecture });
};
