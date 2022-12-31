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
userContestRatingHistogram: `query contestRatingHistogram {
  contestRatingHistogram {
    userCount
    ratingStart
    ratingEnd
    topPercentage
  }
}`,
userProfileCalendar: `
query userProfileCalendar($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
        timestamp
        badge {
          name
          icon
        }
      }
      submissionCalendar
    }
  }
}    
`,
userDiscussionSolutions: `
query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
  userSolutionTopics(
    username: $username
    orderBy: $orderBy
    skip: $skip
    first: $first
  ) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        title
        url
        viewCount
        questionTitle
        post {
          creationDate
          voteCount
        }
      }
    }
  }
}
`
};

module.exports = {
  lcQueries,
};
