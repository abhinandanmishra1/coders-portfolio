import { useQuery } from '@tanstack/react-query';
import { codeforcesService } from '../lib/api/services/codeforces';

// Query keys
export const codeforcesKeys = {
    all: ['codeforces'] as const,
    profile: (username?: string) => [...codeforcesKeys.all, 'profile', username] as const,
    ratingHistory: (username?: string) => [...codeforcesKeys.all, 'ratingHistory', username] as const,
    contests: (username?: string) => [...codeforcesKeys.all, 'contests', username] as const,
    submissions: (username?: string) => [...codeforcesKeys.all, 'submissions', username] as const,
};

// Get Codeforces profile
export function useCodeforcesProfile(username?: string) {
    return useQuery({
        queryKey: codeforcesKeys.profile(username),
        queryFn: () => codeforcesService.loadProfile(username),
        enabled: !!username,
    });
}

// Get Codeforces rating history
export function useCodeforcesRatingHistory(username?: string) {
    return useQuery({
        queryKey: codeforcesKeys.ratingHistory(username),
        queryFn: () => codeforcesService.loadRatingHistory(username),
        enabled: !!username,
    });
}

// Get Codeforces contests
export function useCodeforcesContests(username?: string) {
    return useQuery({
        queryKey: codeforcesKeys.contests(username),
        queryFn: () => codeforcesService.loadContests(username),
        enabled: !!username,
    });
}

// Get Codeforces submissions
export function useCodeforcesSubmissions(username?: string) {
    return useQuery({
        queryKey: codeforcesKeys.submissions(username),
        queryFn: () => codeforcesService.loadSubmissions(username),
        enabled: !!username,
    });
}
