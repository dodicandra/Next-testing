const pt = require('path');

module.exports = {
  sassOptions: {
    includePaths: [pt.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://api.admin-server-bons.com/api/v1/:path*`,
      },
    ];
  },
};
