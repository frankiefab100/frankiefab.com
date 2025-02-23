import { Octokit } from '@octokit/rest';
import { RepoType, FetchOptions } from "../types/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function getGithubRepos({
  username,
  count = 15,
  minStars = 2,
  random = false
}: FetchOptions): Promise<RepoType[]> {
  try {
    const response = await octokit.repos.listForUser({
      username: username,
      per_page: 100,
      sort: 'updated',
      direction: 'desc'
    });

    let repos: RepoType[] = response.data
      .filter(repo => (repo.stargazers_count ?? 0) >= minStars)
      .map(repo => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description || 'No description provided.',
        stars: repo.stargazers_count ?? 0,
        updatedAt: repo.updated_at ? new Date(repo.updated_at).getTime() : 0
      }));

    if (random) {
      repos = repos.sort(() => 0.5 - Math.random());
    } else {
      repos = repos.sort((a, b) => {
        const starsDiff = b.stars - a.stars;
        if (starsDiff !== 0) return starsDiff;
        return b.updatedAt - a.updatedAt;
      });
    }

    return repos.slice(0, count);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

