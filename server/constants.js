const hrProfileApiUrl =
  "https://www.hackerrank.com/rest/contests/master/hackers";
const hrBadgesApiUrl =
  "https://www.hackerrank.com/rest/hackers/abhi_mishra_1/badges";
const hrScoresApiUrl =
  "https://www.hackerrank.com/rest/hackers/abhi_mishra_1/scores_elo";
const hrEducationInfoApiUrl =
  "https://www.hackerrank.com/community/v1/hackers/abhi_mishra_1/hacker_schools";
const hrCertificateApiUrl =
  "https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=abhi_mishra_1";
const hrRatingHistoryApiUrl =
  "https://www.hackerrank.com/rest/hackers/abhi_mishra_1/rating_histories_elo";
const hrContestHistoryApiUrl =
  "https://www.hackerrank.com/rest/hackers/abhi_mishra_1/contest_participation?offset=0&limit=5";

const lcQueries = {
  userInfo: `query userInfo($username: String!) {
    matchedUser(username: $username) {
      username
      githubUrl
      linkedinUrl
      twitterUrl
      profile {
        realName 
        userAvatar
        gender
        aboutMe
        location
        birthday
        jobTitle
        company
        school
        websites
        ranking
        skillTags
      }
    }
  }`,
  languageStats: `query languageStats($username: String!) {
        matchedUser(username: $username) {
            languageProblemCount {
                languageName
                problemsSolved
            }
        }
    }`,
  tagProblemCounts: `query skillStats($username: String!) {
        matchedUser(username: $username) {
            tagProblemCounts {
                advanced {
                    tagName
                    tagSlug
                    problemsSolved
                }
                intermediate {
                    tagName
                    tagSlug
                    problemsSolved
                }
                fundamental {
                    tagName
                    tagSlug
                    problemsSolved
                }
            }
        }
    }`,
  userContestRatingInfo: `query userContestRankingInfo($username: String!) {
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
    badge {
      name
    }
  }
  userContestRankingHistory(username: $username) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}`,
  userProblemsSolvedInfo: `
query userProblemsSolved($username: String!) {
allQuestionsCount {
difficulty
count
}
matchedUser(username: $username) {
problemsSolvedBeatsStats {
  difficulty
  percentage
}
submitStatsGlobal {
  acSubmissionNum {
    difficulty
    count
  }
}
}
}`,
  userBadgesInfo: `
query userBadges($username: String!) {
matchedUser(username: $username) {
badges {
  id
  name
  shortName
  displayName
  icon
  hoverText
  medal {
    slug
    config {
      iconGif
      iconGifBackground
    }
  }
  creationDate
  category
}
upcomingBadges {
  name
  icon
  progress
}
}
}`,
  userRecentAcSubmissions: `
    query recentAcSubmissions($username: String!, $limit: Int!) {
        recentAcSubmissionList(username: $username, limit: $limit) {
            id
            title
            titleSlug
            timestamp
        }
    }
`,
};

module.exports = {
  lcQueries,
};
