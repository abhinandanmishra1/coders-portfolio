import { apiClient } from '../client';

export interface UserProfile {
    username: string;
    email?: string;
    name?: string;
    bio?: string;
    avatar?: string;
    socialLinks?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
    platforms?: {
        hackerrank?: string;
        leetcode?: string;
        codeforces?: string;
        codechef?: string;
        github?: string;
    };
    education?: Education[];
    experience?: Experience[];
    projects?: Project[];
}

export interface Education {
    id?: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export interface Experience {
    id?: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description?: string;
    location?: string;
}

export interface Project {
    id?: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    startDate?: string;
    endDate?: string;
}

export const userService = {
    // Load user profile
    async loadUser(username: string, token?: string) {
        const response = await apiClient.post('/user', { username, token });
        return response.data.json || response.data;
    },

    // Update user profile
    async updateUser(userData: Partial<UserProfile>) {
        const response = await apiClient.put('/user', userData);
        return response.data;
    },

    // Get current user profile
    async getCurrentUser() {
        const response = await apiClient.get('/user/me');
        return response.data;
    },
};
