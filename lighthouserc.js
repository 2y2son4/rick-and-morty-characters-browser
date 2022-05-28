module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      numberOfRuns: 1,
      url: [
        'https://2y2son4.github.io/rick-and-morty-characters-browser/#/',
        'https://2y2son4.github.io/rick-and-morty-characters-browser/#/page=1/character=1',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
