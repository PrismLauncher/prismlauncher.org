export const detectOS = (): "windows" | "macos" | "linux" => {
	const { userAgent, platform } = navigator;
	const ua = userAgent.toLowerCase();
	const p = platform.toLowerCase();

	if (ua.includes("windows") || p.includes("win")) {
		return "windows";
	}
	if (ua.includes("mac") || p.includes("mac")) {
		return "macos";
	}
	return "linux";
};

export const determineDownloadLink = () => {
	return `/download/${detectOS()}`;
};
