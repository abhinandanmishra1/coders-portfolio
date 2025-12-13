import { useQuery } from '@tanstack/react-query';
import { hackerrankService } from '../lib/api/services/hackerrank';

// Query keys
export const hackerrankKeys = {
    all: ['hackerrank'] as const,
    profile: (username?: string) => [...hackerrankKeys.all, 'profile', username] as const,
    badges: (username?: string) => [...hackerrankKeys.all, 'badges', username] as const,
    certificates: (username?: string) => [...hackerrankKeys.all, 'certificates', username] as const,
    experiences: (username?: string) => [...hackerrankKeys.all, 'experiences', username] as const,
    schools: (username?: string) => [...hackerrankKeys.all, 'schools', username] as const,
};

// Get Hackerrank profile
export function useHackerrankProfile(username?: string) {
    return useQuery({
        queryKey: hackerrankKeys.profile(username),
        queryFn: () => hackerrankService.loadProfile(username),
        enabled: !!username,
    });
}

// Get Hackerrank badges
export function useHackerrankBadges(username?: string) {
    return useQuery({
        queryKey: hackerrankKeys.badges(username),
        queryFn: () => hackerrankService.loadBadges(username),
        enabled: !!username,
    });
}

// Get Hackerrank certificates
export function useHackerrankCertificates(username?: string) {
    return useQuery({
        queryKey: hackerrankKeys.certificates(username),
        queryFn: () => hackerrankService.loadCertificates(username),
        enabled: !!username,
    });
}

// Get Hackerrank work experience
export function useHackerrankExperiences(username?: string) {
    return useQuery({
        queryKey: hackerrankKeys.experiences(username),
        queryFn: () => hackerrankService.loadExperiences(username),
        enabled: !!username,
    });
}

// Get Hackerrank schools
export function useHackerrankSchools(username?: string) {
    return useQuery({
        queryKey: hackerrankKeys.schools(username),
        queryFn: () => hackerrankService.loadSchools(username),
        enabled: !!username,
    });
}
