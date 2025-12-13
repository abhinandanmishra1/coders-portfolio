import { apiClient } from '../client';

export interface HackerrankProfile {
    username: string;
    name?: string;
    avatar?: string;
    level?: string;
    badges?: HackerrankBadge[];
    certificates?: HackerrankCertificate[];
    skills?: any[];
}

export interface HackerrankBadge {
    id: string;
    name: string;
    badge_url?: string;
    level?: string;
}

export interface HackerrankCertificate {
    id: string;
    name: string;
    certificate_url?: string;
    issued_date?: string;
}

export const hackerrankService = {
    // Load Hackerrank profile
    async loadProfile(username?: string) {
        const response = await apiClient.get('/hackerrank/profile', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load Hackerrank badges
    async loadBadges(username?: string) {
        const response = await apiClient.get('/hackerrank/badges', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load Hackerrank certificates
    async loadCertificates(username?: string) {
        const response = await apiClient.get('/hackerrank/certificates', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load Hackerrank work experience
    async loadExperiences(username?: string) {
        const response = await apiClient.get('/hackerrank/work', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load Hackerrank schools
    async loadSchools(username?: string) {
        const response = await apiClient.get('/hackerrank/school', {
            params: { username },
        });
        return response.data.json || response.data;
    },
};
