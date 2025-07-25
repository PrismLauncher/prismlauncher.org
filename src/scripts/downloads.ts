export const determineDownloadLink = () => {
	const { userAgent, platform } = navigator;
	const ua = userAgent.toLowerCase();
	const p = platform.toLowerCase();

	if (ua.includes("windows") || p.includes("win")) {
		return "/download/windows";
	}
	if (ua.includes("mac") || p.includes("mac")) {
		return "/download/macos";
	}
	return "/download/linux";
};
