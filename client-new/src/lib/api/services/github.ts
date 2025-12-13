import { apiClient } from '../client';

export interface GithubProfile {
    login: string;
    name?: string;
    avatar_url?: string;
    bio?: string;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
    twitter_username?: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
}

export interface GithubRepository {
    id: number;
    name: string;
    full_name: string;
    description?: string;
    html_url: string;
    language?: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    created_at: string;
    updated_at: string;
}

export interface GithubContribution {
    date: string;
    count: number;
    level: number;
}

export const githubService = {
    // Load GitHub profile
    async loadProfile(username?: string) {
        const response = await apiClient.get('/github/profile', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load repositories
    async loadRepositories(username?: string) {
        const response = await apiClient.get('/github/repos', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load followers
    async loadFollowers(username?: string) {
        const response = await apiClient.get('/github/followers', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load following
    async loadFollowing(username?: string) {
        const response = await apiClient.get('/github/following', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load organizations
    async loadOrganizations(username?: string) {
        const response = await apiClient.get('/github/orgs', {
            params: { username },
        });
        return response.data.json || response.data;
    },
};
