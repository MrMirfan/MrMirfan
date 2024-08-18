const headers = {
  Accept: "application/vnd.github+json",
  Authorization: "Bearer " + process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  "X-GitHub-Api-Version": "2022-11-28",
};

/**
 * Fetches Github projects and returns the response data.
 *
 * @returns {Promise<object[]>} A promise that resolves to an array of project objects.
 */
export async function fetchGithubProjects(): Promise<object[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/MrMirfan/repos",
      {
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
