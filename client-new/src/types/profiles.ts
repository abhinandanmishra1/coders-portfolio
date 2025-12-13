export interface HackerrankProfile {
    username: string;
    badges: Array<{
        name: string;
        level: string;
    }>;
    skills: Array<{
        name: string;
        score: number;
    }>;
}

export interface LeetcodeProfile {
    username: string;
    ranking: number;
    problemsSolved: {
        easy: number;
        medium: number;
        hard: number;
        total: number;
    };
    badges: string[];
}

export interface CodeforcesProfile {
    username: string;
    rating: number;
    maxRating: number;
    rank: string;
    maxRank: string;
    contestsParticipated: number;
}

export interface CodechefProfile {
    username: string;
    rating: number;
    stars: string;
    globalRank: number;
    countryRank: number;
}

export interface GithubProfile {
    username: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    publicRepos: number;
    contributions: number;
    languages: Record<string, number>;
}
