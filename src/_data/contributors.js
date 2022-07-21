const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	// https://developer.github.com/v3/repos/#get
    const pages = []

    let i = 0
    do {
        i = i + 1;
        json = await EleventyFetch(`https://api.github.com/repos/PolyMC/PolyMC/contributors?page=${i}`, {
            duration: "1d", // 1 day
            type: "json" // also supports "text" or "buffer"
        });
        for (people in json) {
            pages.push(json[people])
        }
    } while (json != "")

	const info = []
	for (i in pages) {
		info.push([pages[i].avatar_url, pages[i].html_url])
	}

	return {
		users: info,
	};
};
