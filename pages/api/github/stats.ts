import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const data = await octokit.graphql(
    `
    query { 
      viewer { 
        name
        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
          totalRepositoryContributions
          totalPullRequestContributions
        }
      }
    }`
  );
  res.status(200).json(data);
}
