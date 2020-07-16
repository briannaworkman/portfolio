const projects = [
  {
    img: ['../assets/images/github-profile.gif'],
    title: 'My GitHub Profile',
    github_url: 'https://github.com/briworkman/github-profile',
    live_url: 'https://my-github-profile.netlify.app/',
    description:
      'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, GitHub calendar, and sort through your top repos by number of stars, forks, and size.',
    role: 'front end',
    built_with: ['React', 'GitHub API'],
    api_url: 'https://developer.github.com/v4/',
  },
  {
    img: ['../assets/images/recipe-cheqr.gif'],
    title: 'Recipe Cheqr',
    github_url: 'https://github.com/irisjitomo/recipe-site-7days7websites',
    live_url: 'https://recipecheqr.netlify.app/',
    description:
      'The Recipe Cheqr app allows users to search, filter, and view recipes and their specific instructions, as well as their nutrition facts. The app also allows users to generate/create grocery lists and create/login to a profile to save their favorite recipes',
    role: 'front end',
    built_with: ['React', 'Spoonacular API'],
    api_url: 'https://rapidapi.com/user/spoonacular',
  },
  {
    img: ['../assets/images/covid.gif'],
    title: 'COVID-19 Dashboard',
    github_url: 'https://github.com/briworkman/covid-19',
    live_url: 'https://ncovid-19-dashboard.netlify.app',
    description:
      "The COVID-19 Dashboard helps you to track the virus and it's impact all over the world by displaying current statistics in an easy to understand, visual way. All data is updated at least once a day via active APIs",
    role: 'front end',
    built_with: ['React'],
    api_url: null,
  },
  {
    img: [
      '../assets/images/key-login.png',
      '../assets/images/key-feed.png',
      '../assets/images/key-profile.png',
    ],
    title: 'Key Conservation',
    github_url: 'https://github.com/Lambda-School-Labs?q=key&type=&language=',
    live_url: null,
    description:
      'Key Conservation is helping conservationists gain critical funding and global support through a mobile app that provides real-time updates on day-to-day campaigns. The Key Conservation app has a scrolling live feed that updates as needs from conservationists occur around the world in real-time.',
    role: 'scrolling live feed and the connect/follow feature',
    built_with: ['React Native & Redux', 'Node.js & Express'],
    api_url: null,
  },
  {
    img: ['../assets/images/movie-box.gif'],
    title: 'Movie Box',
    github_url: 'https://github.com/briworkman/movie-box',
    live_url: 'https://the-movie-box.netlify.app',
    description:
      'Movie Box is an app that allows you to view your favorite movie and TV show plots, budgets, actors, and more.',
    role: 'front end',
    built_with: ['React'],
    api_url: 'https://www.themoviedb.org/?language=en-US',
  },
];

export default projects;
