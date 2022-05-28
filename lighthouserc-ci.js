module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      numberOfRuns: 3,
      url: ['https://2y2son4.github.io/rick-and-morty-characters-browser/#/'],
    },
    asserts: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
        'categories:pwa': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
