const pt = require('path');

module.exports = {
  sassOptions: {
    includePaths: [pt.join(__dirname, 'styles')],
  },
  distDir: 'build',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/newpage': { page: '/newpage' },
    };
  },
};
