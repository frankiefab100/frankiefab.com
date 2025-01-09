

import { Octokit } from '@octokit/rest';
import { RepoType } from "./types";
import { FetchOptions } from "./types"

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN
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
      per_page: 100, // Maximum allowed per page
      type: 'owner',
      sort: 'updated', // This ensures we get recently updated repos
      direction: 'desc'
    });

    let repos: RepoType[] = response.data
      .filter(repo => (repo.stargazers_count ?? 0) >= minStars)
      .map(repo => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description || 'No description provided.',
        stars: repo.stargazers_count ?? 0,
        image: repo.owner?.avatar_url ?? '/placeholder.png',
        updatedAt: repo.updated_at
      }));

    if (random) {
      repos = repos.sort(() => 0.5 - Math.random());
    } else {
      // Sort by stars first (descending), then by update date
      repos = repos.sort((a, b) => {
        // First, compare by stars
        const starsDiff = b.stars - a.stars;
        if (starsDiff !== 0) return starsDiff;

        // If stars are equal, compare by update date
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
    }

    return repos.slice(0, count);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}