import { useQuery } from '@tanstack/react-query';
import { codechefService } from '../lib/api/services/codechef';

// Query keys
export const codechefKeys = {
    all: ['codechef'] as const,
    profile: (username?: string) => [...codechefKeys.all, 'profile', username] as const,
};

// Get Codechef profile
export function useCodechefProfile(username?: string) {
    return useQuery({
        queryKey: codechefKeys.profile(username),
        queryFn: () => codechefService.loadProfile(username),
        enabled: !!username,
    });
}
