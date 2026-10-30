import type { APIRoute } from "astro";
import { buildAppcast } from "../../lib/appcast";

export const GET: APIRoute = async ({ site }) => {
	return buildAppcast({ site, variant: "legacy" });
};
