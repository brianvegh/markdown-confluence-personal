export function cleanUpUrlIfConfluence(
	input: string,
	confluenceBaseUrl: string,
): string {
	let url: URL;

	// Check if the input is a valid URL
	try {
		url = new URL(input);
	} catch {
		return "#";
	}

	const confluenceUrl = new URL(confluenceBaseUrl);
	if (url.hostname !== confluenceUrl.hostname) {
		return input;
	}

	// Check if the input matches the specified path format
	//const pathRegex = /\/wiki\/spaces\/(?:~)?(\w+)\/pages\/(\d+)(?:\/(\w*))?/;
	const matches = url.pathname.match(pathRegex);

	if (matches) {
		// Update the pathname to remove the last optional part
		//url.pathname = `/wiki/spaces/${matches[1]}/pages/${matches[2]}`;
		//url.pathname = `/display/${matches[1]}/${matches[2]}
		url.pathname = `/display/${matches[1]}`;


		// Return the updated URL
		return url.href;
	}

	return input;
}
