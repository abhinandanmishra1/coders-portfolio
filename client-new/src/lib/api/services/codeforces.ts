import { apiClient } from '../client';

export interface CodeforcesProfile {
    handle: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    rating?: number;
    maxRating?: number;
    rank?: string;
    maxRank?: string;
    contribution?: number;
    friendOfCount?: number;
    titlePhoto?: string;
}

export interface CodeforcesContest {
    contestId: number;
    contestName: string;
    handle: string;
    rank: number;
    ratingUpdateTimeSeconds: number;
    oldRating: number;
    newRating: number;
}

export const codeforcesService = {
    // Load Codeforces profile
    async loadProfile(username?: string) {
        const response = await apiClient.get('/codeforces/profile', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load rating history (contest ratings)
    async loadRatingHistory(username?: string) {
        const response = await apiClient.get('/codeforces/contestRatings', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load contest history (same as rating history for codeforces)
    async loadContests(username?: string) {
        const response = await apiClient.get('/codeforces/contestRatings', {
            params: { username },
        });
        return response.data.json || response.data;
    },

    // Load submissions/status
    async loadSubmissions(username?: string) {
        const response = await apiClient.get('/codeforces/status', {
            params: { username },
        });
        return response.data.json || response.data;
    },
};
