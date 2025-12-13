import { apiClient } from '../client';

export interface LeetcodeProfile {
    username: string;
    name?: string;
    avatar?: string;
    ranking?: number;
    reputation?: number;
    problemsSolved?: {
        easy: number;
        medium: number;
        hard: number;
        total: number;
    };
    contestRating?: number;
    contestRanking?: number;
    badges?: LeetcodeBadge[];
    recentSubmissions?: LeetcodeSubmission[];
}

export interface LeetcodeBadge {
    id: string;
    name: string;
    icon?: string;
}

export interface LeetcodeSubmission {
    id: string;
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
}

export const leetcodeService = {
    // Load Leetcode user info
    async loadProfile(username?: string) {
        const response = await apiClient.get('/leetcode/userInfo', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load problem stats
    async loadStats(username?: string) {
        const response = await apiClient.get('/leetcode/userProblemsSolvedInfo', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load recent submissions
    async loadSubmissions(username?: string) {
        const response = await apiClient.get('/leetcode/userRecentAcSubmissions', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load contest info
    async loadContests(username?: string) {
        const response = await apiClient.get('/leetcode/userContestRatingInfo', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load languages count
    async loadLanguages(username?: string) {
        const response = await apiClient.get('/leetcode/languages', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load tag problem counts
    async loadTagProblemCounts(username?: string) {
        const response = await apiClient.get('/leetcode/tagProblemCounts', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load user badges
    async loadBadges(username?: string) {
        const response = await apiClient.get('/leetcode/userBadgesInfo', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load contest rating histogram
    async loadContestRatingHistogram(username?: string) {
        const response = await apiClient.get('/leetcode/userContestRatingHistogram', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load profile calendar
    async loadProfileCalendar(username?: string) {
        const response = await apiClient.get('/leetcode/userProfileCalendar', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load discussion solutions
    async loadDiscussionSolutions(username?: string) {
        const response = await apiClient.get('/leetcode/userDiscussionSolutions', {
            params: { username },
        });
        return response.data.json || response.data;
    },
};
