export interface UserProfile {
    _id?: string;
    clerkId: string;
    username: string;
    name?: string;
    email?: string;
    bio?: string;
    location?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    hackerrank?: string;
    leetcode?: string;
    codeforces?: string;
    codechef?: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    grade?: string;
    startDate: string;
    endDate: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    designation?: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    githubLink?: string;
    websiteLink?: string;
    skills: string[];
}

export interface UserData extends UserProfile {
    education: Education[];
    experiences: Experience[];
    projects: Project[];
}
