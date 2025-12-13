import { apiClient } from '../client';

export interface CodechefProfile {
    username: string;
    name?: string;
    currentRating?: number;
    highestRating?: number;
    stars?: string;
    globalRank?: number;
    countryRank?: number;
    country?: string;
    problemsSolved?: number;
}

export interface CodechefContest {
    code: string;
    name: string;
    rating: number;
    rank: number;
    endDate: string;
}

export const codechefService = {
    // Load Codechef profile
    async loadProfile(username?: string) {
        const response = await apiClient.get('/codechef/profile', {
            params: { username },
        });
        return response.data.json || response.data;
    },
};
