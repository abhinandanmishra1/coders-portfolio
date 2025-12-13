import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService, type UserProfile } from '../lib/api/services/user';

// Query keys
export const userKeys = {
    all: ['user'] as const,
    profile: (username: string) => [...userKeys.all, 'profile', username] as const,
    currentUser: () => [...userKeys.all, 'current'] as const,
};

// Get user profile by username
export function useUserProfile(username: string, enabled = true) {
    return useQuery({
        queryKey: userKeys.profile(username),
        queryFn: () => userService.loadUser(username),
        enabled: enabled && !!username,
    });
}

// Get current logged-in user
export function useCurrentUser() {
    return useQuery({
        queryKey: userKeys.currentUser(),
        queryFn: () => userService.getCurrentUser(),
    });
}

// Update user profile
export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userData: Partial<UserProfile>) => userService.updateUser(userData),
        onSuccess: () => {
            // Invalidate and refetch user queries
            queryClient.invalidateQueries({ queryKey: userKeys.all });
        },
    });
}
