const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	// https://developer.github.com/v3/repos/#get
	let json = await EleventyFetch("https://api.github.com/repos/PolyMC/PolyMC/tags", {
		duration: "1d", // 1 day
		type: "json" // also supports "text" or "buffer"
	});

	const tags = []
	for (i in json) {
		tags.push(json[i].name)
	}

	return {
		current: tags[0],
		archive: tags.slice(1)
	};
};