import { useQuery } from '@tanstack/react-query';
import { leetcodeService } from '../lib/api/services/leetcode';

// Query keys
export const leetcodeKeys = {
    all: ['leetcode'] as const,
    profile: (username?: string) => [...leetcodeKeys.all, 'profile', username] as const,
    stats: (username?: string) => [...leetcodeKeys.all, 'stats', username] as const,
    submissions: (username?: string) => [...leetcodeKeys.all, 'submissions', username] as const,
    contests: (username?: string) => [...leetcodeKeys.all, 'contests', username] as const,
};

// Get Leetcode profile
export function useLeetcodeProfile(username?: string) {
    return useQuery({
        queryKey: leetcodeKeys.profile(username),
        queryFn: () => leetcodeService.loadProfile(username),
        enabled: !!username,
    });
}

// Get Leetcode stats
export function useLeetcodeStats(username?: string) {
    return useQuery({
        queryKey: leetcodeKeys.stats(username),
        queryFn: () => leetcodeService.loadStats(username),
        enabled: !!username,
    });
}

// Get Leetcode submissions
export function useLeetcodeSubmissions(username?: string) {
    return useQuery({
        queryKey: leetcodeKeys.submissions(username),
        queryFn: () => leetcodeService.loadSubmissions(username),
        enabled: !!username,
    });
}

// Get Leetcode contests
export function useLeetcodeContests(username?: string) {
    return useQuery({
        queryKey: leetcodeKeys.contests(username),
        queryFn: () => leetcodeService.loadContests(username),
        enabled: !!username,
    });
}
