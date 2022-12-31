const routesData = {
  title: 'Routes',
  routes: [
    {
      route: '/hackerrank',
      subRoutes: [
        {
          route: '/profile',
          method: 'GET',
        },
        {
          route: '/badges',
          method: 'GET',
        },
        {
          route: '/certificates',
          method: 'GET',
        },
        {
          route: '/work',
          method: 'GET',
        },
        {
          route: '/school',
          method: 'GET',
        },
      ]
    },
    {
      route: '/leetcode',
      subRoutes: [
        {
          route: '/userInfo',
          method: 'GET',
        },
        {
          route: '/languages',
          method: 'GET',
        },
        {
          route: '/tagProblemCounts',
          method: 'GET',
        },
        {
          route: '/userContestRatingInfo',
          method: 'GET',
        },
        {
          route: '/userProblemsSolvedInfo',
          method: 'GET',
        },
        {
          route: '/userBadgesInfo',
          method: 'GET',
        },{
          route: '/userRecentAcSubmissions',
          method: 'GET',
        },
        {
          route: '/userContestRatingHistogram',
          method: 'GET',
        },
        {
          route: '/userProfileCalendar',
          method: 'GET',
        },
        {
          route: '/userDiscussionSolutions',
          method: 'GET',
        }
      ]
    },
    {
      route: '/codeforces',
      subRoutes: [
        {
          route: '/profile',
          method: 'GET',
        },
        {
          route: '/contestRatings',
          method: 'GET',
        },
        {
          route: '/status',
          method: 'GET',
        }
      ]
    },
    {
      route: '/github',
      subRoutes: [
        {
          route: '/profile',
          method: 'GET',
        },
        {
          route: '/followers',
          method: 'GET',
        },
        {
          route: '/following',
          method: 'GET',
        },
        {
          route: '/orgs',
          method: 'GET',
        },
        {
          route: '/repos',
          method: 'GET',
        }
      ]
    },
    {
      route: '/codechef',
      subRoutes: [
        {
          route: '/profile',
          method: 'GET',
        },
      ]
    },
    {
      route: '/user',
      subRoutes: [
        {
          route: '/',
          method: 'POST',
          description: 'Get user details',
        },
        {
          route: '/',
          method: 'PUT',
          description: 'Update user details',
        },
        {
          route: '/',
          method: 'DELETE',
          description: 'Delete user details',
        },
        {
          route: '/login',
          method: 'POST',
          description: 'Login user'
        },
        {
          route: '/signup',
          method: 'POST',
          description: 'Signup user'
        },
        {
          route: '/all',
          method: 'GET',
          description: 'Get all users'
        }
      ]
    }
  ]
}

module.exports = { routesData };