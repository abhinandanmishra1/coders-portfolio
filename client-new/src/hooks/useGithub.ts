import { useQuery } from '@tanstack/react-query';
import { githubService } from '../lib/api/services/github';

// Query keys
export const githubKeys = {
    all: ['github'] as const,
    profile: (username?: string) => [...githubKeys.all, 'profile', username] as const,
    repositories: (username?: string) => [...githubKeys.all, 'repositories', username] as const,
    followers: (username?: string) => [...githubKeys.all, 'followers', username] as const,
    following: (username?: string) => [...githubKeys.all, 'following', username] as const,
    organizations: (username?: string) => [...githubKeys.all, 'organizations', username] as const,
};

// Get GitHub profile
export function useGithubProfile(username?: string) {
    return useQuery({
        queryKey: githubKeys.profile(username),
        queryFn: () => githubService.loadProfile(username),
        enabled: !!username,
    });
}

// Get GitHub repositories
export function useGithubRepositories(username?: string) {
    return useQuery({
        queryKey: githubKeys.repositories(username),
        queryFn: () => githubService.loadRepositories(username),
        enabled: !!username,
    });
}

// Get GitHub followers
export function useGithubFollowers(username?: string) {
    return useQuery({
        queryKey: githubKeys.followers(username),
        queryFn: () => githubService.loadFollowers(username),
        enabled: !!username,
    });
}

// Get GitHub following
export function useGithubFollowing(username?: string) {
    return useQuery({
        queryKey: githubKeys.following(username),
        queryFn: () => githubService.loadFollowing(username),
        enabled: !!username,
    });
}

// Get GitHub organizations
export function useGithubOrganizations(username?: string) {
    return useQuery({
        queryKey: githubKeys.organizations(username),
        queryFn: () => githubService.loadOrganizations(username),
        enabled: !!username,
    });
}
