const pt = require('path');

module.exports = {
  sassOptions: {
    includePaths: [pt.join(__dirname, 'styles')],
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/newpage': { page: '/newpage' },
    };
  },
};
