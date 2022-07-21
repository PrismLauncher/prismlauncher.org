const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	// https://developer.github.com/v3/repos/#get
	let json = await EleventyFetch("https://api.github.com/orgs/PolyMC/members", {
		duration: "1d", // 1 day
		type: "json" // also supports "text" or "buffer"
	});

	const info = []
	for (i in json) {
		info.push([json[i].login, json[i].avatar_url, json[i].html_url])
	}

	return {
		users: info,
	};
};
